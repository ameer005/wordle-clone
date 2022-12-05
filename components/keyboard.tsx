import { firstRow, secondRow, thirdRow } from "../utils/keys";
import { BsBackspace } from "react-icons/bs";

interface KeyboardProps {
  setCurrentWord: React.Dispatch<React.SetStateAction<string[]>>;
  currentWord: string[];
  renderKeyColor: (value: string) => string;
  submitWord: () => void;
  row: number;
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}

const Keyboard = (props: KeyboardProps) => {
  const {
    setCurrentWord,
    currentWord,
    renderKeyColor,
    submitWord,
    row,
    setBoard,
  } = props;

  const renderKeys = (keys: string[]) => {
    return keys.map((key, index) => {
      return (
        <button
          onClick={() => {
            if (currentWord.length < 5) {
              setCurrentWord((prev) => [...prev, key]);
              setBoard((prev) => {
                const temp = [...prev];
                temp[row][currentWord.length] = key;
                return temp;
              });
            }
          }}
          key={index}
          className={`uppercase w-12 py-5 xl:py-4 xl:text-sm rounded-md  font-medium
          ${renderKeyColor(key)}`}
        >
          {key}
        </button>
      );
    });
  };

  return (
    <div className="1 items-center w-full max-w-[32rem]">
      <div className="flex justify-center gap-1 mb-1">
        {renderKeys(firstRow)}
      </div>
      <div className="flex justify-center gap-1 mb-1">
        <div className="h-2 w-2"></div>
        {renderKeys(secondRow)}
        <div className="h-2 w-2"></div>
      </div>
      <div className="flex justify-center gap-1 w-full">
        <button
          onClick={() => {
            currentWord.length === 5 && submitWord();
          }}
          className="px-2 flex-1 w-full uppercase bg-colorKeys  py-5 xl:py-4 xl:text-sm rounded-md  font-medium"
        >
          Enter
        </button>
        {renderKeys(thirdRow)}
        <button
          onClick={() => {
            if (currentWord.length > 0) {
              setBoard((prev) => {
                const temp = [...prev];
                temp[row][currentWord.length - 1] = "";
                return temp;
              });
              setCurrentWord((prev) => [...prev].slice(0, -1));
            }
          }}
          className="px-2 flex-1 w-full flex justify-center  uppercase bg-colorKeys  py-5 xl:py-4 xl:text-sm rounded-md  font-medium"
        >
          <BsBackspace className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
