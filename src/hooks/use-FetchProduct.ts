import { useEffect, useState } from "react";

export type ProductType = {
    id: number;
    title: string;
    images: string[];

};
export const useFetchProduct = ({ limit, skip }: {
    limit?: number, skip?: number
}) => {
    const [productData, setProductData] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false)
    const fetchProductData = async () => {
        try {
            setLoading(true);
            const data = await fetch(`https://dummyjson.com/products?limit=${limit ? limit : 500}&skip=${skip ? skip : 0}`);
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