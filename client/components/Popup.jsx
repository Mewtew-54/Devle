import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Popup = (props) => {

  const [answer, setAnswer] = useState('');

  useEffect(() => {
    axios.get('/api/answer')
		.then((res) => {
      console.log(res.data);
			setAnswer(res.data);
      console.log('answer is: ', answer);
      console.log('typeof answer is: ', typeof answer);
		})
		.catch((err) => console.log(err));
  }, [])

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h2>Better luck next time!</h2>
        <div>answer: {answer}</div>
      </div>
    </div>
  )
}

export default Popup;