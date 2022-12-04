interface BoardProps {
  board: string[];
  boardColumnColor: (value: string) => string;
}

const Board = (props: BoardProps) => {
  const { board, boardColumnColor } = props;

  const renderColoumns = () => {
    return board.map((val, index) => {
      return (
        <div
          key={index}
          className={`items-center uppercase justify-center text-3xl font-bold h-14 w-full flex
          ${boardColumnColor(val)}`}
        >
          {val}
        </div>
      );
    });
  };

  return (
    <div className="grid gap-1 grid-cols-5 h-full w-full my-5 max-w-[18rem]">
      {renderColoumns()}
    </div>
  );
};

export default Board;
