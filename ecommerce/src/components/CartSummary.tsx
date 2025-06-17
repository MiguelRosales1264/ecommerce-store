
type CartItem = {
    id: number;
    title: string;
    price: number;
};

interface CartSummaryProps {
    items: CartItem[];
    cartTotal: number;
}

export default function CartSummary({ items, cartTotal }: CartSummaryProps) {
    return (
        <div></div>
    )
}