import { useEffect, useRef, useState } from "react";

type ProductType = {
    id: number;
    title: string;
    images: string[];
}[];

// Hook to fetch products with throttling and infinite scrolling
export const useThrottlingFetchProduct = ({
    initialLimit = 20,
    incrementBy = 20,
    delay = 2000,
}: {
    initialLimit?: number;
    incrementBy?: number;
    delay: number;
}) => {
    const lastCallTime = useRef(0);
    const currentLimit = useRef(initialLimit);
    const [productData, setProductData] = useState<ProductType>([]);
    const [loading, setLoading] = useState(true);

    // Fetch product data
    const fetchProductData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=${currentLimit.current}`
            );
            const userData = await response.json();
            setProductData(userData?.products);
        } catch (error) {
            console.error(error);
            setProductData([]);
        } finally {
            setLoading(false);
        }
    };

    // Throttling function
    const throttling = (cb: () => void) => {
        return () => {
            const now = Date.now();
            if (now - lastCallTime.current >= delay) {
                lastCallTime.current = now;
                cb();
                currentLimit.current += incrementBy; // Increment the limit dynamically
            }
        };
    };

    useEffect(() => {
        const throttledFetch = throttling(fetchProductData);

        // Initial fetch
        throttledFetch();

        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.documentElement.offsetHeight - 100;

            if (scrollPosition >= threshold) {
                throttledFetch();
            }
        };

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup scroll listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [delay, incrementBy]); // Dependencies for `useEffect`

    return { data: productData, loading };
};
