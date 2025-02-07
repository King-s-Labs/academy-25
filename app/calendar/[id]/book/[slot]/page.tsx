import { parse } from "date-fns";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; slot: string }>;
}) {
  const { id, slot } = await params;

  return (
    <div>
      <p>
        {id} {parse(slot, "yyyy-MM-dd-HH-mm", new Date()).toUTCString()}
      </p>
    </div>
  );
}
