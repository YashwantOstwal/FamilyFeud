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
  wrongGuessesCount: number;
  alreadyGuessed: boolean;
}
const AnswersView: React.FC<AnswerViewProps> = ({
  answers,
  guesses,
  promptWrongGuess,
  inputText,
  wrongGuessesCount,
  alreadyGuessed,
}) => {
  //outline outline-2 outline-offset-4  outline-[#fff300]
  return (
    <>
      <div className='w-[32vw] max-w-[900px] max-h-[500px] h-[19vw] border border-white outline-offset-4 outline outline-black outline-2 ring-4 ring-[#353633] oswald-500 select-none'>
        <div className='relative h-3/4 grid grid-rows-3 grid-cols-2 grid-flow-col oswald-500 text-[2.1vw] text-white'>
          {answers.map((ele, index) => (
            <div
              style={{ perspective: 1500 }}
              key={ele.answer}
              className='relative border-white border-2 overflow-hidden'
            >
              <CoveredAnswer answer={ele.answer} index={index} guesses={guesses} points={ele.points} />
            </div>
          ))}
          {promptWrongGuess && (
            <div className='absolute inset-0 flex justify-center '>
              <span style={{ textShadow: '4px 4px 10px #000000' }} className='text-red-700 text-[10vw] oswald-700 '>
                {'X '.repeat(Math.min(wrongGuessesCount, 3))}
              </span>
            </div>
          )}
        </div>

        <div className='h-1/4 flex justify-center items-center bg-white text-[3vw] text-white poppins-bold bg-gradient-to-b from-[#6491df] to-[#135acf] border-2 border-white select-none uppercase overflow-hidden'>
          {promptWrongGuess && inputText.current != '' && (
            <PromptAnswer className='bg-red-900 border-2 border-red-700'>{inputText.current}</PromptAnswer>
          )}
          {alreadyGuessed && inputText.current != '' && (
            <PromptAnswer className='bg-[#141414] border-2 border-y-gray-600 border-x-gray-900 '>
              Already Guessed
            </PromptAnswer>
          )}
        </div>
      </div>
    </>
  );
};
export default AnswersView;
