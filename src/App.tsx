import "./App.css";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { ThemeSwitcher } from "./components/theme/ThemeSwitcher";

function App() {
    return (
        <ThemeProvider>
            {/* <div>
                <h1 style={{ textAlign: "center" }}>Analog Clock</h1>
                <AnalogClock />
            </div> */}
            <ThemeSwitcher></ThemeSwitcher>
        </ThemeProvider>
    );
}

export default App;
