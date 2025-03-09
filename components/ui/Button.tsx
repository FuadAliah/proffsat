interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

const Button = ({ text, type, className, ...props }: Props) => {
  const baseClasses =
    "px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 cursor-pointer";
  return (
    <button type={type} className={`${baseClasses} ${className}`} {...props}>
      {text || props.children}
    </button>
  );
};

export default Button;
