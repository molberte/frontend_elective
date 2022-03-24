import React, { useState } from 'react';
import photo_priest from './Priest.png'
import photo_zendaya from './Zendaya'
import photo_edward from './Edward.png'

export default function App() {
	const questions = [
		{
			questionText: '1. Choose one:',
			answerOptions: [
				{ answerText: 'Dream', isAnswerNumber: 1 },
				{ answerText: 'Discover', isAnswerNumber: 2 },
				{ answerText: 'Dance', isAnswerNumber: 3 },
			],
		},
		{
			questionText: '2. Choose one:',
			answerOptions: [
				{ answerText: 'Protect', isAnswerNumber: 1 },
				{ answerText: 'Seek', isAnswerNumber: 2 },
				{ answerText: 'Serve', isAnswerNumber: 3 },
			],
		},
		{
			questionText: '3. Choose one:',
			answerOptions: [
				{ answerText: 'Glitter', isAnswerNumber: 1 },
				{ answerText: 'Shine', isAnswerNumber: 2 },
				{ answerText: 'Glow', isAnswerNumber: 3 }
			],
		},
		{
			questionText: '4. Choose one:',
			answerOptions: [
				{ answerText: 'Love', isAnswerNumber: 1 },
				{ answerText: 'Trust', isAnswerNumber: 2 },
				{ answerText: 'Hope', isAnswerNumber: 3 },
			],
		},
		{
			questionText: '5. Choose one:',
			answerOptions: [
				{ answerText: 'Forever', isAnswerNumber: 1 },
				{ answerText: 'Once', isAnswerNumber: 2 },
				{ answerText: 'Never', isAnswerNumber: 3 },
			],
		},
		{
			questionText: '6. Choose one:',
			answerOptions: [
				{ answerText: 'Impress', isAnswerNumber: 1 },
				{ answerText: 'Advise', isAnswerNumber: 2 },
				{ answerText: 'Comfort', isAnswerNumber: 3 },
			],
		},
		{
			questionText: '7. Choose one:',
			answerOptions: [
				{ answerText: 'Rain', isAnswerNumber: 1 },
				{ answerText: 'Sun', isAnswerNumber: 2 },
				{ answerText: 'Wind', isAnswerNumber: 3 },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isAnswerNumber) => {
		setScore(score + isAnswerNumber);
		

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


	const giveResultForOne = (score) => {
		if (score>6 && score<12) {
			return ["Edward Callen", photo_edward]
		} else if (score>11 && score<17) {
			return ["Zendaya", photo_zendaya]
		} else {
			return ["Hot Priest", photo_priest]
		}
	};


	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<figure>
						<span>
						<b>You get {giveResultForOne(score)[0]}!</b>
						</span>
						<img src={giveResultForOne(score)[1]} />
					</figure>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isAnswerNumber)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
