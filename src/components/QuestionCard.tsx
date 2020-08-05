import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

export const QuestionCard = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}: Props) => {
  return (
    <div>
      <p className="number">
        Question : {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answer.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
