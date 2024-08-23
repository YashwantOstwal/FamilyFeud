import React from 'react';
interface TimerCardProps {
  seconds: number;
  className: string;
}
const TimerCard: React.FC<TimerCardProps> = ({ seconds, className }) => {
  return (
    <div
      className={`mx-auto w-1/6 bg-[#041B39] rounded-b-md ring-2 ring-[#041B39] flex justify-center items-center text-[2vw] ${className}`}
    >
      {seconds}
    </div>
  );
};
export default TimerCard;
