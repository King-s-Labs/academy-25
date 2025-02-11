"use server";

import Image from "next/image";
import { formatDuration } from "date-fns";
import { ClientSide } from "./client";
import { loadCalendarInfo } from "@/lib/api";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { name, description, duration } = await loadCalendarInfo();

  return (
    <div className="grid h-screen grid-cols-[1fr_2fr] max-md:grid-cols-1">
      <div className="relative flex flex-col gap-3 border-slate-200 bg-slate-50 px-8 py-10 max-md:border-b-2 md:border-r-2">
        <h2 className="text-xl font-semibold text-slate-500">{name}</h2>
        <h1 className="text-3xl font-bold text-slate-800">Book Session</h1>
        <div className="flex items-center gap-3">
          <Image src="/clock.svg" width={24} height={24} alt="clock" />
          <p className="text-accent">
            {formatDuration({
              hours: Math.floor(duration / 60),
              minutes: duration % 60,
            })}
          </p>
        </div>
        <p className="text-md mb-8 text-justify font-light text-slate-700">
          {description}
        </p>

        <p className="absolute bottom-4 right-4 text-sm text-slate-500">
          Powered by{" "}
          <a className="underline" href="https://kings-labs.com/">
            King's Lab
          </a>
        </p>
      </div>

      <ClientSide calendarId={id} />
    </div>
  );
}
