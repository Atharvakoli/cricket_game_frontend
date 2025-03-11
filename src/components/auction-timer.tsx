"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface AuctionTimerProps {
  seconds: number;
}

export default function AuctionTimer({ seconds }: AuctionTimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });

      setProgress(() => {
        const newProgress = ((timeLeft - 1) / seconds) * 100;
        return Math.max(0, newProgress);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, seconds]);

  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold">{timeLeft}s</div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
