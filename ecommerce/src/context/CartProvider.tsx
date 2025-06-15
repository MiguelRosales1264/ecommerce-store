import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

type CartItem = { 
    id: number; 
    quantity: number,
    title: string,
    image: string,
    price: number,
};

interface CartProviderProps {
    children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [items, setItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items))
    }, [ items ])

    const addItem = (product: { id: number }) => {
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
        });
    };

    const removeItem = (productId: number) => {
        setItems((currentItems) => 
            currentItems.filter((item) => item.id !== productId)
        );
    };

    const updateQuantity = (productId: number, quantity: number) => {
        setItems((currentItems) => 
            currentItems.map((item) => 
                item.id === productId 
                    ? { ...item, quantity: Math.max(0, quantity) } 
                    : item
            )
            .filter((item) => item.quantity > 0)
        );
    }

    let cartCount = 0;
    for (const item of items) {
        cartCount += item.quantity;
    }

    let cartTotal = 0;
    for (const item of items) {
        const itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;
    }

    return (
        <CartContext.Provider 
            value={{ 
                items, 
                addItem, 
                removeItem, 
                updateQuantity, 
                cartCount, 
                cartTotal,
            }}>
            {children}
        </CartContext.Provider>
    );
}