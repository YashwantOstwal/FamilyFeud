import React, { useState } from 'react';
import Button from '@components/base/Button';
interface InputViewProps {
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
  guesses: string[];
}
const InputView: React.FC<InputViewProps> = ({ setGuesses, guesses }) => {
  const [inputText, setInputText] = useState('');
  const handleChange = (input: string) => {
    setInputText(input.toLowerCase());
  };

  const handleClick = () => {
    setGuesses([...guesses, inputText]);
  };
  return (
    <div className='w-2/5 bg-[#041b39] text-white h-[8vw] flex justify-center gap-2 px-4 items-center rounded-tl-2xl rounded-tr-2xl border-[#4f4539] border shadow-md shadow-black'>
      <Button className='basis-1/5 h-[4vw]' onClick={() => {}}>
        SKIP
      </Button>
      <div className='basis-3/5 '>
        <input
          className='outline-none w-full h-[3.5vw] rounded-sm caret-black text-black text-center uppercase oswald-500 text-[2vw]'
          type='text'
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
      <button
        className='basis-1/5 h-[4vw] rounded-md oswald-500 text-white shadow-md shadow-black text-[2vw] bg-[#024091] hover:scale-95'
        onClick={handleClick}
      >
        ^
      </button>
    </div>
  );
};
export default InputView;
