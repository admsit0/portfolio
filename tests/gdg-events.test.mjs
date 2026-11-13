import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  EVENT_GRACE_MS,
  eventStatus,
  eventsByStatus,
} from "../src/lib/eventStatus.ts";

const at = (iso) => new Date(iso);

test("an event is upcoming before it starts and past once the grace period ends", () => {
  const start = "2026-11-27T15:30:00+01:00";
  assert.equal(eventStatus(start, at("2026-11-27T15:29:00+01:00")), "upcoming");
  // Still on while it is happening.
  assert.equal(eventStatus(start, at("2026-11-27T16:30:00+01:00")), "upcoming");
  const end = new Date(Date.parse(start) + EVENT_GRACE_MS);
  assert.equal(eventStatus(start, end), "past");
  assert.equal(eventStatus(start, at("2026-12-01T09:00:00+01:00")), "past");
});

test("time zone offsets are respected", () => {
  // 13:00 in Madrid (UTC+1) is 12:00 UTC.
  const event = "2026-12-02T13:00:00+01:00";
  assert.equal(eventStatus(event, at("2026-12-02T11:59:00Z"), 0), "upcoming");
  assert.equal(eventStatus(event, at("2026-12-02T12:00:00Z"), 0), "past");
});

test("invalid dates fail loudly instead of being silently misfiled", () => {
  assert.throws(() => eventStatus("27/11/2026"));
});

test("events are split by status and ordered sensibly", () => {
  const events = [
    { date: "2026-10-15T13:00:00+02:00", id: "oct" },
    { date: "2027-02-05T13:00:00+01:00", id: "feb" },
    { date: "2026-11-27T15:30:00+01:00", id: "devfest" },
    { date: "2025-09-17T15:00:00+02:00", id: "welcome" },
  ];
  const now = at("2026-11-13T12:00:00+01:00");
  assert.deepEqual(
    eventsByStatus(events, "upcoming", now).map((e) => e.id),
    ["devfest", "feb"],
  );
  assert.deepEqual(
    eventsByStatus(events, "past", now).map((e) => e.id),
    ["oct", "welcome"],
  );
});

test("the GDG calendar has no hand-written status and every date parses", () => {
  const source = fs.readFileSync(
    new URL("../src/content/gdg.ts", import.meta.url),
    "utf8",
  );
  assert.ok(!/status:/.test(source));
  const dates = [...source.matchAll(/date: "([^"]+)"/g)].map((m) => m[1]);
  assert.ok(dates.length > 10);
  for (const date of dates) {
    assert.match(date, /T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/, date);
    assert.ok(!Number.isNaN(Date.parse(date)), date);
  }
});
