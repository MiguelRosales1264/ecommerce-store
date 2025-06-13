import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/ProductService";

export const useProduct = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => productsService.getProduct(id),
    });
}