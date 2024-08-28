import React, { SetStateAction } from 'react';
import { motion } from 'framer-motion';
import Button from '@components/base/Button';
import UpperArrowSVG from '@components/base/UpperArrow';

interface InputViewProps {
  setGuesses: React.Dispatch<
    React.SetStateAction<
      {
        answer: string;
        points: number;
      }[]
    >
  >;
  guesses: {
    answer: string;
    points: number;
  }[];
  started: boolean;
  answers: {
    answer: string;
    points: number;
  }[];
  inputText: { current: string };
  setPromptWrongGuess: React.Dispatch<SetStateAction<boolean>>;
  setWrongGuessesCount: React.Dispatch<SetStateAction<number>>;
}
let controlInterval: NodeJS.Timer;
const InputView: React.FC<InputViewProps> = ({
  setGuesses,
  guesses,
  started,
  answers,
  setPromptWrongGuess,
  setWrongGuessesCount,
  inputText,
}) => {
  const handleChange = (input: string) => {
    inputText.current = input.toLowerCase();
  };

  const handleClick = () => {
    const element = answers.find((element) => element.answer === inputText.current);
    if (element) {
      setGuesses([...guesses, element]);
    } else {
      clearInterval(controlInterval);
      setPromptWrongGuess(true);
      setWrongGuessesCount((prevCount) => ++prevCount);
      controlInterval = setTimeout(() => {
        setPromptWrongGuess(false);
      }, 600);
    }
  };
  return (
    <motion.div
      initial={{ y: '6.6vw' }}
      animate={{ y: started ? '0vw' : '6.6vw' }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className='w-2/5 max-w-[1130px] bg-[#041b39] text-white h-[6.5vw] max-h-[190px] flex justify-center gap-1 px-6 items-center rounded-tl-2xl rounded-tr-2xl border-[#4f4539] border shadow-md shadow-black'
    >
      <Button className='basis-1/6 h-[4vw]' onClick={() => {}}>
        SKIP
      </Button>
      <div className='basis-4/6 '>
        <input
          className='outline-none w-full h-[3.5vw] rounded-sm caret-blue-900 text-black text-center uppercase oswald-500 text-[2vw] '
          type='text'
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
      <button
        style={{ boxShadow: '0px 2px 4px 0px inset #86a272' }}
        className='relative basis-1/6 h-[4vw] rounded-md oswald-500 text-white text-[2vw] bg-[#024091] hover:bg-[#255798] flex justify-center items-center hover:bg-gradient-to-b hover:from-cyan-700 hover:to-cyan-500'
        onClick={handleClick}
      >
        <div className='absolute inset-0 shadow-md shadow-black' />
        <UpperArrowSVG size='2.5vw' />
      </button>
    </motion.div>
  );
};
export default InputView;
