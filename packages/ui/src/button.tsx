"use client";

export interface ButtonProps {
  label?: string;
  className?: string;
}

export const Button = ({ label, className }: ButtonProps) => {
  return (
    <button className={className} onClick={() => alert(`Hello from your ${label} app!`)}>
      {label}
    </button>
  );
};
