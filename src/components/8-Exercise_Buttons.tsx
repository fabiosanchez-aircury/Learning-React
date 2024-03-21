import React from 'react'

interface ButtonProps{
    children: string,
    className?: "primary" | "secondary" | "success" | "danger", //Restrict the options
    onClickBtn: () => void
}

const Button = ({children, className = "secondary", onClickBtn}: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${className}`} onClick={() => onClickBtn()}>{children}</button>
  )
}

export default Button