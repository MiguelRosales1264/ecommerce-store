import { useMutation } from "@tanstack/react-query";
import { productsService } from "../services/ProductService";

export interface OrderData {
    userId: number;
    date: string;
    products: { id: string; quantity: number }[];
    customer: {
        name: FormDataEntryValue | null;
        email: FormDataEntryValue | null;
        address: FormDataEntryValue | null;
        city?: FormDataEntryValue | null;
        zipCode?: FormDataEntryValue | null;
    };
}

export const useCheckout = () => {
    return useMutation({
        mutationFn: (orderData: OrderData) => productsService.createOrder(orderData),
    });
}
