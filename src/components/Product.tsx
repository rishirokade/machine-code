import { ProductType } from "../hooks/use-FetchProduct";

export const Product = (p: ProductType) => {
    return (
        <div className="product-card">
            <img
                className="product-img"
                src={p?.images?.[0]}
                alt="product-img"
            />
            <span className="product-title">{p.title}</span>
        </div>
    );
};
