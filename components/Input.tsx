interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
  block?: boolean;
}

export function Input({
  label,
  className,
  value,
  placeholder,
  onChange,
  block = false,
}: InputProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-slate-700">{label}</p>
      {block ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-md border border-slate-300 p-2 placeholder-slate-400 outline-none ${className ?? ""}`}
        ></textarea>
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-md border border-slate-300 p-2 placeholder-slate-400 outline-none ${className ?? ""}`}
        ></input>
      )}
    </div>
  );
}
