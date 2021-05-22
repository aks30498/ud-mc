import "./App.css";
import { useEffect, useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [config, setConfig] = useState({
    rows: 10,
    columns: 10,
  });

  // Data
  const [data, setData] = useState(
    Array(config.rows)
      .fill()
      .map((_) => Array(config.columns).fill(""))
  );

  useEffect(() => {
    // it refreshes excel
    setData(
      Array(config.rows)
        .fill()
        .map((_) => Array(config.columns).fill(""))
    );
  }, [config]);

  const updateCellValue = (rowInd, colInd, value) => {
    let newData = [...data];

    // if (value.trim().includes("sum:")) {
    //   const [operation, values] = [value.trim().split(":")];
    //   const [rangeStart, rangeEnd] = [values.split("-")];

    //   if (rangeStart < 1 || rangeEnd >= rowInd + 1) {
    //     newData[rowInd][colInd] = 0;
    //   } else {
    //     var sum = 0;

    //     for (let i = rangeStart - 1; i < rangeEnd; i++) {
    //       let val = parseInt(data[i][colInd]);
    //       if (val) {
    //         sum += val;
    //       } else {
    //         sum = 0;
    //         break;
    //       }
    //     }

    //     newData[rowInd][colInd] = 0;
    //   }
    // } else {
    // }
    newData[rowInd][colInd] = value;

    setData(newData);
  };

  return (
    <div className="App">
      <div className="configSection">
        <div className="configSection--inputFieldContainer">
          <span className="configSection--inputLabel">Rows</span>
          <input
            type="number"
            value={config.rows}
            onChange={(e) =>
              setConfig({ ...config, rows: parseInt(e.target.value) })
            }
          ></input>
        </div>

        <div className="configSection--inputFieldContainer">
          <span className="configSection--inputLabel">Columns</span>
          <input
            type="number"
            value={config.columns}
            onChange={(e) =>
              setConfig({ ...config, columns: parseInt(e.target.value) })
            }
          ></input>
        </div>
      </div>

      {data.map((row, rowIndex) => (
        <div className="row" key={`${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onUpdate={({ target }) =>
                updateCellValue(rowIndex, colIndex, target.value)
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
