import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeaderView from '@views/HeaderView';
import AnswersView from '@views/AnswersView';
import InputView from '@views/InputView';
import RenderGameOver from '@components/custom/RenderGameOver';
import StartInterface from '@components/custom/StartInterface';
interface answerElementType {
  answer: string;
  points: number;
}
interface dataType {
  question: string;
  answers: answerElementType[];
}
interface answersSchema {
  answer: string;
  points: number;
}
let interval: NodeJS.Timer;
const GameContainer: React.FC = () => {
  const data: dataType = {
    question: 'Social _______',
    answers: [
      {
        answer: 'media',
        points: 29,
      },
      {
        answer: 'network',
        points: 17,
      },
      {
        answer: 'affairs',
        points: 4,
      },
      {
        answer: 'studies',
        points: 19,
      },
      {
        answer: 'life',
        points: 27,
      },
      {
        answer: 'welfare',
        points: 12,
      },
    ],
  };
  const [time, setTime] = useState<number>(40);
  const [score, setScore] = useState<number>(0);
  const [guesses, setGuesses] = useState<answersSchema[]>([]);
  const [promptWrongGuess, setPromptWrongGuess] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);
  //Calculating score whenever the "guesses" changes by checking the new entry in the array as one of the answers(no duplication of words in guesses array)

  useEffect(() => {
    const lastGuessedAnswer = guesses[guesses.length - 1];
    if (lastGuessedAnswer) {
      setScore(score + lastGuessedAnswer.points);
    }
  }, [guesses]);
  useEffect(() => {
    setTimeout(() => {
      if (started) {
        interval = setInterval(() => {
          setTime((prevState) => --prevState);
        }, 1000);
      }
    }, 1000);
  }, [started]);
  if (time == 0) {
    clearInterval(interval);
  }
  return (
    <>
      <div className=' bg-gradient-to-b from-[#000110] from-30% to-[#00099b] h-screen'>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: started ? 1 : 0.8 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className=' h-screen flex flex-col justify-between items-center overflow-hidden '
        >
          <>
            <HeaderView started={started} question={data.question} seconds={time} score={score} />
            <AnswersView guesses={guesses} answers={data.answers} promptWrongGuess={promptWrongGuess} />
            <InputView
              started={started}
              setGuesses={setGuesses}
              guesses={guesses}
              answers={data.answers}
              setPromptWrongGuess={setPromptWrongGuess}
            />
          </>
        </motion.div>
      </div>
      {!started && <StartInterface setStarted={setStarted} />}
      {time <= 0 && <RenderGameOver />}
    </>
  );
};
export default GameContainer;
