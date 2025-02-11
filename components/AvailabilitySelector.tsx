import { Fragment, useState } from "react";
import { DropDown } from "./Dropdown";
import { format } from "date-fns";
import _ from "lodash";

export const daysOfWeeks = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export interface AvailabilityInfo {
  day: string;
  active: boolean;
  startTime: string;
  endTime: string;
}

const options = _.range(24 * 4).map((v) =>
  format(new Date(0, 0, 0, 0, v * 15, 0), "HH:mm"),
);

export function AvailabilitySelector({ availability, setAvailability }: { availability: AvailabilityInfo[], setAvailability: (v: AvailabilityInfo[]) => void }) {
  function setAvailabilityStartTimeOnDay(day: string, startTime: string) {
    setAvailability(
      availability.map((v) => (v.day === day ? { ...v, startTime } : v)),
    );
  }

  function setAvailabilityEndTimeOnDay(day: string, endTime: string) {
    setAvailability(
      availability.map((v) => (v.day === day ? { ...v, endTime } : v)),
    );
  }

  function setActiveDay(day: string, active: boolean) {
    setAvailability(
      availability.map((v) => (v.day === day ? { ...v, active } : v)),
    );
  }

  return (
    <div className="grid grid-cols-[4rem_2fr_1fr_1fr_1fr_1fr] items-center justify-center gap-3">
      {daysOfWeeks.map((day) => {
        const av = availability.find((a) => a.day === day);
        return (
          <Fragment key={day}>
            <button onClick={() => setActiveDay(day, !!!av?.active)} className={"p-2 w-5 h-5 aspect-square rounded transition-colors duration-200 " + (av?.active ? "bg-accent" : "bg-stone-300")} />
            <p className="font-medium capitalize text-accent">{day}</p>
            <p className="text-right capitalize">from</p>
            <DropDown
              selected={av?.startTime ?? "09:00"}
              onChange={(v) => setAvailabilityStartTimeOnDay(day, v)}
              options={options}
              disabled={!av?.active}
            />
            <p className="text-right capitalize">to</p>
            <DropDown
              selected={av?.endTime ?? "09:00"}
              onChange={(v) => setAvailabilityEndTimeOnDay(day, v)}
              options={options}
              disabled={!av?.active}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
