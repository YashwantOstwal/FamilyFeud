import React from 'react';

const ScoreCard =({ score }:{score:number})=> {
  return <div className='text-center text-white'>{score}</div>;
}
export default ScoreCard;