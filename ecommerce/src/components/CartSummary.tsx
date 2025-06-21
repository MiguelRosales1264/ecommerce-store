import type { CartItem } from "../context/CartContext";

interface CartSummaryProps {
    items: CartItem[];
    cartTotal: number;
}

export default function CartSummary({ items, cartTotal }: CartSummaryProps) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
                {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                        <span>{item.title} (x{item.quantity})</span>
                        <span>${item.price}</span>
                    </div>
                ))}
                <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Total:</span>
                        <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}