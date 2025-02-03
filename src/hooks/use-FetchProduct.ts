import { useEffect, useState } from "react";

type ProductType = {
    id: number;
    title: string;
    images: string[];
}[];
export const useFetchProduct = () => {
    const [productData, setProductData] = useState<ProductType>([]);
    const [loading, setLoading] = useState(false)
    const fetchProductData = async () => {
        try {
            setLoading(true);
            const data = await fetch("https://dummyjson.com/product?limit=500");
            const userData = await data.json();
            setProductData(userData?.products);
        } catch (_error) {
            console.log(_error);
            setProductData([]);
        } finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        fetchProductData();
    }, []);
    return { data: productData, loading }
}