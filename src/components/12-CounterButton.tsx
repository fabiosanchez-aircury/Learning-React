import React from "react";

interface CounterButtonProps {
  children: string;
  className?: "primary" | "secondary" | "success" | "danger"; //Restrict the options
  onClickBtn: () => void;
}

const CounterButton = ({children, className, onClickBtn}: CounterButtonProps) => {
  return (
    <button type="button" className={`btn btn-${className}`} onClick={onClickBtn}>
      {children}
    </button>
  );
};

export default CounterButton;
