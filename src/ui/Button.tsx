export function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  ...props
}: {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  variant?: "primary" | "destructive" | "submit",
  className?: string,
  onClick?: () => void,
}) {
  const baseStyles =
    "px-4 py-2 font-semibold rounded-lg transition duration-300";
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-violet-800 shadow-lg shadow-indigo-500 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2",
    destructive:
      "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
      submit:
      "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

