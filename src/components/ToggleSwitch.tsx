import { useState } from "react";

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prev) => !prev);
    };

    return (
        <div>
            <div
                role="switch" // ARIA role for accessibility
                aria-checked={isOn} // Indicates whether the switch is on or off
                tabIndex={0} // Makes the div focusable via keyboard
                onClick={handleToggle}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        handleToggle(); // Allows toggling with "Enter" or "Space" keys
                        e.preventDefault(); // Prevent default scrolling for "Space"
                    }
                }}
                style={{
                    width: "60px",
                    height: "24px",
                    backgroundColor: isOn ? "green" : "gray",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    padding: "2px 4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    outline: "none",
                }}
            >
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        transform: isOn ? "translateX(36px)" : "translateX(0)",
                        transition: "transform 0.3s ease",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;
