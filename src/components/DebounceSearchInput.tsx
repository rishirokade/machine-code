import { useEffect, useState } from "react";

export const DebounceSearchInput = () => {
    const [value, setValue] = useState("");

    const [newValue, setNewValue] = useState("");

    useEffect(() => {
        console.log(newValue);
    }, [newValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNewValue(value);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return (
        <div>
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                type="text"
            />
        </div>
    );
};
