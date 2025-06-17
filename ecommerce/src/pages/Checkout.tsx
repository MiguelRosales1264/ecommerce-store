import { use } from "react";
import { CartContext } from "../context/CartContext"
import CartSummary from "../components/CartSummary";

export default function Checkout() {
    const { items, cartTotal } = use(CartContext);

    if (items.length === 0) {
        return (
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Your Cart is Empty</h1>
                <div className="bg-white p-6 rounded shadow">
                    <p className="text-gray-600">Add some items to your cart before checking out</p>
                </div>
            </div>
        );
    }

    function handleCheckout() {}


    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {/* <CheckoutForm onSubmit={handleCheckout} /> */}
                <CartSummary items={items} cartTotal={cartTotal} />
            </div>
        </div>
    );
}