import { LookupType } from "@/@interfaces/category";
import React from "react";
interface Props extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  name: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required: boolean;
  error: string;
  width?: "sm" | "md" | "lg";
  options: LookupType[];
}

const Select = ({
  name,
  width = "md",
  value,
  onChange,
  required,
  error,
  options,
  ...props
}: Props) => {
  const baseClasses =
    "block text-black placeholder-gray-400 text-sm transition-all duration-200 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600";
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-3 py-3 text-base",
    lg: "px-3 py-3.5 text-lg",
  };

  return (
    <div className='flex flex-col gap-2'>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseClasses} ${sizeClasses[width]} ${error ? "border-red-500" : ""}`}
        {...props}
      >
        <option className='text-sm' value=''>
          Select
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <span className='text-sm text-red-600'>{error}</span>}
    </div>
  );
};

export default Select;
