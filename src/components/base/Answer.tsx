import React from 'react';
interface AnswerProps {
  answer: string;
  points: number;
}
const Answer: React.FC<AnswerProps> = ({ answer, points }) => {
  return (
    <>
      <span className='w-4/6 flex justify-center items-center capitalize'>{answer}</span>
      <span className='w-2/6 text-center flex justify-center items-center bg-blue-900'>{points}</span>
    </>
  );
};
export default Answer;
