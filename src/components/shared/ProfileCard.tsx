import React from 'react';
import PictureCard from '@components/base/PictureCard';
import ScoreCard from '@components/base/ScoreCard';
interface ProfileCardProps {
  score: number;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ score }) => {
  return (
    <div className='space-y-[0.5vw]'>
      <PictureCard />
      <ScoreCard score={score} />
    </div>
  );
};
export default ProfileCard;
