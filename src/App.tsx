import "./App.css";
import { ProductVirtualization } from "./components/virtualization";

function App() {
    return (
        <div className="pageBox">
            {/* <FetchProductUsingPagination /> */}
            {/* <FetchProductUsingThrottling /> */}
            <ProductVirtualization />
        </div>
    );
}

export default App;
