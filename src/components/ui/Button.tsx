import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonType = "reset" | "submit" | "button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  sx?: string;
  type?: ButtonType;
}

export default function Button({
  sx,
  type,
  children,
  ...attributes
}: ButtonProps) {
  return (
    <button
      className={`button ${sx ? sx : ""}`}
      {...attributes}
      type={type || "button"}
    >
      {children}
    </button>
  );
}
