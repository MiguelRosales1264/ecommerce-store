import { useMutation } from "@tanstack/react-query";
import { productsService } from "../services/ProductService";

export interface OrderData {
    userId: number;
    date: string;
    products: { id: string; quantity: number }[];
    customer: {
        name: string;
        email: string;
        address: string;
        city?: string;
        zipCode?: string;
    };
}

export const useCheckout = () => {
    return useMutation({
        mutationFn: (orderData: OrderData) => productsService.createOrder(orderData),
    });
}
