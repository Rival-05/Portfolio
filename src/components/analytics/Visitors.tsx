"use client";

import { useEffect, useState } from "react";
import Eye from "../svgs/Eye";

export default function Visitors() {
  const [totalVisitors, setTotalVisitors] = useState<number | null>(null);
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadVisitors = async () => {
      try {
        const res = await fetch("/api/visitors", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch visitor stats");

        const data = await res.json();
        if (isMounted) {
          if (typeof data?.visitors === "number") {
            setTotalVisitors(data.visitors);
            setIsUnavailable(false);
            return;
          }

          setTotalVisitors(null);
          setIsUnavailable(true);
        }
      } catch {
        if (isMounted) {
          setTotalVisitors(null);
          setIsUnavailable(true);
        }
      }
    };

    loadVisitors();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex items-center gap-1 text-secondary">
      <Eye />
      <span className="text-sm font-semibold tracking-wide">
        {isUnavailable ? "N/A" : (totalVisitors ?? "...")} Visitors
      </span>
    </div>
  );
}
