import { createContext, useEffect, useState } from "react";

export const ThemeProviders = createContext<{
    theme?: boolean;
    setTheme?: React.Dispatch<React.SetStateAction<boolean>>;
}>({});

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && savedTheme === "dark") return true;
        return false;
    });

    useEffect(() => {
        const th = theme ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", th);
        localStorage.setItem("theme", th);
    }, [theme]);

    return (
        <ThemeProviders.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeProviders.Provider>
    );
};
