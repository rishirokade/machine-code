import { useThrottlingFetchProduct } from "../../hooks/use-ThrottlingFetchProduct";

const FetchProductUsingThrottling = () => {
    const { data: productData, loading } = useThrottlingFetchProduct({
        delay: 200,
    });

    return (
        <div className="pageBox">
            <div className="product-container">
                {productData.map((p) => {
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
            {loading && <div>Fetching data...</div>}
        </div>
    );
};

export default FetchProductUsingThrottling;
