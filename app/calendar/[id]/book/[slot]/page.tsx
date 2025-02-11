import { Input } from "@/components/Input";
import { loadCalendarInfo } from "@/lib/api";
import { format, formatDuration, parse } from "date-fns";
import Image from "next/image";
import { ClientSide } from "./client";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; slot: string }>;
}) {
  const { id, slot } = await params;

  const dt = parse(slot, "yyyy-MM-dd-HH-mm", new Date());

  const { name, description, duration } = await loadCalendarInfo();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[40rem] flex-col gap-2 rounded-md border-2 border-slate-200 bg-slate-50 shadow-md max-md:p-8 md:p-16">
        <Link
          href={`/calendar/${id}`}
          className="w-full text-right text-accent"
        >
          Back
        </Link>
        <h2 className="text-lg font-semibold text-slate-500">{name}</h2>
        <h2 className="text-2xl font-semibold text-slate-800">
          Reserve for {format(dt, "HH:mm")}
        </h2>
        <div className="flex items-center gap-2">
          <Image src="/clock.svg" width={24} height={24} alt="clock" />
          <p className="text-lg font-medium text-slate-500">
            {format(dt, "MMMM dd, yyyy")} for{" "}
            {formatDuration({ minutes: duration })}
          </p>
        </div>
        <ClientSide />
      </div>
    </div>
  );
}
