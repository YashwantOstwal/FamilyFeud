import React from 'react';
interface AnswerProps {
  answer: string;
  points: number;
}
const Answer: React.FC<AnswerProps> = ({ answer, points }) => {
  return (
    <div className='absolute inset-0 flex'>
      <p className='w-3/4 flex justify-center items-center capitalize bg-[#013c9f] select-none'>{answer}</p>
      <p className='w-1/4 text-center flex justify-center items-center bg-gradient-to-b from-[#6491df] from-30% to-[#135acf] select-none'>
        {points}
      </p>
    </div>
  );
};
export default Answer;
