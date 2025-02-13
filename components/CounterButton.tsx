"use client"
import { useEffect, useState } from "react"

interface CounterButtonProps {
  children: React.ReactNode; // Lets replace label with children
  defaultValue?: number;
  direction?: "increment" | "decrement";
  className?: string;
  targetCount?: number
  onTargetReach?: () => void
}

export default function CounterButton({
  children,
  defaultValue,
  direction = "increment",
  className, targetCount, onTargetReach
}: CounterButtonProps) {

  const [count, setCount] = useState(defaultValue ?? 0)

  function click() {
    if (direction === "increment") {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    if (count === targetCount && onTargetReach !== undefined) {
      onTargetReach()
    }
  }, [count])

  return (
    <button
      onClick={click}
      disabled={count === targetCount}
      className={"text-white font-semibold text-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-800 enabled:hover:scale-105 enabled:active:scale-95 disabled:bg-slate-600 p-4 rounded-md transition-all duration-200 shadow-lg flex gap-3 items-center ... " + (className ?? "")}
    >
      {children}
      <p>{count}</p>
    </button>
  )
}