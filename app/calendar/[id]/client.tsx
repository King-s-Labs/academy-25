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
    <div className="flex h-full items-center justify-center max-md:flex-col max-md:gap-10 max-md:p-10 md:gap-12 md:p-20">
      <Calendar selectedDate={date} setSelectedDate={setDate} />
      <TimeSelector calendarId={calendarId} availableTimes={availableTimes} />
    </div>
  );
}
