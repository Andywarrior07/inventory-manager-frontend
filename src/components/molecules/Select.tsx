'use client';

import { useState, useEffect, useRef } from "react";

type Option = { value: string; label: string };

interface CustomSelectProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Select({
  options,
  defaultValue,
  onChange,
  className = "",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
    onChange?.(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative inline-block text-sm ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-48 bg-neutral-900 border border-white/30 text-white rounded-md px-3 py-2 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
      >
        <span>
          {options.find((opt) => opt.value === selected)?.label || "Seleccionar"}
        </span>

        <svg
          className={`w-4 h-4 ml-2 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-neutral-900 border border-neutral-700 rounded-md shadow-lg overflow-hidden">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left px-3 py-2 hover:bg-fuchsia-400 hover:text-black transition-colors ${
                  selected === opt.value ? "bg-cyan-500 text-black font-semibold" : ""
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
