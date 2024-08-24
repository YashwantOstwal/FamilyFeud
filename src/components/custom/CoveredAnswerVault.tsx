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
      <div className='w-[32vw] max-w-[900px] max-h-[500px] h-[19vw] border-[#353633] border-4 ring-1 ring-black/40 oswald-500 outline outline-4 outline-offset-8 outline-[#fff300]'>
        <div className='h-3/4 grid grid-rows-3 grid-cols-2 grid-flow-col oswald-500 text-[2.1vw] text-white'>
          {answers.map((ele, index) => (
            <div key={ele.answer} className='relative border-white border-2 h-full flex'>
              <CoveredAnswer answer={ele.answer} index={index} score={score} guesses={guesses} points={ele.points} />
            </div>
          ))}
        </div>
        <div className='h-1/4 flex justify-center items-center bg-white text-[3vw] text-[#D0D6E0] poppins-bold bg-gradient-to-b from-[#6491df] to-[#135acf]'>
          DOUBLE POINTS
        </div>
      </div>
    </>
  );
};
export default CoveredAnswerVault;
