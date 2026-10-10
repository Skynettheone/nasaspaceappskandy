"use client";

import { useSyncExternalStore } from "react";
import { getMissionClock } from "@/lib/mission-clock";

function subscribe(onChange: () => void) {
  const interval = window.setInterval(onChange, 1000);
  return () => window.clearInterval(interval);
}
const snapshot = () => Math.floor(Date.now() / 1000) * 1000;
const serverSnapshot = () => 0;

export function MissionCountdown() {
  const now = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const clock = getMissionClock(now);
  const units = [
    ["d", clock.days],
    ["h", clock.hours],
    ["m", clock.minutes],
    ["s", clock.seconds],
  ] as const;
  return (
    <div className="mission-countdown">
      <div
        className="mission-clock"
        role="timer"
        aria-live="off"
        aria-label={
          !now
            ? "Countdown loading"
            : clock.status === "countdown"
              ? `${clock.days} days, ${clock.hours} hours, ${clock.minutes} minutes and ${clock.seconds} seconds until November 14 in Sri Lanka`
              : clock.status === "live"
                ? "Hackathon in progress"
                : "2026 hackathon complete"
        }
      >
        {clock.status === "countdown" || !now ? (
          <>
            <span className="mission-prefix" aria-hidden="true">
              T−
            </span>
            {units.map(([label, value]) => (
              <span className="mission-unit" key={label} aria-hidden="true">
                <strong>
                  {now
                    ? String(value).padStart(label === "d" ? 3 : 2, "0")
                    : label === "d"
                      ? "–––"
                      : "––"}
                </strong>
                <small>{label}</small>
              </span>
            ))}
          </>
        ) : (
          <span className="mission-state">
            {clock.status === "live"
              ? "MISSION IN PROGRESS"
              : "MISSION COMPLETE"}
          </span>
        )}
      </div>

    </div>
  );
}
