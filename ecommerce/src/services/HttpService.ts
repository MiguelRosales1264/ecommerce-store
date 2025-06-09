import { httpClient } from './httpClient';

export class HttpService {
    client: typeof httpClient;
    constructor(client: typeof httpClient) {
        this.client = client;
    }

    async get(url: string, config = {}) {
        try {
            const { data } = await this.client.get(
                url, config
            );
            return data; 
        } catch (error) {
            console.error("Error fetching products: ", error);
            throw error;
        }
    }
}