import React from 'react'


export const Footer = ({onClickEvent}) => {
  return (
    <div className='panel footer'>
        <div className='footer-text'><button className='footer-button' onClick = {onClickEvent}>New Game</button></div>
    </div>
  )
}
