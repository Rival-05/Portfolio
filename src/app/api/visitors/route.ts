import { NextResponse } from "next/server";

type VisitorSnapshot = {
    count: number;
    pageviews: number;
    at: number;
};

let lastSuccessfulSnapshot: VisitorSnapshot | null = null;

async function fetchUmamiStats(url: string, apiKey: string) {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        try {
            return await fetch(url, {
                headers: {
                    "x-umami-api-key": apiKey,
                    Accept: "application/json",
                },
                next: { revalidate: 300 },
            });
        } catch (error) {
            if (attempt === maxAttempts) {
                throw error;
            }

            // Small backoff for transient DNS/network hiccups.
            await new Promise((resolve) => setTimeout(resolve, attempt * 300));
        }
    }

    throw new Error("Unable to fetch Umami stats");
}

export async function GET() {
    const websiteId = process.env.UMAMI_WEBSITE_ID;
    const apiKey = process.env.UMAMI_API_KEY;

    if (!websiteId || !apiKey) {
        return NextResponse.json(
            { error: "Missing Umami env variables" },
            { status: 500 }
        );
    }

    try {
        const startAt = 0;
        const endAt = Date.now();
        const umamiUrl = `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`;

        // Umami Cloud uses the public API endpoint and x-umami-api-key auth.
        const response = await fetchUmamiStats(umamiUrl, apiKey);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Umami API error:', response.status, errorText);
            throw new Error(`Umami API returned ${response.status}`);
        }

        const data = await response.json();
        const visitorCount = typeof data?.visitors === "number"
            ? data.visitors
            : data?.visitors?.value || 0;
        const pageviewCount = typeof data?.pageviews === "number"
            ? data.pageviews
            : data?.pageviews?.value || 0;

        lastSuccessfulSnapshot = {
            count: visitorCount,
            pageviews: pageviewCount,
            at: Date.now(),
        };

        return NextResponse.json(
            { count: visitorCount, visitors: visitorCount, pageviews: pageviewCount },
            {
                headers: {
                    // Cache the response for 5 minutes
                    "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
                },
            }
        );
    } catch (error) {
        console.error('Error fetching Umami stats:', error);

        if (lastSuccessfulSnapshot) {
            return NextResponse.json(
                {
                    count: lastSuccessfulSnapshot.count,
                    visitors: lastSuccessfulSnapshot.count,
                    pageviews: lastSuccessfulSnapshot.pageviews,
                    stale: true,
                    staleAt: lastSuccessfulSnapshot.at,
                },
                {
                    headers: {
                        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
                    },
                }
            );
        }

        return NextResponse.json(
            { count: 0, visitors: 0, pageviews: 0, stale: true, error: 'Failed to fetch visitor count' },
            {
                status: 200,
                headers: {
                    "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
                },
            }
        );
    }
}
