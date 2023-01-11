import React, { useState } from 'react';
import axios from 'axios';
import state, { initialState, increment, reset, setDevle } from '../state';
import { useDispatch, useSelector } from 'react-redux';

// const devle = {
// 	questionStrings: [
// 		"inserts a *** element with a specified ***** in to a *** object, if there isn't an element with the same value ******* in the ***.",
// 		"inserts a new element with a specified ***** in to a Set object, if there isn't an element with the same value ******* in the Set.",
// 		"inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.",
// 	],
// 	answer: 'add',
// };

const Home = () => {

	const [devle, setDevle] = useState('');
	const [attempt, setAttempt] = useState(1);
	// const devle = useSelector(state => state.devl)
	const attempts = useSelector((state) => state.attempts);
	// console.log(attempts);
	// async function getDevle() {
	// goes to database and gets the question of the day, sets state.devle to question
	// }
	// const checkAnswer = (e) => {
	// 	e.preventDefault();
	// 	if (e.target.value === devle.answer) {
	// 		//if equal, then set new state value (success?) to true, which will render new component (/success page?) for user
	// 	}
	// };

	// fetch the question
	axios.get('/api/')
		.then((res) => {
			// console.log(res.data[0].question);
			setDevle(res.data[0].question);
		})
		.catch((err) => console.log(err));

	// obscure the question

	const obscured = (devle, x) => {
		// take our devle 
		const dArr = devle.split(' ');
		// obscure x percentage based off of length
		const totalWords = Math.abs(dArr.length - (dArr.length * x));
		// loop through the devle arr and replace words with obscured version/remove
		while (totalWords > 0){
			dArr.splice(Math.floor(Math.random() * dArr.length), 1, '*');
			totalWords -= 1;
		}
		// put together remaining words to be returned as string
		return dArr.join(' ');
	}

	// generate the percentage

	const getX = (attempt) => {
		let x = 0.9;
		if (attempt === 1){
			x = 0.8;
		} else if (attempt === 2){
			x = 0.7;
		} else if (attempt === 3){
			x = 0.6;
		} else if (attempt === 4){
			x = 0.5;
		} else if (attempt === 5){
			x = 0.4;
		}
		return x;
	}

	// check if user input is correct
	const guess = (e) => {
		e.preventDefault();
		const userData = document.getElementById('guess').value
		console.log(userData);
		axios.post('/api/guess', userData)
			.then((res) => {
				console.log('res data: ', res.data);
				(!res.data) ? setAttempt(attempt+1) : console.log('winner winner');
				console.log('attempt: ', attempt);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div>
			<h1>Today's Devle</h1>
			<h1> number of attempts: {attempts} </h1>
			<div>
				<div>{devle}</div>
			</div>
			<form onSubmit={guess}>
					<input type="text" name="name" id='guess' placeholder='your answer' />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
	//insert div below that displays the devle.questionStrings[attempts]
	//insert form with submit where user inputs their guess.
	//on submit, check if form value === state.devle.answer.
	//if equal, then set new state value (success?) to true, which will render new component (/success page?) for user
	//if not equal, call increment reducer to increase attempts which will render the next string
	//if attempts >= 5, then send user to failed component (/failed page?)
};

export default Home;
