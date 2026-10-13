"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

interface Option<T extends string> {
  value: T;
  label: string;
}

interface FilterSelectProps<T extends string> {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
  ariaLabel: string;
}

export default function FilterSelect<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
}: FilterSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedIdx = Math.max(0, options.findIndex((o) => o.value === value));
  const selected = options[selectedIdx];

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const openMenu = () => {
    setActiveIdx(selectedIdx);
    setOpen(true);
  };

  const choose = (v: T) => {
    onChange(v);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) return openMenu();
      setActiveIdx((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return openMenu();
      setActiveIdx((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) return openMenu();
      choose(options[activeIdx].value);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        role="combobox"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        className={`flex items-center justify-between gap-2 min-w-36 px-3 py-2 text-sm bg-white text-gray-700 border rounded-xl outline-none transition-colors ${
          open
            ? "border-[#e11d48] ring-2 ring-[#e11d48]/20"
            : "border-gray-300 hover:bg-gray-50 focus-visible:border-[#e11d48] focus-visible:ring-2 focus-visible:ring-[#e11d48]/20"
        }`}
      >
        <span>{selected.label}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ariaLabel}
          className="absolute right-0 z-30 mt-1.5 w-full min-w-36 p-1 bg-white border border-gray-200 rounded-xl shadow-lg"
        >
          {options.map((o, i) => {
            const isSelected = o.value === value;
            return (
              <li
                key={o.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(o.value)}
                className={`flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer ${
                  i === activeIdx ? "bg-gray-100" : ""
                } ${isSelected ? "font-semibold text-[#e11d48]" : "text-gray-700"}`}
              >
                {o.label}
                {isSelected && <Check size={14} />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
