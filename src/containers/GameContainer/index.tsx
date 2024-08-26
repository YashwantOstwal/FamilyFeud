import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderView from '@views/HeaderView';
import AnswersView from '@views/AnswersView';
import InputView from '@views/InputView';
import RenderGameOver from '@components/base/RenderGameOver';
import StartInterface from '@components/custom/StartInterface';
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
  const [started, setStarted] = useState<boolean>(false);
  useEffect(() => {
    const element = data.answers.find((element) => {
      return element.answer == guesses[guesses.length - 1];
    });
    element && setScore(element.points + score);
  }, [guesses]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime(time - 1);
  //   }, 1000);
  // }, [time]);
  //bg-[#172554]
  return (
    <div className=' bg-gradient-to-b from-[#000110] from-30% to-[#00099b] h-screen'>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: started ? 1 : 0.8 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className=' h-screen flex flex-col justify-between items-center overflow-hidden '
      >
        {true ? (
          <>
            <HeaderView started={started} question={data.question} seconds={time} score={score} />
            <AnswersView guesses={guesses} setScore={setScore} answers={data.answers} score={score} />
            <InputView started={started} setGuesses={setGuesses} guesses={guesses} />
          </>
        ) : (
          <RenderGameOver />
        )}
      </motion.div>
      {!started && <StartInterface setStarted={setStarted} />}
    </div>
  );
};
export default GameContainer;
