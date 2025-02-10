import { useState } from "react";

export const Stopwatch = () => {
    const [timer, setTimer] = useState(360);
    const [timerId, setTimerId] = useState<ReturnType<typeof setInterval>>();

    const startTimer = () => {
        pauseTimer();
        const tid = setInterval(() => {
            setTimer((prev) => {
                if (prev && prev > 0) {
                    return prev - 1;
                }
                clearInterval(timerId);
                return prev;
            });
        }, 1000);
        setTimerId(tid);
    };
    const pauseTimer = () => {
        clearInterval(timerId);
    };
    const resetTimer = () => {
        pauseTimer();
        setTimer(360);
    };

    const format = () => {
        const minute = Math.floor(timer / 60);
        const second = timer % 60;
        return `${String(minute).padStart(2, "0")} : ${String(second).padStart(
            2,
            "0"
        )}`;
    };

    return (
        <div>
            {format()}
            <button onClick={startTimer}>start/resume</button>
            <button onClick={pauseTimer}>pause</button>
            <button onClick={resetTimer}>reset</button>
        </div>
    );
};
