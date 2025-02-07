import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";

export function TimeSelector({
  calendarId,
  availableTimes,
}: {
  calendarId: string;
  availableTimes: Date[];
}) {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  // We can use a useEffect hook to react to changes in the components state
  useEffect(() => {
    if (selectedTime !== null) {
      setSelectedTime(null);
    }
  }, [availableTimes]);

  return (
    <div className="flex flex-col items-center gap-4">
      {availableTimes.map((dt) => (
        <button
          key={dt.toISOString()}
          disabled={selectedTime === dt}
          onClick={() => setSelectedTime(dt)}
          className="w-[20rem] rounded-md border-2 border-accent border-opacity-25 p-4 text-center font-semibold text-accent transition-all duration-200 hover:bg-accent/10 disabled:bg-accent/15"
        >
          {format(dt, "HH:mm aaa")}
        </button>
      ))}

      {selectedTime === null || (
        <Link
          href={`/calendar/${calendarId}/book/${format(selectedTime, "yyyy-MM-dd-HH-mm")}`}
          className="max-w-36 rounded-md bg-accent px-4 py-2 font-semibold text-white transition-all duration-200 hover:brightness-90"
        >
          BOOK
        </Link>
      )}
    </div>
  );
}
