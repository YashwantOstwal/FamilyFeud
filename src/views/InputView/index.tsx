import React, { SetStateAction } from 'react';
import { motion } from 'framer-motion';
import Button from '@components/base/Button';
import UpperArrowSVG from '@components/base/UpperArrow';

interface answers {
  answer: string;
  points: number;
}
interface InputViewProps {
  setGuesses: React.Dispatch<React.SetStateAction<answers[]>>;
  guesses: answers[];
  started: boolean;
  answers: answers[];
  inputText: { current: string };
  setPromptWrongGuess: React.Dispatch<SetStateAction<boolean>>;
  setWrongGuessesCount: React.Dispatch<SetStateAction<number>>;
  setAlreadyGuessed: React.Dispatch<SetStateAction<boolean>>;
}
let controlInterval: NodeJS.Timer;
const InputView: React.FC<InputViewProps> = ({
  setGuesses,
  guesses,
  started,
  answers,
  setPromptWrongGuess,
  setWrongGuessesCount,
  setAlreadyGuessed,
  inputText,
}) => {
  const handleChange = (input: string) => {
    inputText.current = input.toLowerCase();
  };

  const handleClick = () => {
    const handleGuesses = (updateHandler: React.Dispatch<SetStateAction<boolean>>) => {
      clearInterval(controlInterval);
      updateHandler(true);
      controlInterval = setTimeout(() => {
        updateHandler(false);
      }, 600);
    };
    const element: answers | undefined = answers.find((element) => element.answer === inputText.current);
    const alreadyGuessed: answers | undefined = guesses.find((guess) => guess.answer === element?.answer);
    if (element && !alreadyGuessed) {
      setGuesses([...guesses, element]);
    } else if (alreadyGuessed) {
      handleGuesses(setAlreadyGuessed);
    } else {
      setWrongGuessesCount((prevCount) => ++prevCount);
      handleGuesses(setPromptWrongGuess);
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
