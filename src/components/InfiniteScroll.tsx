import { useEffect, useState } from "react";
import { dummyData } from "./utils";

export const InfiniteScroll = () => {
    const [data, setData] = useState(dummyData.slice(0, 20));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (dummyData.length <= data.length) return;
            setLoading(true);
            if (
                window.innerHeight + document.documentElement.scrollTop + 50 >
                document.documentElement.offsetHeight
            ) {
                const timer = setTimeout(() => {
                    if (loading && timer) {
                        clearTimeout(timer);
                        return;
                    }
                    const length = data.length;
                    const newArray = dummyData.slice(length, length + 20);
                    setData((prev) => [...prev, ...newArray]);
                    setLoading(false);
                }, 2000);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [data]);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            {data.map((d, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            width: "750px",
                            border: "2px groove #9d3f3f",
                            padding: "20px",
                        }}
                    >
                        <span
                            style={{
                                border: "1px groove #278aa3",
                            }}
                        >
                            {d.id}/ {d.title}
                        </span>
                        <br></br>
                        <span>{d.body}</span>
                    </div>
                );
            })}
            {loading && <span> loading...</span>}
        </div>
    );
};
