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
        primary: "bg-[#000128] text-white hover:bg-[#02143C] shadow-sm shadow-gray-200 focus:none transition-all ease-in-out duration-350",
        secondary: "bg-accent-2 text-white hover:bg-[#02143C] shadow-sm focus:none transition-all ease-in-out duration-350",
        outline: "border-1 border-gray-200 text-white hover:bg-[#02143C] focus:none transition-all ease-in-out duration-500",
        ghost: "text-gray-200 transition-colors border-1 border-solid border-[#8AB9FF] hover:border-white transition-all ease-in-out duration-350 "

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

