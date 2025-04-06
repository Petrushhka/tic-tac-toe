import Button from "./Button";

const TictactoeTable = ({ list, handler }) => {
  return (
    <div>
      {list.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((col, colIdx) => (
            <Button handler={handler} key={colIdx} row={rowIdx} col={colIdx}>
              {list[rowIdx][colIdx]}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TictactoeTable;
