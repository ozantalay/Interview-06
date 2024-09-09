import './styles.css'
import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris"
    ],
    correct: 0
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix"
    ],
    correct: 0
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing"
    ],
    correct: 0
  }
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // KODUNUZ BURAYA GELECEK

  const[score,setScore]=useState(0)
  const[questionIndex,setQuestionIndex]=useState(0)
  const[selectedAnswer,setSelectedAnswer]=useState(null)
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer=(index)=>{
    setSelectedAnswer(index)

    if(index===questions[questionIndex].correct){
      setScore(score+1)
    }
    setTimeout(() => {
      const nextQuestion = questionIndex + 1;
      if (nextQuestion < questions.length) {
        setQuestionIndex(nextQuestion);
        setSelectedAnswer(null); 
      } else {
        setIsQuizFinished(true);
      }
    }, 1000); 
  };

  const currentQuestion = questions[questionIndex];
  return (
    <div className='App'>


    <h2>{currentQuestion.question}</h2>
      <div className='answer'>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(index)}
              style={{
                backgroundColor:
                  selectedAnswer === index
                    ? index === currentQuestion.correct
                      ? "green"
                      : "red"
                    : ""
              }}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
        </div>
    </div>
  );
};

export default App;
