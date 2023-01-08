import React from 'react'

const onClick = (id) => {
    alert("clicked " + id);
}
const GameCircle = ({id, color, children}) => {
  return (
    <div style={{backgroundColor: color}} onClick = {() => onClick(id)}>
    {children}
    </div>
  )
}

export default GameCircle;