import { motion } from 'framer-motion';
import PictureCard from '@components/base/PictureCard';
import Button from '@components/base/Button';

type Props = {
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function StartInterface({ setStarted }: Props) {
  return (
    <>
      <div className='absolute inset-0 bg-black/95' />
      <div className='absolute top-[10%] inset-x-0 inset-y-[20%] flex flex-col justify-around items-center'>
        <div className='w-1/4 flex justify-between'>
          <motion.div initial={{ x: '-25px' }} animate={{ x: '0px' }} transition={{ delay: 0.2, type: 'tween' }}>
            <PictureCard layoutId='profile1' className='size-[9vw]' />
          </motion.div>
          <motion.div initial={{ x: '25px' }} animate={{ x: '0px' }} transition={{ delay: 0.2, type: 'tween' }}>
            <PictureCard layoutId='profile2' className='size-[9vw]' />
          </motion.div>
        </div>
        <Button className='px-16 py-1' onClick={() => setStarted((prevState) => !prevState)}>
          Play
        </Button>
      </div>
    </>
  );
}
