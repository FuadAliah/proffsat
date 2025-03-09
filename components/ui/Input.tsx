interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  width?: "sm" | "md" | "lg";
  error?: string;
}

const Input = ({
  name,
  placeholder,
  width = "md",
  type,
  value,
  onChange,
  required,
  error,
  ...props
}: Props) => {
  const baseClasses =
    "block text-black placeholder-gray-400 text-sm transition-all duration-200 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600";
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-5 py-3.5 text-lg",
  };

  return (
    <div className='flex flex-col gap-2'>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseClasses} ${sizeClasses[width]} ${error ? "border-red-500" : ""}`}
        {...props}
      />
      {error && <span className='text-sm text-red-600'>{error}</span>}
    </div>
  );
};

export default Input;
