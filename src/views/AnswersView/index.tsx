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
  return <CoveredAnswerVault answers={answers} guesses={guesses} setScore={setScore} score={score} />;
};
export default AnswersView;
