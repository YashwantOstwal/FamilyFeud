import React from 'react';
import CoveredAnswer from '@components/shared/CoveredAnswer';
interface AnswersViewProps {
  answers: {
    answer: string;
    points: number;
  }[];
  guesses: string[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}
const AnswersView: React.FC<AnswersViewProps> = ({ answers, guesses, setScore, score }) => {
  //outline outline-2 outline-offset-4  outline-[#fff300]
  return (
    <>
      <div className='w-[32vw] max-w-[900px] max-h-[500px] h-[19vw] border border-white outline-offset-4 outline outline-black outline-2 ring-4 ring-[#353633] oswald-500 select-none'>
        <div className='h-3/4 grid grid-rows-3 grid-cols-2 grid-flow-col oswald-500 text-[2.1vw] text-white'>
          {answers.map((ele, index) => (
            <div key={ele.answer} className='relative border-white border-2 h-full flex'>
              <CoveredAnswer answer={ele.answer} index={index} guesses={guesses} points={ele.points} />
            </div>
          ))}
        </div>
        <div className='h-1/4 flex justify-center items-center bg-white text-[3vw] text-white poppins-bold bg-gradient-to-b from-[#6491df] to-[#135acf] border-2 border-white select-none'>
          DOUBLE POINTS
        </div>
      </div>
    </>
  );
};
export default AnswersView;
