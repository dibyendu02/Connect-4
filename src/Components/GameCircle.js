import React from 'react'
import '../style.css';


const GameCircle = ({id, children,className, onCircleClick}) => {

  return (
    <div className={`gameCircle ${className}`}  onClick = {() => onCircleClick(id)}>
    
    </div>
  )
}

export default GameCircle;