import React from "react";

type ButtonProps = {
    variant?: "primary" | "secondary" |  "outline" | "ghost" ;
    size?:"sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};


const Button = ({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) => {
    const baseClasses= "font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2";
    const variants = {
        primary: "bg-gray-600 text-white hover:bg-gray-700 shadow-md shadow-gray-100 focus:ring-gray-500",
        secondary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-100 focus:ring-emerald-500",
        outline: "border-2 border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500",
        ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500"

    }
    const sizes = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-8 text-lg"
      };
    

return (
    <button
    className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  >
    {children}
  </button>
);
};

export default Button;

