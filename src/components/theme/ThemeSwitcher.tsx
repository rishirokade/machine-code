import { useContext } from "react";
import { ThemeProviders } from "./ThemeProvider";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeProviders);
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={theme}
                    onChange={() => setTheme?.((e) => !e)}
                />
                Dark Mode
            </label>
        </div>
    );
};
