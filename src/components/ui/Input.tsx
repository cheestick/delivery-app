import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sx?: string;
}

export default function Input({ sx, ...attributes }: InputProps) {
  return <input className={`input ${sx ? sx : ""}`} {...attributes} />;
}
