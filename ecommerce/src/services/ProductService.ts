import { httpClient } from "./httpClient";
import { HttpService } from "./HttpService";
import type { OrderData } from "../hooks/useCheckout";

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
}

export interface ProductFilters {
    category?: string;
    sort?: string;
}

class ProductsService extends HttpService {
    constructor() {
        super(httpClient)
    }

    async getProducts(filters: ProductFilters = {}) {
        let url = '/products';
        if (filters.category) {
            url += `/category/${filters.category}`;
        }
        if(filters.sort) {
            url += `?sort=${filters.sort}`;
        }

        return this.get(url)
    }

    async getCategories() {
        return this.get('products/categories')
    }
    
    async getProduct(id: string) {
        return this.get(`/products/${id}`);
    }

    async createOrder(orderData: OrderData) {
        // return this.post('/carts', orderData);
        
        /* The line `return this.post('/carts', orderData as unknown as JSON);` is attempting to cast
        the `orderData` object to type `JSON` before sending it as a POST request to the '/carts'
        endpoint. */
        return this.post('/carts', orderData as unknown as JSON);
    }
}

export const productsService = new ProductsService();