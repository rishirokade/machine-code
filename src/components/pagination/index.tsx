import { useState } from "react";
import { useFetchProduct } from "../../hooks/use-FetchProduct";
import { Pagination } from "./Pagination";
import { Product } from "../Product";

const PER_PAGE = 10;
const FetchProductUsingPagination = () => {
    const { data: productData, loading } = useFetchProduct({});

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
                    return <Product key={p.id} {...p} />;
                })}
            </div>
        </div>
    );
};

export default FetchProductUsingPagination;
