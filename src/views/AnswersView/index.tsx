import CoveredAnswerVault from '@components/custom/CoveredAnswerVault';
interface AnswersViewProps {
  answers: {
    answer: string;
    points: number;
  }[];
  guesses: string[];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}
const AnswersView: React.FC<AnswersViewProps> = ({ answers, guesses, setScore, score }) => {
  return (
    <div className='w-[30%] h-[14vw] grid grid-rows-3 grid-cols-2 grid-flow-col border-black border-2 bg-[#427AD9] oswald-500 text-[2vw] text-white'>
      <CoveredAnswerVault answers={answers} guesses={guesses} setScore={setScore} score={score} />
    </div>
  );
};
export default AnswersView;
