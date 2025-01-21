import React from "react";
import { Button } from "@mui/material";

const RouletteTable = () => {
  const numbers = [
    { number: 0, color: "green" },
    { number: 1, color: "red" },
    { number: 2, color: "black" },
    { number: 3, color: "red" },
    { number: 4, color: "black" },
    { number: 5, color: "red" },
    { number: 6, color: "black" },
    { number: 7, color: "red" },
    { number: 8, color: "black" },
    { number: 9, color: "red" },
    { number: 10, color: "black" },
    { number: 11, color: "red" },
    { number: 12, color: "black" },
    { number: 13, color: "black" },
    { number: 14, color: "red" },
    { number: 15, color: "black" },
    { number: 16, color: "red" },
    { number: 17, color: "black" },
    { number: 18, color: "red" },
    { number: 19, color: "black" },
    { number: 20, color: "red" },
    { number: 21, color: "black" },
    { number: 22, color: "red" },
    { number: 23, color: "black" },
    { number: 24, color: "red" },
    { number: 25, color: "red" },
    { number: 26, color: "black" },
    { number: 27, color: "red" },
    { number: 28, color: "black" },
    { number: 29, color: "red" },
    { number: 30, color: "black" },
    { number: 31, color: "red" },
    { number: 32, color: "black" },
    { number: 33, color: "red" },
    { number: 34, color: "black" },
    { number: 35, color: "red" },
    { number: 36, color: "black" },
  ];

  const primeraLinea = numbers.slice(1, 13);
  const segundaLinea = numbers.slice(13, 25);
  const terceraLinea = numbers.slice(25, 37);

  const renderRow = (row) => {
    return row.map((cell) => (
      <td
        key={cell.number}
        style={{
          backgroundColor: cell.color,
          color: "white",
          textAlign: "center",
          padding: "50px",
          border: "1px solid #ccc",
        }}
      >
        {cell.number}
      </td>
    ));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simulación de Ruleta</h2>
      <table
        style={{
          borderCollapse: "collapse",
          margin: "0 auto",
          width: "80%",
        }}
      >
        <thead>
          <tr>
            <th
              colSpan={13}
              style={{
                textAlign: "center",
                backgroundColor: "#333",
                color: "white",
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              Números
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              rowSpan={3}
              style={{
                backgroundColor: "green",
                color: "white",
                textAlign: "center",
                padding: "30px",
                border: "1px solid #ccc",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              0
            </td>
            {renderRow(primeraLinea)}
          </tr>
          <tr>{renderRow(segundaLinea)}</tr>
          <tr>{renderRow(terceraLinea)}</tr>
        </tbody>
      </table>
      <Button variant="contained">Pulsa para decirme el número</Button>
    </div>
  );
};

export default RouletteTable;
