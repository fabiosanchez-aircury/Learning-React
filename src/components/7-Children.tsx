import React, { ReactNode } from 'react'

// shortcut for create a react component faster (rafce)

//With children we can pass content like HTML inside the Component when we call it
interface Props{
    children: ReactNode;
  }

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert