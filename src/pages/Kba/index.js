
import React, { useState } from 'react';

import { useHistory } from 'react-router-dom'


import { App, Container, Question, AnswerSection, QuestionText } from './styles'

function Kba() {

    const history = useHistory()

	const questions = [
		{
			questionText: 'Qual desses é o seu ceps?',
			answerOptions: [
				{ answerText: '03300-213', isCorrect: false },
				{ answerText: '03300-000', isCorrect: false },
				{ answerText: '07700-123', isCorrect: true },
				{ answerText: '03300-321', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			history.push('/success');
		}else {
            history.push('/error')
        }
	};
	return (

     <Container>
		<App>
			<Question>
				<QuestionText>{questions[currentQuestion].questionText}</QuestionText>
			</Question>
			<AnswerSection>
				{questions[currentQuestion].answerOptions.map((answerOption) => (
					<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
				))}
			</AnswerSection>
		</App>
      </Container>

	);
}

export default Kba
