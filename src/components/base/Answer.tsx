import React from 'react';
interface AnswerProps {
  answer: string;
  points: number;
}
const Answer: React.FC<AnswerProps> = ({ answer, points }) => {
  return (
    <>
      <span className='w-9/12 flex justify-center items-center capitalize bg-[#013c9f]'>{answer}</span>
      <span className='w-3/12 text-center flex justify-center items-center bg-gradient-to-b from-[#6491df] from-30% to-[#135acf]'>
        {points}
      </span>
    </>
  );
};
export default Answer;
