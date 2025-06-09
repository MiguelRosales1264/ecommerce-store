import { httpClient } from "./httpClient";
import { HttpService } from "./HttpService";

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
}

export const productsService = new ProductsService();