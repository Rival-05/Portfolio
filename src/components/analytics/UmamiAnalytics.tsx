import Script from "next/script";

export default function UmamiAnalytics() {
  const umamiSrc = process.env.UMAMI_SRC;
  const umamiId = process.env.UMAMI_WEBSITE_ID;

  if (!umamiSrc || !umamiId) {
    console.error("Umami Analytics is not configured.");
    return null;
  }

  return (
    <Script
      id="umami-analytics"
      src={umamiSrc}
      data-website-id={umamiId}
      strategy="afterInteractive"
      async
    />
  );
}
