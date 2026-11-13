export type EventStatus = "upcoming" | "past";

// An event stays "upcoming" while it is happening: it only counts as past
// once this long has gone by since its start time.
export const EVENT_GRACE_MS = 2 * 60 * 60 * 1000;

export function eventStatus(
  date: string,
  now: Date = new Date(),
  graceMs: number = EVENT_GRACE_MS,
): EventStatus {
  const start = Date.parse(date);
  if (Number.isNaN(start)) throw new Error(`Invalid event date: ${date}`);
  return start + graceMs > now.getTime() ? "upcoming" : "past";
}

// Upcoming: soonest first. Past: most recent first.
export function eventsByStatus<T extends { date: string }>(
  events: readonly T[],
  status: EventStatus,
  now: Date = new Date(),
): T[] {
  const direction = status === "upcoming" ? 1 : -1;
  return events
    .filter((event) => eventStatus(event.date, now) === status)
    .sort((a, b) => direction * (Date.parse(a.date) - Date.parse(b.date)));
}
