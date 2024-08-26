import React, { SetStateAction } from 'react';
import Answer from '@components/base/Answer';
import Cover from '@components/base/Cover';
interface CoveredAnswerProps {
  answer: string;
  index: number;
  guesses: string[];
  points: number;
}
const CoveredAnswer: React.FC<CoveredAnswerProps> = ({ answer, index, guesses, points }) => {
  return (
    <>
      <Answer answer={answer} points={points} />
      {!guesses.includes(answer) && <Cover index={index} />}
    </>
  );
};
export default CoveredAnswer;
