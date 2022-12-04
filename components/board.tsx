interface BoardProps {
  board: string[][];
  boardColumnColor: (value: string, pos: number, index: number) => string;
}

const Board = (props: BoardProps) => {
  const { board, boardColumnColor } = props;

  const renderColoumns = (pos: number) => {
    return board[pos].map((val, index) => {
      return (
        <div
          key={index}
          className={`items-center uppercase justify-center text-3xl font-bold h-14 w-full flex
          ${boardColumnColor(val, pos, index)}`}
        >
          {val}
        </div>
      );
    });
  };

  const renderRows = (list: (pos: number) => JSX.Element[], pos: number) => {
    return <div className="grid gap-1 grid-cols-5">{list(pos)}</div>;
  };

  return (
    <div className="flex flex-col gap-1 h-full w-full my-5 max-w-[18rem]">
      {renderRows(renderColoumns, 0)}
      {renderRows(renderColoumns, 1)}
      {renderRows(renderColoumns, 2)}
      {renderRows(renderColoumns, 3)}
      {renderRows(renderColoumns, 4)}
      {renderRows(renderColoumns, 5)}
    </div>
  );
};

export default Board;
