import SideBar from '@components/base/SideBar';
import ProfileCard from '@components/shared/ProfileCard';
import TimerCard from '@components/custom/TimerCard';
import QuestionCard from '@components/custom/QuestionCard';
interface HeaderViewProps {
  question: string;
  seconds: number;
  score: number;
}
const HeaderView: React.FC<HeaderViewProps> = ({ question, seconds, score }) => {
  return (
    <>
      <div className='relative w-3/5 flex justify-between items-end h-[15vw] text-white oswald-500'>
        <SideBar />
        <ProfileCard score={score} />
        <div className='h-full flex flex-col w-4/6'>
          <div className=' grid grid-rows-3 h-[12vw] gap-1 '>
            <QuestionCard className='row-span-2' question={question} />
            <TimerCard className='w-1/6' seconds={seconds} />
          </div>
        </div>
        <ProfileCard score={0} />
      </div>
    </>
  );
};
export default HeaderView;
