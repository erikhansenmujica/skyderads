export const MessagesInBetween = ({
  text,
  size,
  inverted,
  firstScrollRef,
  gradient,
  gradienttext,
  highlightwords,
}: {
  text: string;
  size?: string;
  inverted?: boolean;
  firstScrollRef?: React.RefObject<HTMLDivElement>;
  gradient?: boolean;
  gradienttext?: boolean;
  highlightwords?: string[];
}) => {
  const words = highlightwords ? text.split(" ") : [];
  const sizeClass = size ? "text-" + size : "text-1xl";
  return inverted || gradient ? (
    <header
      ref={firstScrollRef}
      className={
        gradient
          ? "bg-gradient-to-r from-blue-500 to-teal-400 w-full py-20 mb-400 "
          : "bg-black w-full py-20 mb-400 "
      }
    >
      <div className="mx-auto text-center flex flex-col justify-between">
        <h1 className={sizeClass + " font-bold text-gray-200 m-5 p-0"}>
          {text}
        </h1>
      </div>
    </header>
  ) : (
    <header ref={firstScrollRef} className="bg-gray-100 w-full py-20 mb-400 ">
      <div className="mx-auto text-center flex flex-col justify-between">
        <h1
          className={
            gradienttext && !highlightwords
              ? sizeClass +
                " font-black bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-teal-400  m-5 p-0"
              : sizeClass + " font-bold text-gray-800 m-5 p-0"
          }
        >
          {highlightwords
            ? words.map((word) => {
                const className =
                  "font-black bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-teal-400";
                if (highlightwords.includes(word)) {
                  if (words.indexOf(word) === 0) {
                    return <span className={className}>{word} </span>;
                  } else if (
                    highlightwords.indexOf(word) ===
                    highlightwords.length - 1
                  ) {
                    return <span className={className}> {word}</span>;
                  } else return <span className={className}> {word} </span>;
                } else
                  return words.indexOf(word) === 0
                    ? word + " "
                    : words.indexOf(word) === words.length - 1
                    ? " " + word
                    : " " + word + " ";
              })
            : text}
        </h1>
      </div>
    </header>
  );
};
