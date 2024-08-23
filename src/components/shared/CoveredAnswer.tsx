import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Answer from '@components/base/Answer';
import Cover from '@components/base/Cover';
interface CoveredAnswerProps {
  answer: string;
  score: number;
  index: number;
  guesses: string[];
  points: number;
}
const CoveredAnswer: React.FC<CoveredAnswerProps> = ({ answer, score, index, guesses, points }) => {
  return (
    <>
      <Answer answer={answer} points={points} />
      {!guesses.find((i: string) => {
        return i === answer;
      }) && <Cover index={index} />}
    </>
  );
};
export default CoveredAnswer;
