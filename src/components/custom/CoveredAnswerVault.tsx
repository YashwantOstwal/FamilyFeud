import React from 'react';
import CoveredAnswer from '@components/shared/CoveredAnswer';
interface CoveredAnswerVaultProps {
  answers: {
    answer: string;
    points: number;
  }[];
  guesses: string[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}
const CoveredAnswerVault: React.FC<CoveredAnswerVaultProps> = ({ answers, guesses, setScore, score }) => {
  return (
    <>
      {answers.map((ele, index) => (
        <div key={ele.answer} className='relative border-white border-[1px] h-full flex'>
          <CoveredAnswer answer={ele.answer} index={index} score={score} guesses={guesses} points={ele.points} />
        </div>
      ))}
    </>
  );
};
export default CoveredAnswerVault;
