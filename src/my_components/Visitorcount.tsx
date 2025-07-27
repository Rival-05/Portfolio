"use client"
import React, {useEffect, useState} from 'react';
import {MapPinned} from 'lucide-react';

export const VisitorCount = () => {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/visits')
            .then((res) => res.json())
            .then((data) => setCount(data.totalVisitors));
    }, []);

    return (
        <div className='flex items-center text-sm text-zinc-500 mt-2'>
            <span className="text-yellow-400 drop-shadow-[0_0_6px_rgba(252,211,77,0.9)] animate-pulse mr-1">
                <MapPinned size={16}/>
            </span>
            {count !== null ? `${ formatNumber(count)} visitors` : 'Loading ...'}
        </div>
    );
}

function formatNumber(num: number): string {
  if (num < 1000) return num.toString();
  const formatted = (num / 1000).toFixed(1);
  return `${formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted}k`;
}