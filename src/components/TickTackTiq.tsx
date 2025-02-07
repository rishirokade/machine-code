import { useState } from "react";

const initialCellValue = Array(9).fill("");

const probability = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 6],
];
const TickTackTiq = () => {
    const [isXTurn, setIsXTurn] = useState(true);
    const [massage, setMassage] = useState("x Turn");
    const [box, setBox] = useState(initialCellValue);

    const isResult = (currantBox: number[]) => {
        for (let i = 0; probability.length > i; i++) {
            const [first, second, third] = probability[i];
            if (
                currantBox[first] &&
                currantBox[first] === currantBox[second] &&
                currantBox[first] === currantBox[third]
            ) {
                return currantBox[first];
            }
        }
        return null;
    };

    const handleClick = (index: number) => {
        if (isResult(box)) {
            return;
        }
        const tempArray = [...box];
        tempArray[index] = isXTurn ? "X" : "O";
        const isWinner = isResult(tempArray);

        if (isWinner) {
            setMassage("winner is" + isWinner);
        } else {
            setMassage(`its ${isXTurn ? "X" : "O"} turn`);
        }
        setIsXTurn(!isXTurn);
        setBox(tempArray);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEventDelegation = (e: any) => {
        if (e?.target?.tagName === "BUTTON") {
            const index = Number(e?.target?.dataset?.cellNumber);
            handleClick(index);
        }
    };
    return (
        <div>
            <span>{massage}</span>
            <button
                onClick={() => {
                    setBox(initialCellValue);
                    setMassage("its X turn");
                }}
                style={{
                    marginLeft: "8px",
                }}
            >
                RESET
            </button>
            <div
                style={{
                    display: "grid",
                    width: "160px",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "4px",
                    marginTop: "8px",
                }}
                onClick={handleEventDelegation}
            >
                {box.map((b, index) => {
                    return (
                        <button
                            data-cell-number={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#d8d8e4",
                                cursor: "pointer",
                            }}
                            disabled={b}
                        >
                            {b}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default TickTackTiq;
