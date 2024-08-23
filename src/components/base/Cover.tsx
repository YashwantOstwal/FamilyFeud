interface CoverProps {
  index: number;
}
const Cover: React.FC<CoverProps> = ({ index }) => {
  return (
    <div className='absolute inset-0 flex justify-center items-center bg-blue-500'>
      <div className='px-[10%] rounded-[100%] bg-blue-950 border-2 border-blue-400'>{index + 1}</div>
    </div>
  );
};
export default Cover;
