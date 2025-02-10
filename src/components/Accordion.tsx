import { useState } from "react";

const arrayData = [
    {
        title: "Can you accept all credit cards",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
    },
    {
        title: "Can you accept all credit cards",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
    },
    {
        title: "Can you accept all credit cards",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
    },
];

export const Accordion = () => {
    const [openContentIndex, setOpenContentIndex] = useState(0);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
            }}
        >
            {arrayData.map((data, index) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "12px",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setOpenContentIndex(index);
                        }}
                    >
                        <span
                            style={{
                                border: "1px groove black",
                                padding: "8px",
                            }}
                        >
                            {data.title}
                        </span>
                        {openContentIndex === index && (
                            <text>{data.content}</text>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
