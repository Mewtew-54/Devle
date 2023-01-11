import React from 'react';
import axios from 'axios';
import state, { initialState, increment, reset, setDevle } from '../state';
import { useDispatch, useSelector } from 'react-redux';

const devle = {
	questionStrings: [
		"inserts a *** element with a specified ***** in to a *** object, if there isn't an element with the same value ******* in the ***.",
		"inserts a new element with a specified ***** in to a Set object, if there isn't an element with the same value ******* in the Set.",
		"inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.",
	],
	answer: 'add',
};

const Home = () => {
	// const devle = useSelector(state => state.devl)
	const attempts = useSelector((state) => state.attempts);
	console.log(attempts);
	// async function getDevle() {
	// goes to database and gets the question of the day, sets state.devle to question
	// }
	const checkAnswer = (e) => {
		e.preventDefault();
		if (e.target.value === devle.answer) {
			//if equal, then set new state value (success?) to true, which will render new component (/success page?) for user
		}
	};

	// fetch the question

	// how to obscur question

	// check if user input is correct


	return (
		<div>
			<h1>Today's Devle</h1>
			<h1> number of attempts: {attempts} </h1>
			<div>
				<div>{devle.questionStrings[attempts]}</div>
			</div>
			<form onSubmit={checkAnswer}>
				<label>
					Your Answer:
					<input type="text" name="name" />
				</label>
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
