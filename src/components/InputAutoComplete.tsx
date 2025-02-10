import { useEffect, useRef, useState } from "react";
import { dummyData } from "./utils";

export const InputAutoComplete = () => {
    const [input, setInput] = useState("");
    const [suggestionData, setSuggestionData] = useState<typeof dummyData>([]);
    const [openBox, setOpenBox] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (input) {
            setOpenBox(true);
        } else {
            setOpenBox(false);
        }
        const filteredData = dummyData.filter((e) => e.title.includes(input));
        setSuggestionData(filteredData);
    }, [input]);

    useEffect(() => {
        const handleListener = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpenBox(false);
            }
        };
        document.documentElement.addEventListener("click", handleListener);
        return () => {
            document.documentElement.removeEventListener(
                "click",
                handleListener
            );
        };
    }, []);

    return (
        <div>
            <div
                ref={ref}
                style={{
                    border: "1px solid #ccc",
                    width: "222px",
                    padding: "8px",
                    borderRadius: "8px",
                    position: "relative",
                }}
            >
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    style={{
                        border: "none",
                        outline: "none",
                    }}
                    placeholder="search here..!"
                    type="text"
                ></input>
                <button>search</button>
                {openBox && (
                    <div
                        style={{
                            position: "absolute",
                            left: "0%",
                            top: "110%",
                            width: "222px",
                            height: "200px",
                            border: "1px solid #ccc",
                            padding: "8px",
                            overflowY: "auto",
                            borderRadius: "8px",
                            backgroundColor: "white",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        {!!input &&
                            !!suggestionData.length &&
                            suggestionData.map((s) => {
                                return (
                                    <div
                                        style={{
                                            borderBottom: "1px solid #ccc",
                                            marginTop: "4px",
                                            padding: "4px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            setInput(s.title);
                                            setOpenBox(false);
                                        }}
                                    >
                                        <Highlighter
                                            highlight={input}
                                            text={s.title}
                                        ></Highlighter>
                                    </div>
                                );
                            })}
                        {!suggestionData.length && (
                            <span
                                style={{
                                    color: "#ccc",
                                }}
                            >
                                no match found
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const Highlighter: React.FC<{ text: string; highlight: string }> = ({
    highlight,
    text,
}) => {
    const part = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
        <>
            {part.map((p) => {
                return (
                    <span
                        style={{
                            color:
                                p.toLowerCase() === highlight.toLowerCase()
                                    ? "blue"
                                    : "inherit",
                        }}
                    >
                        {p}
                    </span>
                );
            })}
        </>
    );
};
