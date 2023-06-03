import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputCounterProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

export default function InputCounter({
  className,
  ...attributes
}: InputCounterProps) {
  return (
    <input
      type="number"
      className={`input ${className ? className : ""}`}
      min={0}
      max={100}
      {...attributes}
    />
  );
}
