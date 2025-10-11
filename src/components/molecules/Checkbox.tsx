'use client';

import { useState } from "react";
import clsx from 'clsx';

interface CustomCheckboxProps {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function CustomCheckbox({
  id,
  label,
  checked: controlledChecked,
  onChange,
  className = "",
}: CustomCheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const toggle = () => {
    const newValue = !isChecked;
    if (!isControlled) setInternalChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={clsx('inline-flex items-center gap-2', className)}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={toggle}
        className="sr-only"
      />

      <button
        type="button"
        onClick={toggle}
        className={
        clsx(
          'flex items-center justify-center w-4 h-4 rounded border border-cyan-500 transition-all cursor-pointer',
          isChecked
            ? "bg-cyan-500 text-black"
            : "bg-neutral-900 hover:text-black"
        )}
      >
        <svg
          className={`w-3 h-3 transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </button>

      {label && (
        <label
          htmlFor={id}
          className="cursor-pointer select-none text-sm text-white hover:text-cyan-400"
        >
          {label}
        </label>
      )}
    </div>
  );
}

//
// import { useState } from "react";
//
// interface CustomCheckboxProps {
//   label?: string;
//   checked?: boolean;
//   onChange?: (checked: boolean) => void;
//   className?: string;
// }
//
// export function CustomCheckbox({
//   label = "asdasdasd",
//   checked: controlledChecked,
//   onChange,
//   className = "",
// }: CustomCheckboxProps) {
//   const [internalChecked, setInternalChecked] = useState(false);
//   const isControlled = controlledChecked !== undefined;
//   const isChecked = isControlled ? controlledChecked : internalChecked;
//
//   const toggle = () => {
//     const newValue = !isChecked;
//     if (!isControlled) setInternalChecked(newValue);
//     onChange?.(newValue);
//   };
//
//   return (
// <>
//     <button
//       type="button"
//       role="checkbox"
//       aria-checked={isChecked}
//       onClick={toggle}
//       className={`inline-flex items-center rounded-md border border-cyan-500 transition-all select-none cursor-pointer
//         ${isChecked
//         ? "bg-cyan-500 text-black font-semibold"
//         : "bg-neutral-900 text-white hover:text-black"
//       } ${className}`}
//     >
//       {/* Icono check (solo visible cuando está activo) */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className={`w-4 h-4 transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}`}
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth="3"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//       </svg>
//
//     </button>
//       {label && <span className="text-sm">{label}</span>}
// </>
//   );
// }
