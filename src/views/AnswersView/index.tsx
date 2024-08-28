import React from 'react';
import CoveredAnswer from '@components/shared/CoveredAnswer';
import PromptAnswer from '@components/custom/PromptAnswer';
interface AnswerViewProps {
  answers: {
    answer: string;
    points: number;
  }[];
  guesses: {
    answer: string;
    points: number;
  }[];
  promptWrongGuess: boolean;
  inputText: { current: string };
}
const AnswersView: React.FC<AnswerViewProps> = ({ answers, guesses, promptWrongGuess, inputText }) => {
  //outline outline-2 outline-offset-4  outline-[#fff300]
  return (
    <>
      <div className='w-[32vw] max-w-[900px] max-h-[500px] h-[19vw] border border-white outline-offset-4 outline outline-black outline-2 ring-4 ring-[#353633] oswald-500 select-none'>
        <div className='relative h-3/4 grid grid-rows-3 grid-cols-2 grid-flow-col oswald-500 text-[2.1vw] text-white'>
          {answers.map((ele, index) => (
            <div key={ele.answer} className='relative border-white border-2 h-full flex'>
              <CoveredAnswer answer={ele.answer} index={index} guesses={guesses} points={ele.points} />
            </div>
          ))}
          {promptWrongGuess && (
            <div className='absolute inset-0 flex justify-center '>
              <span className='text-red-700 text-[10vw] oswald-700 '>X</span>
            </div>
          )}
        </div>
        <div className='h-1/4 flex justify-center items-center bg-white text-[3vw] text-white poppins-bold bg-gradient-to-b from-[#6491df] to-[#135acf] border-2 border-white select-none uppercase overflow-hidden'>
          {promptWrongGuess && <PromptAnswer>{inputText.current}</PromptAnswer>}
        </div>
      </div>
    </>
  );
};
export default AnswersView;
