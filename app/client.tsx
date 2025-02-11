"use client";

import { AvailabilityInfo, AvailabilitySelector, daysOfWeeks } from "@/components/AvailabilitySelector";
import { DropDown } from "@/components/Dropdown";
import { useOption } from "@/hooks/useOptions";
import { useState } from "react";

export default function ClientSide() {
  const { selectedValue, setValue, options } = useOption({
    options: ["15 min", "30 min", "45 min", "60 min"],
    defaultValue: "15 min",
  });

  const [availability, setAvailability] = useState<AvailabilityInfo[]>(
    daysOfWeeks.map((day) => ({
      day,
      active: true,
      startTime: "10:00",
      endTime: "16:00",
    })),
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-700">Slot Duration</h3>
        <DropDown
          selected={selectedValue}
          onChange={setValue}
          options={options}
        />
      </div>
      <h3 className="text-lg font-semibold text-slate-700">Availability</h3>
      <div className="max-md:w-full md:w-2/3">
        <AvailabilitySelector availability={availability} setAvailability={setAvailability} />
      </div>
    </div>
  );
}
