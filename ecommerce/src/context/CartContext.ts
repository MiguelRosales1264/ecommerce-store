import { createContext } from "react";

export type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
};

interface CartContextType {
    items: CartItem[];
    cartTotal: number;
    addItem: (item: { id: string; quantity: number }) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

const defaultCartContext: CartContextType = {
    items: [],
    cartTotal: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
};

export const CartContext = createContext(defaultCartContext);