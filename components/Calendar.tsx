"use state";

import Image from "next/image";
import { useMemo, useState } from "react";

// Always look for utility packages that can make your life simpler. Lodash and date-fns give
// you alot of useful methods to compensate for javascripts weaknesses when it comes to date
// and array manipulation
import _ from "lodash";
import {
  startOfMonth,
  getDaysInMonth,
  format,
  addDays,
  subDays,
  addMonths,
  subMonths,
  isSameDay,
} from "date-fns";

/**
 * React Components
 * ================
 * We can use components to capture the logic and html needed to render simple widgets and
 * UI objects for our application. We usually define components in the form:
 *
 * ```tsx
 *
 * interface XComponentProps {
 *  a: T1
 *  b?: T2
 * }
 *
 * export function XComponent({ a, b }: XComponentProps) {
 *   // ...
 *   return (
 *     <div> ... </div>
 *   )
 * }
 *
 * ```
 *
 * And then we can use the component elsewhere like so:
 *
 * ```
 *  <div>
 *    <p>Something blah blah blah...</p>
 *    <XComponent a={value1}/>
 *    <XComponent a={value1} b={value2}/>
 *  </div>
 * ```
 */

interface CalendarProps {
  selectedDate: Date | null;

  // This is how we can pass functions into our components (arg0: T0, ..., argN: TN) => TReturn
  setSelectedDate: (v: Date | null) => void;
}

export function Calendar({
  selectedDate: value,
  setSelectedDate: setValue,
}: CalendarProps) {
  /**
   * You declare a state with the useState hook, which is a variable that affects the HTML that gets rendered by the
   * react component. We always decalre states in the following way
   *
   * ```ts
   * const [x, setX] = useState<T>(initialValueForX)
   * ```
   */
  const [viewMonth, setViewMonth] = useState<Date>(() =>
    startOfMonth(new Date()),
  );

  // We can define some internal logic for the component in the body of the function

  function lastMonth() {
    setViewMonth((v) => subMonths(v, 1));
  }

  function nextMonth() {
    setViewMonth((v) => addMonths(v, 1));
  }

  return (
    // Tailwind allows us to specify all the styling using premade classes
    // you can find all the utility classes at https://tailwindcss.com/docs
    // and use Ctrl-/ to search for any Tailwind equivalent
    <div className="grid select-none grid-cols-7 grid-rows-8 items-center justify-center gap-1 rounded-md border border-slate-200 bg-gradient-to-t from-slate-100 to-slate-50 p-1 text-sm">
      <p className="text-md col-span-5 px-2 font-semibold text-accent">
        {format(viewMonth, "LLLL yyyy")}
      </p>

      <button
        onClick={lastMonth}
        className="group m-1 flex aspect-square items-center justify-center rounded-md p-1 transition-all duration-200 hover:scale-105 hover:bg-accent active:scale-95"
      >
        <Image
          src="/left.svg"
          width="20"
          height="20"
          alt="left-arrow"
          className="scale-75 group-hover:brightness-0"
        />
      </button>

      <button
        onClick={nextMonth}
        className="group m-1 flex aspect-square items-center justify-center rounded-md p-1 transition-all duration-200 hover:scale-105 hover:bg-accent active:scale-95"
      >
        <Image
          src="/right.svg"
          width="20"
          height="20"
          alt="left-arrow"
          className="scale-75 group-hover:brightness-0"
        />
      </button>

      {/* React fragments allow you to group components together without a div appearing in the final HTML. Really useful within CSS grid-boxes */}
      <>
        <div className="p-1 text-center font-semibold text-slate-500">Sun</div>
        <div className="p-1 text-center font-semibold text-slate-500">Mon</div>
        <div className="p-1 text-center font-semibold text-slate-500">Tue</div>
        <div className="p-1 text-center font-semibold text-slate-500">Wed</div>
        <div className="p-1 text-center font-semibold text-slate-500">Thu</div>
        <div className="p-1 text-center font-semibold text-slate-500">Fri</div>
        <div className="p-1 text-center font-semibold text-slate-500">Sat</div>
      </>

      {/* Maps allow you to emit HTML/JSX in a for loop like fashion. We will be using the lodash package which provides us useful iterators */}
      {_.rangeRight(viewMonth.getDay()).map((i) => {
        let date = subDays(viewMonth, i + 1);
        return (
          <button
            disabled
            key={date.toISOString()}
            className="aspect-square rounded-full p-1 text-center text-slate-400"
          >
            {date.getDate()}
          </button>
        );
      })}

      {_.range(getDaysInMonth(viewMonth)).map((i) => {
        let date = addDays(viewMonth, i);
        return (
          <button
            key={date.toISOString()}
            disabled={!!value && isSameDay(date, value)}
            onClick={() => setValue(date)}
            className="aspect-square rounded-full p-1.5 text-center font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-800 hover:bg-opacity-20 active:scale-90 disabled:bg-accent disabled:text-white"
          >
            {date.getDate()}
          </button>
        );
      })}
    </div>
  );
}
