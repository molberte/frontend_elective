import React, { useState } from 'react'
import { QuizCardStyled } from './QuizCard.styled'

import photo_priest from '../../assets/Priest.png'
import photo_zendaya from '../../assets/Zendaya.png'
import photo_edward from '../../assets/Edward.png'

export const QuizCard = () => {
  const questions = [
    {
      questionText: 'Choose one:',
      answerOptions: [
        { answerText: 'Dream', isAnswerNumber: 1 },
        { answerText: 'Discover', isAnswerNumber: 2 },
        { answerText: 'Dance', isAnswerNumber: 3 },
      ],
    },
    {
      questionText: 'Choose one:',
      answerOptions: [
        { answerText: 'Protect', isAnswerNumber: 1 },
        { answerText: 'Seek', isAnswerNumber: 2 },
        { answerText: 'Serve', isAnswerNumber: 3 },
      ],
    },
    {
      questionText: 'Choose one:',
      answerOptions: [
        { answerText: 'Glitter', isAnswerNumber: 1 },
        { answerText: 'Shine', isAnswerNumber: 2 },
        { answerText: 'Glow', isAnswerNumber: 3 },
      ],
    },
    {
      questionText: 'Choose one:',
      answerOptions: [
        { answerText: 'Love', isAnswerNumber: 1 },
        { answerText: 'Trust', isAnswerNumber: 2 },
        { answerText: 'Hope', isAnswerNumber: 3 },
      ],
    },
    {
      questionText: 'Choose one:',
      answerOptions: [
        { answerText: 'Forever', isAnswerNumber: 1 },
        { answerText: 'Once', isAnswerNumber: 2 },
        { answerText: 'Never', isAnswerNumber: 3 },
      ],
    },
    {
      questionText: 'Choose one:',
      answerOptions: [
        { answerText: 'Impress', isAnswerNumber: 1 },
        { answerText: 'Advise', isAnswerNumber: 2 },
        { answerText: 'Comfort', isAnswerNumber: 3 },
      ],
    },
    {
      questionText: 'Choose one:',
      answerOptions: [
        { answerText: 'Rain', isAnswerNumber: 1 },
        { answerText: 'Sun', isAnswerNumber: 2 },
        { answerText: 'Wind', isAnswerNumber: 3 },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  /*	For shuffling questions:
		const numOfCrushes = 10
		const shuffleQuestions = (q)=> {
			for (let i = numOfCrushes - 1; i > 0; i -= 1) {
				const j = Math.floor(Math.random() * (questions.length - 1));
				[q[i], q[j]] = [q[j], q[i]];
			}
			return q
	};*/

  const handleAnswerOptionClick = (isAnswerNumber: number) => {
    setScore(score + isAnswerNumber)

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const giveResultForOne = (score: number) => {
    if (score > 6 && score < 12) {
      return ['Edward Callen', photo_edward]
    } else if (score > 11 && score < 17) {
      return ['Zendaya', photo_zendaya]
    } else {
      return ['Hot Priest', photo_priest]
    }
  }

  return (
    <QuizCardStyled>
      <div className="quiz">
        <div className="box-section">
          {showScore ? (
            <div className="result-section">
              <img
                src={giveResultForOne(score)[1]}
                alt={giveResultForOne(score)[0]}
                className="result-image"
              />
              <div className="result-text">
                <b>You get {giveResultForOne(score)[0]}!</b>
              </div>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, isAnswerNumber) => (
                    <button
                      key={isAnswerNumber}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isAnswerNumber)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </QuizCardStyled>
  )
}
