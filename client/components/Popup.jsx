import React, { useState, useEffect, useInsertionEffect } from 'react';
import axios from 'axios';

const Popup = (props) => {

  const [answer, setAnswer] = useState('');
  const [attempt, setAttempt] = useState(null);

  useEffect(() => {
    axios.get('/api/answer')
		.then((res) => {
      console.log(res.data);
			setAnswer(res.data);
      // console.log('answer is: ', answer);
      // console.log('typeof answer is: ', typeof answer);
		})

  }, []);
  
  document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement("div");
      drop.classList.add("drop");
      drop.style.left = Math.random() * 100 + "%";
      drop.style.animationDelay = Math.random() + "s";
      document.getElementById("rain").appendChild(drop);
    }
  })

  // useEffect(() => {
  //   axios.get('/api/attempts')
  //     .then((res) => {
  //       console.log(res.data);
  //       setAttempt(res.data)
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  return (
    <div className='popup'>
      <div id="rain"></div>
      <div className='popup-content'>
        </div>
        <br></br>
        <div className='answer-bubble'>answer: {answer}</div>
        <br></br>
        <br></br>
        <br></br>
        <div className='container'>
          <div className='tear'></div>
          <div className='tear2'></div>
          <div className='face'>
            <div className='eyebrow'>︶</div>
            <div className='eyebrow'>︶</div>
            <div className='eye'></div>
            <div className='eye'></div>
            <div className='mouth'></div>
          </div>
        </div>
      
    </div>
  )
}

export default Popup;