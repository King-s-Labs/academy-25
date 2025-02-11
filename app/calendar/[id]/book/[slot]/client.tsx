"use client";

import { Input } from "@/components/Input";
import { useState } from "react";

export function ClientSide() {
  const [formData, setFormData] = useState({ email: "", description: "" });

  return (
    <form className="flex flex-col gap-3 py-4">
      <Input
        label="Email"
        placeholder="your.email@gmail.com"
        value={formData.email}
        onChange={(email) => setFormData((old) => ({ ...old, email }))}
      />
      <Input
        label="Description"
        block
        placeholder="I would like to talk about . . ."
        className="min-h-[12rem]"
        value={formData.description}
        onChange={(description) =>
          setFormData((old) => ({ ...old, description }))
        }
      />
      <input type="submit" className="rounded-md bg-accent p-2 text-white" />
    </form>
  );
}
