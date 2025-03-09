type Props = {
  name: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required: boolean;
  width?: string;
  error: string;
};

const Textarea = ({
  name,
  placeholder,
  value,
  onChange,
  required,
  error,
  width = "w-full",
  className,
  ...props
}: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={4}
        {...props}
        className={`block p-3 text-black placeholder-gray-400 text-sm transition-all duration-200 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${width} ${className}`}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Textarea;
