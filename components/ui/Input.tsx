import React from "react";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  width?: "sm" | "md" | "lg";
  error?: string;
  refEl?: React.RefObject<HTMLInputElement | null>;
}

const Input = ({
  name,
  placeholder,
  width = "md",
  type,
  value,
  onChange,
  required = false,
  error,
  className,
  refEl,
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
    <div className='flex w-full flex-col gap-2'>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        ref={refEl}
        className={`${baseClasses} ${sizeClasses[width]} ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...props}
      />
      {error && <span className='text-sm text-red-600'>{error}</span>}
    </div>
  );
};

export default Input;
