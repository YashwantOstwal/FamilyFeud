interface CoverProps {
  index: number;
}
const Cover: React.FC<CoverProps> = ({ index }) => {
  return (
    <div>
      <div className='absolute inset-0 bg-[#135acf]' />
      <div
        style={{ borderRadius: '0px 0px 100% 100%', boxShadow: '0px -5px 13px 5px inset #4576cc' }}
        className='absolute top-0 inset-x-0 bottom-1/3 bg-[#6491df]'
      />
      <div
        style={{ boxShadow: '0px -4px 5px 2px inset #1e40af' }}
        className='absolute inset-0 flex justify-center items-center'
      >
        <div className='px-[10%] rounded-[100%] bg-[#0a2c72] border-2 border-[#4576cc] shadow-inner shadow-blue-950 select-none'>
          {index + 1}
        </div>
      </div>
    </div>
  );
};
export default Cover;
