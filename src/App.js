import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import TictactoeTable from "./components/TictactoeTable";

let isWin = false;

function App() {
  const [aList, setalist] = useState([
    ["Z", "Z", "Z"],
    ["Z", "Z", "Z"],
    ["Z", "Z", "Z"],
  ]);

  const [syms, setSym] = useState("O");

  function handleList(row, col) {
    //클릭햇을 때 sym의 상태를 알아야함.
    // z 이면 useState의 sym을 O로 바꿈
    // useState의 sym이 O일 때는 X로 바꿈
    // 이건 값을 바꾸는게 아니라 그냥 상태만 바꾸는거임

    setalist((prev) => {
      const copyaList = prev.map((pe) => [...pe]);
      if (prev[row][col] === "Z") {
        copyaList[row][col] = syms;
        console.log("1" + syms);
        setSym((initialSyms) => {
          let result = initialSyms === "O" ? "X" : "O";
          console.log("2" + result);
          return result;
        });
      }

      if (aList[0][0] === aList[0][1] && aList[0][0] === aList[0][2])
        isWin = true;
      else if (aList[1][0] === aList[1][1] && aList[1][0] === aList[1][2])
        isWin = true;
      else if (aList[2][0] === aList[2][1] && aList[2][0] === aList[2][2])
        isWin = true;
      else if (aList[0][0] === aList[1][0] && aList[0][0] === aList[2][0])
        isWin = true;
      else if (aList[0][1] === aList[1][1] && aList[0][1] === aList[2][1])
        isWin = true;
      else if (aList[0][2] === aList[1][2] && aList[0][2] === aList[2][2])
        isWin = true;
      else if (aList[0][0] === aList[1][1] && aList[0][0] === aList[2][2])
        isWin = true;
      else if (aList[2][0] === aList[1][1] && aList[2][0] === aList[0][2])
        isWin = true;

      return copyaList;
    });
  }

  return (
    <>
      <Header />
      <Result isWin={isWin} />
      <TictactoeTable handler={handleList} list={aList} />
    </>
  );
}

export default App;
