"use client";

import { useEffect, useRef, useState } from "react";

type Status = "BOARDING" | "DEPARTED" | "ON TIME" | "GATE CHANGE" | "DELAYED";

type FlightRow = {
  id: string;
  version: string;
  env: string;
  gate: string;
  time: string;
  status: Status;
  flash: boolean;
};

const STATUS_COLOR: Record<Status, string> = {
  BOARDING: "text-boarding",
  DEPARTED: "text-cream-muted",
  "ON TIME": "text-success",
  "GATE CHANGE": "text-amber",
  DELAYED: "text-alert",
};

const STATUS_DOT: Record<Status, string> = {
  BOARDING: "bg-boarding",
  DEPARTED: "bg-cream-muted",
  "ON TIME": "bg-success",
  "GATE CHANGE": "bg-amber",
  DELAYED: "bg-alert",
};

const PULSING: Status[] = ["BOARDING"];

const TRANSITIONS: Partial<Record<Status, Status[]>> = {
  "ON TIME": ["BOARDING", "GATE CHANGE"],
  DELAYED: ["ON TIME", "BOARDING"],
  "GATE CHANGE": ["BOARDING", "DELAYED"],
};

const INITIAL: FlightRow[] = [
  { id: "r1", version: "v2.4.1", env: "PROD",  gate: "SFO-3", time: "14:23", status: "BOARDING",    flash: false },
  { id: "r2", version: "v2.4.0", env: "PROD",  gate: "ORD-1", time: "11:47", status: "DEPARTED",    flash: false },
  { id: "r3", version: "v2.3.9", env: "STG",   gate: "LHR-2", time: "09:15", status: "ON TIME",     flash: false },
  { id: "r4", version: "v2.3.8", env: "PROD",  gate: "SFO-1", time: "07:30", status: "DEPARTED",    flash: false },
  { id: "r5", version: "v2.3.7", env: "CNRY",  gate: "JFK-4", time: "06:12", status: "DELAYED",     flash: false },
  { id: "r6", version: "v2.3.6", env: "PROD",  gate: "CDG-2", time: "03:59", status: "DEPARTED",    flash: false },
];

export function DepartureBoard() {
  const [rows, setRows] = useState<FlightRow[]>(INITIAL);
  const [age, setAge] = useState(0);
  const ageRef = useRef(0);

  useEffect(() => {
    const clock = setInterval(() => {
      ageRef.current += 1;
      setAge(ageRef.current);
    }, 1000);

    const updater = setInterval(() => {
      setRows((prev) => {
        const candidates = prev.filter(
          (r) => r.status !== "DEPARTED" && TRANSITIONS[r.status]
        );
        if (!candidates.length) return prev;
        const target = candidates[Math.floor(Math.random() * candidates.length)];
        const next = TRANSITIONS[target.status]!;
        const nextStatus = next[Math.floor(Math.random() * next.length)];
        return prev.map((r) =>
          r.id === target.id ? { ...r, status: nextStatus, flash: true } : r
        );
      });
      ageRef.current = 0;
      setAge(0);

      // Clear flash after animation
      setTimeout(() => {
        setRows((prev) => prev.map((r) => ({ ...r, flash: false })));
      }, 820);
    }, 3500);

    return () => {
      clearInterval(clock);
      clearInterval(updater);
    };
  }, []);

  const ageLabel = age === 0 ? "now" : `${age}s ago`;

  return (
    <div className="flex flex-col h-full select-none">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-edge">
        <span className="font-display text-[11px] tracking-[0.22em] text-cream-dim uppercase">
          Departures&ensp;—&ensp;Live
        </span>
        <span className="font-mono text-[11px] text-cream-muted tabular-nums">
          {ageLabel}
        </span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] px-6 py-2 border-b border-edge">
        <span className="font-mono text-[10px] tracking-[0.15em] text-cream-muted uppercase">FLIGHT</span>
        <span className="font-mono text-[10px] tracking-[0.15em] text-cream-muted uppercase">TO</span>
        <span className="hidden sm:block font-mono text-[10px] tracking-[0.15em] text-cream-muted uppercase">GATE</span>
        <span className="hidden sm:block font-mono text-[10px] tracking-[0.15em] text-cream-muted uppercase">DEPARTS</span>
        <span className="font-mono text-[10px] tracking-[0.15em] text-cream-muted uppercase col-span-2 sm:col-span-1">STATUS</span>
      </div>

      {/* Rows */}
      <div className="flex flex-col flex-1 divide-y divide-edge-soft">
        {rows.map((row) => (
          <div
            key={row.id}
            className={`grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,2fr)] sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] items-center px-6 py-3.5 transition-colors duration-500 ${row.flash ? "status-flash" : ""}`}
          >
            <span className="font-mono text-sm text-cream">{row.version}</span>
            <span className="font-mono text-sm text-cream-dim">{row.env}</span>
            <span className="hidden sm:block font-mono text-sm text-cream-dim">{row.gate}</span>
            <span className="hidden sm:block font-mono text-sm text-cream-dim tabular-nums">{row.time}</span>
            <span
              className={`flex items-center gap-2 font-display text-[13px] tracking-[0.06em] uppercase transition-colors duration-500 ${STATUS_COLOR[row.status]}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[row.status]} ${PULSING.includes(row.status) ? "animate-[pulse-soft_1.8s_ease-in-out_infinite]" : ""}`}
              />
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
