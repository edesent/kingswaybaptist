import { TZ, events, type SpecialEvent } from "@/lib/site";

/** Today's date in Mickleton as YYYY-MM-DD. */
export function todayISO(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** Events that have not ended yet, soonest first. */
export function upcomingEvents(): SpecialEvent[] {
  const today = todayISO();
  return events.filter((e) => e.endsOn >= today).sort((a, b) => a.startsAt.localeCompare(b.startsAt));
}

/** "Nov" and "14" for the date block on an event card. */
export function dateParts(startsAt: string) {
  const d = new Date(startsAt);
  return {
    month: d.toLocaleString("en-US", { month: "short", timeZone: TZ }),
    day: d.toLocaleString("en-US", { day: "numeric", timeZone: TZ }),
    weekday: d.toLocaleString("en-US", { weekday: "long", timeZone: TZ }),
  };
}

/** "October 25, 2026" from a YYYY-MM-DD string, without timezone drift. */
export function longDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
