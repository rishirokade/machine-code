import { useState } from "react";

export const StarRatingComponent = () => {
    const [selectedStar, setSelectedStar] = useState<number | null>(null);
    const [hoveredStar, setHoveredStar] = useState<number | null>(null);

    return (
        <div>
            {Array(5)
                .fill("")
                .map((_star, index) => {
                    return (
                        <span
                            style={{
                                color:
                                    hoveredStar && hoveredStar >= index
                                        ? "#adad4c"
                                        : selectedStar && selectedStar >= index
                                        ? "yellow"
                                        : "",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setSelectedStar(index);
                            }}
                            onMouseEnter={() => {
                                setHoveredStar(index);
                            }}
                            onMouseLeave={() => {
                                setHoveredStar(null);
                            }}
                        >
                            &#x2605;
                        </span>
                    );
                })}
        </div>
    );
};
