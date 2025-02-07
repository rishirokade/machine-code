import { useEffect, useState } from "react";

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            const noew = new Date();
            setTime(noew);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const second = time.getSeconds() * 6;
    const minute = time.getMinutes() * 6;
    const hours = time.getHours() * 30;

    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                backgroundColor: "gray",
            }}
        >
            <div
                style={{
                    width: "8px",
                    height: "8px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "bottom center",
                    transform: `translate(-50%, -50%)`,
                    borderRadius: "50%",
                    backgroundColor: "black",
                }}
            />

            {/* second */}
            <div
                style={{
                    width: "4px",
                    height: "45%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "bottom center",
                    transform: `translate(-50%, -100%) rotate(${second}deg)`,
                    borderRadius: "50%",
                    backgroundColor: "red",
                }}
            />

            <div
                style={{
                    width: "4px",
                    height: "35%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "bottom center",
                    transform: `translate(-50%, -100%) rotate(${minute}deg)`,
                    borderRadius: "50%",
                    backgroundColor: "green",
                }}
            />

            <div
                style={{
                    width: "4px",
                    height: "25%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "bottom center",
                    transform: `translate(-50%, -100%) rotate(${hours}deg)`,
                    borderRadius: "50%",
                    backgroundColor: "white",
                }}
            />
        </div>
    );
};

export default AnalogClock;
