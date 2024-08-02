import { useEffect, useState } from "react";

export default function AnyColor() {
  const [typeOfColor, setTypeofColor] = useState("");
  const [color, setColor] = useState("");

  function useRandomColor(length: number) {
    return Math.floor(Math.random() * length);
  }

  function GenerateHex() {
    let hex: (number | string)[] = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[useRandomColor(hex.length)];
    }
    setColor(hexColor);
  }

  function GenerateRgb() {
    let r = useRandomColor(256);
    let g = useRandomColor(256);
    let b = useRandomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") GenerateHex();
    else GenerateRgb();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <button
          onClick={() => {
            setTypeofColor("hex");
          }}
          style={{
            position: "absolute",
            top: "275px",
            left: "500px",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            height: "40px",
            width: "175px",
            fontFamily: "monospace",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Generate HEX color
        </button>

        <button
          onClick={() => {
            setTypeofColor("rgb");
          }}
          style={{
            position: "absolute",
            top: "275px",
            left: "700px",
            height: "40px",
            width: "175px",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            fontFamily: "monospace",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Generate Rgb color
        </button>

        <button
          style={{
            position: "absolute",
            top: "275px",
            left: "900px",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            height: "40px",
            width: "175px",
            fontFamily: "monospace",
            fontSize: "15px",
            fontWeight: "bold",
          }}
          onClick={typeOfColor === "hex" ? GenerateHex : GenerateRgb}
        >
          Generate Random color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontFamily: "monospace",
          fontSize: "70px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
