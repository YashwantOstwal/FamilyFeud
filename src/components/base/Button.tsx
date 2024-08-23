import React from 'react';
interface ButtonProps {
  className: string;
  children: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      className={` rounded-md oswald-500 text-white shadow-md shadow-black text-[2vw] bg-[#024091] drop-shadow-md  hover:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
