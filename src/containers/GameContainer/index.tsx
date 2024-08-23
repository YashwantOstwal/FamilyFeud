import { useState, useEffect } from 'react';
import HeaderView from '@views/HeaderView';
import AnswersView from '@views/AnswersView';
import InputView from '@views/InputView';
import RenderGameOver from '@components/base/RenderGameOver';
interface answerElementType {
  answer: string;
  points: number;
}
interface dataType {
  question: string;
  answers: answerElementType[];
}
const GameContainer: React.FC = () => {
  const data: dataType = {
    question: 'Social _______',
    answers: [
      {
        answer: 'media',
        points: 5,
      },
      {
        answer: 'network',
        points: 10,
      },
      {
        answer: 'affairs',
        points: 15,
      },
      {
        answer: 'studies',
        points: 20,
      },
      {
        answer: 'life',
        points: 25,
      },
      {
        answer: 'welfare',
        points: 30,
      },
    ],
  };
  const [time, setTime] = useState<number>(40);
  const [score, setScore] = useState<number>(0);
  const [guesses, setGuesses] = useState<string[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div className='h-screen bg-[#172554] flex flex-col justify-between items-center'>
      {time > 0 ? (
        <>
          <HeaderView question={data.question} seconds={time} score={score} />
          <AnswersView guesses={guesses} setScore={setScore} answers={data.answers} score={score} />
          <InputView setGuesses={setGuesses} guesses={guesses} />
        </>
      ) : (
        <RenderGameOver />
      )}
    </div>
  );
};
export default GameContainer;
