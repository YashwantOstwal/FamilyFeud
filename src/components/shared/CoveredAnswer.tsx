import React from 'react';
import Answer from '@components/base/Answer';
import Cover from '@components/base/Cover';
import { AnimatePresence } from 'framer-motion';
interface CoveredAnswerProps {
  answer: string;
  index: number;
  guesses: {
    answer: string;
    points: number;
  }[];
  points: number;
}
const CoveredAnswer: React.FC<CoveredAnswerProps> = ({ answer, index, guesses, points }) => {
  return (
    <>
      <Answer answer={answer} points={points} />
      <AnimatePresence>{!guesses.find((guess) => guess.answer === answer) && <Cover index={index} />}</AnimatePresence>
    </>
  );
};
export default CoveredAnswer;
