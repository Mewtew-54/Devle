import React from 'react';

const Win = props => {

  const fireworks = [];

  for (let i = 0; i < 25; i++) {
    let top = Math.random() * 100;
    let left = Math.random() * 100;
    fireworks.push(<div className='firework' style={{top:`${top}%`, left:`${left}%`}}></div>)
  }

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h2>You are correct! Great job!</h2>
      </div>
        {fireworks}
    </div>
  )
}

export default Win;