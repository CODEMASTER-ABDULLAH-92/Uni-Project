"use client";

import React, { useState, useEffect } from 'react';
import { Countdown } from '../types/deals';

interface CountdownTimerProps {
  endTime: string;
  onExpire?: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime, onExpire }) => {
  const [countdown, setCountdown] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endTime).getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        onExpire?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    setCountdown(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [endTime, onExpire]);

  if (isExpired) {
    return (
      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
        Deal Expired
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-lg">
      <span className="text-sm font-medium">Ends in:</span>
      <div className="flex space-x-1">
        <div className="text-center">
          <div className="bg-white text-red-600 rounded px-1 py-0.5 min-w-6">
            <span className="text-sm font-bold">{countdown.days.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs">Days</span>
        </div>
        <span className="text-white font-bold">:</span>
        <div className="text-center">
          <div className="bg-white text-red-600 rounded px-1 py-0.5 min-w-6">
            <span className="text-sm font-bold">{countdown.hours.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs">Hrs</span>
        </div>
        <span className="text-white font-bold">:</span>
        <div className="text-center">
          <div className="bg-white text-red-600 rounded px-1 py-0.5 min-w-6">
            <span className="text-sm font-bold">{countdown.minutes.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs">Min</span>
        </div>
        <span className="text-white font-bold">:</span>
        <div className="text-center">
          <div className="bg-white text-red-600 rounded px-1 py-0.5 min-w-6">
            <span className="text-sm font-bold">{countdown.seconds.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs">Sec</span>
        </div>
      </div>
    </div>
  );
};