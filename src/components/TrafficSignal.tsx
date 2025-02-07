import { useState, useEffect } from "react";

const singleColor = ["red", "yellow", "green"];
const TrafficSignal = () => {
    const [single, setSingle] = useState<string | undefined>();
    const [colorCode, setColorCode] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const temp = colorCode === 2 ? 0 : colorCode + 1;
            setColorCode(temp);
            setSingle(singleColor[colorCode]);
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, [colorCode]);

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    height: "80px",
                    width: "20px",
                    backgroundColor: "black",
                    padding: "5px",
                }}
            >
                {singleColor.map((e) => {
                    return (
                        <div
                            key={e}
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: single === e ? e : "black",
                                borderRadius: "50%",
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrafficSignal;
