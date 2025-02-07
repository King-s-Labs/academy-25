"use client";

import { Calendar } from "@/components/Calendar";
import { TimeSelector } from "@/components/TimeSelector";
import { addHours, format } from "date-fns";
import _ from "lodash";
import { useMemo, useState } from "react";

export function ClientSide({ calendarId }: { calendarId: string }) {
  const [date, setDate] = useState<Date | null>(null);

  // We can use memo to derive a value from state
  const availableTimes = useMemo(
    () => (date ? _.range(5).map((i) => addHours(date, 12 + i)) : []),
    [date],
  );

  return (
    <div className="flex h-full items-center justify-center gap-20 p-20 max-md:flex-col">
      <Calendar selectedDate={date} setSelectedDate={setDate} />
      <TimeSelector calendarId={calendarId} availableTimes={availableTimes} />
    </div>
  );
}
