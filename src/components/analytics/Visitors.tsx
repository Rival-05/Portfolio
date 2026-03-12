"use client";

import { useEffect, useState } from "react";
import Eye from "../svgs/Eye";

export default function Visitors() {
  const [totalVisitors, setTotalVisitors] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadVisitors = async () => {
      try {
        const res = await fetch("/api/visitors", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch visitor stats");

        const data = await res.json();
        if (isMounted) {
          setTotalVisitors(
            typeof data?.visitors === "number" ? data.visitors : 0,
          );
        }
      } catch {
        if (isMounted) setTotalVisitors(0);
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
        {totalVisitors ?? "..."} Visitors
      </span>
    </div>
  );
}
