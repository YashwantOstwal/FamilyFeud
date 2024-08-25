import React from 'react';
import PictureCard from '@components/base/PictureCard';
import ScoreCard from '@components/base/ScoreCard';
interface ProfileCardProps {
  score: number;
  layoutId: string;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ score, layoutId }) => {
  return (
    <div className='space-y-[0.5vw]'>
      <PictureCard layoutId={layoutId} />
      <ScoreCard score={score} />
    </div>
  );
};
export default ProfileCard;
