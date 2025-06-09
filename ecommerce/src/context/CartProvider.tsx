import { useState } from "react";
import { CartContext } from "./CartContext";

type CartItem = { id: string; quantity: number };

interface CartProviderProps {
    children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: { id: string; }) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === product.id);
            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                );
            }

            return [...currentItems, {...product, quantity: 1 }];
        })
    }

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    );
}