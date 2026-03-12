export async function GET() {
    const websiteId = process.env.UMAMI_WEBSITE_ID;
    const apiKey = process.env.UMAMI_API_KEY;

    if (!websiteId || !apiKey) {
        return Response.json(
            { visitors: 0, error: "Missing Umami env variables" },
            { status: 500 }
        );
    }

    try {
        // startAt and endAt are required by Umami stats API (Unix ms timestamps).
        const startAt = 0; // epoch start = "all time"
        const endAt = Date.now();
        const url = `https://cloud.umami.is/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`;

        // Umami Cloud personal API keys are sent via x-umami-api-key.
        const res = await fetch(url, {
            headers: {
                "x-umami-api-key": apiKey,
            },
            cache: "no-store",
        });

        if (!res.ok) {
            const errorText = await res.text();
            return Response.json(
                {
                    visitors: 0,
                    error: "Failed to fetch visitor stats",
                    upstreamStatus: res.status,
                    upstreamBody: errorText || null,
                },
                { status: 200 }
            );
        }

        const data = await res.json();
        // Umami stats returns visitors as { value: number, change: number }
        const visitors = data?.visitors?.value ?? 0;

        return Response.json({ visitors });
    } catch {
        return Response.json(
            { visitors: 0, error: "Unexpected server error" },
            { status: 500 }
        );
    }
}