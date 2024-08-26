import React from 'react';
import PictureCard from '@components/base/PictureCard';
import ScoreCard from '@components/base/ScoreCard';
interface ProfileCardProps {
  score: number;
  layoutId: string;
  started: boolean;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ score, layoutId, started }) => {
  return (
    <div className='space-y-[0.5vw]'>
      <PictureCard layoutId={layoutId} />
      <ScoreCard score={score} started={started} />
    </div>
  );
};
export default ProfileCard;
