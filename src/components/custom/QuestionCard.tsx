import React from 'react';
interface QuestionCardProps {
  question: string;
  className: string;
}
const QuestionCard: React.FC<QuestionCardProps> = ({ question, className }) => {
  return (
    <div
      className={`px-[0.5vw] pb-[0.5vw] bg-[#041B39] rounded-bl-2xl rounded-br-2xl border-b-2 border-x border-[#33c8fecc] border-r-[#4f4539] shadow-md shadow-black ${className}`}
    >
      <div className='h-full flex justify-center items-center border-x-[1.5px] border-b-[1.5px] rounded-bl-2xl rounded-br-2xl border-[#4f4539] border-r-[#33c8fecc]/50'>
        <p className='text-[2vw]'>{question}</p>
      </div>
    </div>
  );
};
export default QuestionCard;
