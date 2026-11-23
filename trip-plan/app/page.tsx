
"use client";

import { useState } from "react";

export default function Home() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [tank, setTank] = useState("150");
  const [spare, setSpare] = useState("30");
  const [consumption, setConsumption] = useState("16");

  const totalFuel = Number(tank) + Number(spare);
  const fuelRange =
    Number(consumption) > 0
      ? (totalFuel / Number(consumption)) * 100
      : 0;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-green-900 px-6 py-8 text-white">
        <h1 className="text-4xl font-bold">Trip Plan</h1>
        <p className="mt-2">
          Australian 4WD & Camping Route Planner
        </p>
      </header>

      <div className="mx-auto max-w-5xl p-6">
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            Plan Your Adventure
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <label>
              Starting Location
              <input
                className="mt-2 w-full rounded border p-3"
                placeholder="e.g. Proserpine, QLD"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
            </label>

            <label>
              Destination
              <input
                className="mt-2 w-full rounded border p-3"
                placeholder="e.g. Weipa, QLD"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </label>
          </div>

          <button
            className="mt-5 rounded-lg bg-green-800 px-6 py-3 font-semibold text-white"
            onClick={() =>
              alert(
                start && destination
                  ? `Planning ${start} to ${destination}. Route mapping is coming next!`
                  : "Enter your starting location and destination."
              )
            }
          >
            Plan My Trip
          </button>
        </section>

        <section className="mt-6 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            Fuel Range Calculator
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Fuel Tank (L)", tank, setTank],
              ["Spare Fuel (L)", spare, setSpare],
              ["Consumption (L/100km)", consumption, setConsumption],
            ].map(([label, value, setter]) => (
              <label key={label as string}>
                {label as string}
                <input
                  type="number"
                  min="0"
                  className="mt-2 w-full rounded border p-3"
                  value={value as string}
                  onChange={(e) =>
                    (setter as (value: string) => void)(e.target.value)
                  }
                />
              </label>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-green-100 p-5">
            <p className="text-sm font-medium">Theoretical Fuel Range</p>
            <p className="text-4xl font-bold text-green-900">
              {Number.isFinite(fuelRange)
                ? Math.round(fuelRange).toLocaleString()
                : 0}{" "}
              km
            </p>
            <p className="mt-2 text-sm text-slate-600">
              This is an estimate. Off-road driving, road conditions,
              vehicle load and fuel reserves can reduce actual range.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">Trip Map</h2>
          <div className="mt-4 flex h-72 items-center justify-center rounded-lg bg-slate-200 text-center text-slate-600">
            Interactive map, fuel stops and campsites
            <br />
            coming in the next stage.
          </div>
        </section>
      </div>
    </main>
  );
}

