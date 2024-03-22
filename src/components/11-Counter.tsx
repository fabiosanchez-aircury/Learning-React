import React, { useState } from 'react'
import CounterButton from './12-CounterButton';

interface CounterProps{
    title: string;
}

const Counter = ({title}: CounterProps) => {

  const [currentNumber, setNumber] = useState(0);


  return (
    <div className='d-flex p-2 justify-content-center gap-4 align-items-center'>
        <p>{title}</p>
        <div className='d-flex p-2'>
        <CounterButton className='primary' onClickBtn={() => {setNumber(currentNumber - 1)}}>&#45;</CounterButton>
        <div style={{padding: "8px", border:"1px solid grey"}}>
            <p>{currentNumber}</p>
        </div>
        <CounterButton className='primary' onClickBtn={() => {setNumber(currentNumber + 1)}}>&#43;</CounterButton>
        </div>
    </div>
  )
}

export default Counter