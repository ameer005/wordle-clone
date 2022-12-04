import { firstRow, secondRow, thirdRow } from "../utils/keys";
import { BsBackspace } from "react-icons/bs";

interface KeyboardProps {
  setCurrentWord: React.Dispatch<React.SetStateAction<string[]>>;
  currentWord: string[];
  renderKeyColor: (value: string) => string;
  submitWord: () => void;
}

const Keyboard = (props: KeyboardProps) => {
  const { setCurrentWord, currentWord, renderKeyColor, submitWord } = props;

  const renderKeys = (keys: string[]) => {
    return keys.map((key, index) => {
      return (
        <button
          onClick={() => {
            currentWord.length < 5 && setCurrentWord([...currentWord, key]);
          }}
          key={index}
          className={`uppercase  px-5 py-5 rounded-md  font-medium
          ${renderKeyColor(key)}`}
        >
          {key}
        </button>
      );
    });
  };

  return (
    <div className="flex flex-col gap-1 items-center w-full max-w-[32rem]">
      <div className="flex gap-1">{renderKeys(firstRow)}</div>
      <div className="flex gap-1">{renderKeys(secondRow)}</div>
      <div className="flex gap-1 w-full">
        <button
          onClick={() => {
            currentWord.length === 5 && submitWord();
          }}
          className="flex-1 w-full uppercase bg-colorKeys  py-5 rounded-md  font-medium"
        >
          Enter
        </button>
        {renderKeys(thirdRow)}
        <button
          onClick={() => {
            currentWord.length > 0 &&
              setCurrentWord((prev) => [...prev].slice(0, -1));
          }}
          className="flex-1 w-full flex justify-center  uppercase bg-colorKeys  py-5 rounded-md  font-medium"
        >
          <BsBackspace className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
