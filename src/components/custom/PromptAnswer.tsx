export default function PromptAnswer({ children }: { children: string }) {
  return (
    <div className='px-[5%] h-fit leading-tight bg-[#83031b] border-2 border-[#db062e] rounded-md oswald-500 text-center'>
      {children}
    </div>
  );
}
