export const Title = ({ text }: { text: string }) => (
  <div className="h-screen w-screen fixed top-0 z-0">
    <div className="flex justify-center w-screen ">
      <h1 className="p-6 text-1xl mt-[25%] md:mt-[15%] lg:mt-[10%] text-black bg-white ">
        {text}
      </h1>
    </div>
  </div>
);
