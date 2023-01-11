import React, { useState, useEffect } from 'react';
import axios from 'axios';
import state, { initialState, increment, reset, setDevle } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import Popup from './Popup'
import Win from './Win'
import { useNavigate } from 'react-router-dom';

// const devle = {
// 	questionStrings: [
// 		"inserts a *** element with a specified ***** in to a *** object, if there isn't an element with the same value ******* in the ***.",
// 		"inserts a new element with a specified ***** in to a Set object, if there isn't an element with the same value ******* in the Set.",
// 		"inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.",
// 	],
// 	answer: 'add',
// };

const Home = () => {
	const navigate = useNavigate();
	const [devle, setDevle] = useState('');
	const [obscuredQuestion, setObscuredQuestion] = useState(devle);
	const [indices, setIndices] = useState([]);
	const [attempt, setAttempt] = useState(0);
	const [show, setShow] = useState(false);
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

	useEffect(() => {
		setObscuredQuestion(obscured(devle, obscuredQuestion, getX(attempt)));
	}, [ devle, attempt ])

	axios.get('/api/')
		.then((res) => {
			// console.log(res.data[0].question);
			setDevle(res.data[0].question);
		})
		.catch((err) => console.log(err));

	let answer;
	// answer
	axios.get('/api/answer')
		.then((res) => {
			answer = res.data;
		})
		.catch((err) => console.log(err));

	// obscure the question

	// const indices = [];

	const obscured = (devle, obscuredQuestion, x) => {
		console.log('devle is ', devle)
		// console.log('devle is: ', devle);
		// console.log('x is: ', x);
		// take our devle 

		//first iteration (obscuredQuestion === undefined), run obscured and set obscured question to result
		//subsequent iterations, run obscured and set OQ to result 
		const dArr = devle.split(' ');
		// console.log('dArr is: ', dArr);
		// obscure x percentage based off of length
		let totalWords = Math.floor(dArr.length - (dArr.length * x));
		console.log('totalWords is: ', totalWords);
		// loop through the devle arr and replace words with obscured version/remove
		// first iteration
		if (attempt === 0){
			// console.log('inside if conditional');
			let indicesArr = []; 
			while (totalWords > 0){
				let index = Math.floor(Math.random() * dArr.length)
				if (!dArr[index].includes('_') && !dArr[index].includes('*')) {
					// console.log('inside second conditional')
					dArr.splice(index, 1, '*'.repeat(dArr[index].length));
					totalWords -= 1;
					indicesArr.push(index); 
					
					// indices.push(index);
					// console.log("indicesArr is: ", indicesArr);
				}
			// setObscursedQuestion(dArr.join(' '));
		}
		setIndices(indicesArr);
		console.log('state indices: ', indices)
		return dArr.join(' ');
		} else if (attempt < 5) {
			console.log('indices: ', indices);
			// grab a random index from our indices
			const original = devle.split(' ');
			const obscuredArr = obscuredQuestion.split(' ');
			console.log('obscuredArr: ', obscuredArr);
			let findIndex = indices[Math.floor(Math.random() * indices.length)];
			console.log('findIndex: ', findIndex);
			
			setIndices((prev) => {
				// prev.splice(indices.indexOf(findIndex), 1);
				return prev.filter(el => el !== findIndex);
			});
			// find the original word in our original devle
			// replace the same index with original word
			obscuredArr[findIndex] = original[findIndex]; 
			return obscuredArr.join(' ');
			// unobscure
			// loop obsuredQuestion, check for *
		} else return devle;
		// // put together remaining words to be returned as string
		// setObscuredQuestion(dArr.join(' '));
		// return dArr.join(' ');
	}

	// console.log(obscured(devle, getX(attempt)));
	// generate the percentage

	const getX = (attempt) => {
		let x;
		if (attempt === 0){
			x = 0.4;
		} else if (attempt === 1){
			x = 0.5;
		} else if (attempt === 2){
			x = 0.6;
		} else if (attempt === 3){
			x = 0.7;
		} else if (attempt === 4){
			x = 0.8;
		} else if (attempt === 5){
			x = 0.9;
		}
		return x;
	}

	if (attempt === 5){
		axios.post('/api/attempts', attempt);
		navigate('/popup');
	}

	// check if user input is correct
	const guess = (e) => {
		e.preventDefault();
		const userData = document.getElementById('guess').value
		console.log(userData);
		axios.post('/api/guess', userData)
			.then((res) => {
				console.log('res data: ', res.data);
				if (answer == userData){
				  axios.post('/api/attempts', attempt)
					navigate('/win')
				} else {
					setAttempt(attempt + 1);
				}
				// (!res.data) ? setAttempt(attempt+1) : console.log('winner winner');
				console.log('attempt: ', attempt);
			})
			.catch((err) => console.log(err));
	}
	


	// const obscuredQ = (obscured(devle, getX(attempt)));

	return (
		<div className='devle'>
			<h1>Devle</h1>
			<div>
				<div>{obscuredQuestion}</div>
			</div>
			<br></br>
			<br></br>
			<form onSubmit={guess}>
				<input style={{borderBottom :'none'}}type="text" name="name" id='guess' placeholder='your answer' />
				<button type="submit" value="Submit"> guess </button>
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
