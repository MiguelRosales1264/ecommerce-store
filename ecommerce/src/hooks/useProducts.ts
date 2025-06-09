import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/ProductService";

export const useProducts = (filters: { category?: string, sort?: string }) => {
    return useQuery({
        queryKey: ['products', filters],
        queryFn: () => productsService.getProducts(filters),
    });
}