"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DropDownProps {
  options: string[];
  selected: string | null;
  disabled?: boolean;
  onChange: (v: string) => void;
}

export function DropDown({
  selected,
  onChange,
  options,
  disabled = false,
}: DropDownProps) {
  const [open, setOpen] = useState(false);
  const dropdownBody = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setOpen(false)
    }
  }, [disabled])

  function handleClick(e: MouseEvent) {
    if (!dropdownBody.current) return;

    const { left, right, bottom, top } = dropdownBody.current.getBoundingClientRect()

    if (e.clientX < left || e.clientX > right || e.clientY < top || e.clientY > bottom) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (dropdownBody) {
      window.addEventListener("click", handleClick)
    }

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [dropdownBody])

  return (
    <div ref={dropdownBody} className="relative select-none" >
      <button
        className="flex w-40 items-center justify-between disabled:opacity-50 gap-4 rounded-md border border-slate-200 bg-white p-4 text-left"
        onClick={() => setOpen((v) => !v)}
        disabled={disabled}
      >
        <p>{selected ?? "Select"}</p>
        <Image
          src="left.svg"
          width={16}
          height={16}
          className={
            "transition-all duration-200" +
            (open ? " rotate-90" : " -rotate-90")
          }
          alt="dropdown"
        />
      </button>
      <div
        className={
          "absolute top-16 z-10 flex max-h-[10rem] w-56 origin-top-left flex-col overflow-hidden overflow-y-scroll rounded-md border border-slate-200 bg-white py-2 shadow transition-all duration-200" +
          (open ? "" : " scale-0 opacity-0")
        }
      >
        {options.map((label) => (
          <button
            disabled={selected === label}
            key={label}
            onClick={() => {
              onChange(label);
              setOpen(false);
            }}
            className="px-4 py-2 text-left hover:bg-sky-100 hover:text-accent disabled:bg-sky-100 disabled:text-accent"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
