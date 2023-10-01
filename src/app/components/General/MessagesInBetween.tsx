export const MessagesInBetween = ({
  text,
  size,
  inverted,
}: {
  text: string;
  size?: string;
  inverted?: boolean;
}) => {
  const sizeClass = size ? "text-" + size : "text-3xl";
  return inverted ? (
    <header className="bg-black w-full py-20 mb-400 ">
      <div className="mx-auto text-center flex flex-col justify-between">
        <h1 className={sizeClass + " font-bold text-gray-200 m-5 p-0"}>
          {text}
        </h1>
      </div>
    </header>
  ) : (
    <header className="bg-gray-100 w-full py-20 mb-400 ">
      <div className="mx-auto text-center flex flex-col justify-between">
        <h1 className={sizeClass + " font-bold text-gray-800 m-5 p-0"}>
          {text}
        </h1>
      </div>
    </header>
  );
};
