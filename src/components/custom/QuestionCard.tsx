import React from 'react';
interface QuestionCardProps {
  question: string;
  className: string;
}
const QuestionCard: React.FC<QuestionCardProps> = ({ question, className }) => {
  return (
    <div
      className={`px-[0.5vw] pb-[0.5vw] bg-[#041B39] rounded-bl-[1.2vw] rounded-br-[1.2vw] border-b-2 border-x border-[#33c8fecc] border-r-[#4f4539] shadow-md shadow-black ${className}`}
    >
      <div className='h-full flex justify-center items-center border-x-[0.13vw] border-b-[0.13vw] rounded-bl-[1.2vw] rounded-br-[1.2vw] border-[#4f4539] border-r-[#33c8fecc]/50'>
        <p className='text-[2vw]'>{question}</p>
      </div>
    </div>
  );
};
export default QuestionCard;
