import { useEffect, useState } from "react";
import "./App.css";
import { Pagination } from "./components/Pagination";
import { useFetchProduct } from "./hooks/use-FetchProduct";

const PER_PAGE = 10;
function App() {
    const { data: productData, loading } = useFetchProduct();

    const [currPage, setCurrPage] = useState(0);

    const handlePageSelect = (pageNumber: number) => {
        setCurrPage(pageNumber);
    };

    const startItem = currPage * PER_PAGE;
    const endItem = currPage * PER_PAGE + PER_PAGE;

    if (loading) {
        return <span>Fetching data...</span>;
    }

    return (
        <div className="pageBox">
            <Pagination
                PER_PAGE={PER_PAGE}
                currPage={currPage}
                handlePageSelect={handlePageSelect}
                totalRecord={productData.length}
            />
            <div className="product-container">
                {productData.slice(startItem, endItem).map((p) => {
                    return (
                        <div key={p.id} className="product-card">
                            <img
                                className="product-img"
                                src={p?.images?.[0]}
                                alt="product-img"
                            />
                            <span className="product-title">{p.title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
