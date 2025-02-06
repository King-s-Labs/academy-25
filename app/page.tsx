"use client";

import { Calendar } from "@/components/Calendar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <p>{date?.toISOString()}</p>
        <Calendar selectedDate={date} setSelectedDate={setDate} />
      </main>
    </div>
  );
}
