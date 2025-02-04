import { FixedSizeList } from "react-window";
import { useFetchProduct } from "../../hooks/use-FetchProduct";
import { Product } from "../Product";

export const ProductVirtualization = () => {
    const { data: productData, loading } = useFetchProduct({
        limit: 500,
    });

    // Loading state
    if (loading) {
        return <span>Fetching data...</span>;
    }

    // Row render function for react-window
    const Row = ({
        index,
        style,
    }: {
        index: number;
        style: React.CSSProperties;
    }) => {
        const product = productData[index];
        return (
            <div style={style}>
                <Product key={product.id} {...product} />
            </div>
        );
    };

    return (
        <div className="product-container">
            <FixedSizeList
                height={700} // Height of the FixedSizeList container
                itemCount={productData.length} // Total number of items
                itemSize={200} // Height of each item (Product component)
                width="100%" // Width of the container
            >
                {Row}
            </FixedSizeList>
        </div>
    );
};
