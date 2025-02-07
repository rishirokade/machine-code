import "./App.css";
import AnalogClock from "./components/AnalogClock";

function App() {
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}>Analog Clock</h1>
                <AnalogClock />
            </div>
            {/* <TrafficSignal />
            <TickTackTiq /> */}
        </>
    );
}

export default App;
