"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        // Festival has started or passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-3 text-center">
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-white">
          {timeLeft.days}
        </span>
        <span className="text-xs text-gray-300">Days</span>
      </div>
      <div className="text-xl md:text-2xl font-bold text-white">:</div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-white">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
        <span className="text-xs text-gray-300">Hours</span>
      </div>
      <div className="text-xl md:text-2xl font-bold text-white">:</div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-white">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
        <span className="text-xs text-gray-300">Mins</span>
      </div>
      <div className="text-xl md:text-2xl font-bold text-white">:</div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-white">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </span>
        <span className="text-xs text-gray-300">Secs</span>
      </div>
    </div>
  );
}
