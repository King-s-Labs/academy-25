import { DropDown } from "@/components/Dropdown";
import { loremIpsum } from "lorem-ipsum";
import ClientSide from "./client";

export default async function Home() {
  const name = "Username";

  return (
    <div className="grid min-h-screen grid-cols-[1fr_5fr_1fr] items-center justify-items-center gap-16">
      <main className="col-start-2 flex h-full w-full flex-col items-start gap-12 p-8">
        <h1 className="px-8 text-3xl font-semibold text-slate-700">
          Welcome, {name}
        </h1>
        <div className="flex w-full flex-col gap-5 rounded-md bg-slate-50 p-8 text-justify shadow">
          <h2 className="text-xl font-semibold text-slate-700">
            Configure availability
          </h2>
          <p>{loremIpsum({ count: 3 })}</p>
          <ClientSide />
        </div>
      </main>
    </div>
  );
}