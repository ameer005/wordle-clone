import { MdOutlineClose } from "react-icons/md";

interface GamerOverProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isWon: boolean;
  correctWord?: string;
  resetGame: () => void;
}

const GameOverModal = (props: GamerOverProps) => {
  const { isWon, correctWord, resetGame } = props;
  return (
    <div
      // onClick={() => setShowModal(false)}
      className="fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="py-6 px-6 w-full max-w-[25rem] dark:bg-colorBgDark bg-colorBg relative text-colorBlack  rounded-lg m-8 sm:m-4"
      >
        <div className="flex flex-col items-center">
          {isWon ? (
            <div className="font-bold text-2xl">You Win</div>
          ) : (
            <>
              <div className="font-bold text-2xl">You Loose</div>
              <div className="text-base">{`The correct word is "${correctWord}"`}</div>
            </>
          )}

          <button
            onClick={() => resetGame()}
            className={
              "mt-6 py-2 px-4 bg-colorWhite text-colorBg rounded-lg font-bold"
            }
          >
            Play Again
          </button>
        </div>
        {/* close button */}
        {/* <MdOutlineClose
          onClick={() => setShowModal(false)}
          className="text-xl absolute top-5 right-5 text-colorPrimary cursor-pointer"
        /> */}
      </div>
    </div>
  );
};

export default GameOverModal;
