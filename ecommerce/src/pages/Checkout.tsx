import { use } from "react";
import { CartContext } from "../context/CartContext"
import CartSummary from "../components/CartSummary";
import CheckoutForm from "../components/CheckoutForm";
import { useCheckout } from "../hooks/useCheckout";

export default function Checkout() {
    const { items, cartTotal } = use(CartContext);
    const { mutateAsync: submitCheckout } = useCheckout();

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

    async function handleCheckout(formData: FormData) {
        try {
            const orderData = {
                userId: 1,
                date: new Date().toISOString(),
                products: items,
                customer: {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    address: formData.get('address'),
                    city: formData.get('city'),
                    zipCode: formData.get('zipCode'),
                },
            };
            await submitCheckout(orderData);
        } catch (error) {
            console.error(`Checkout failed: ${error}`);
            alert("There was an error processing your order. Please try again.");
        }
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <CheckoutForm onSubmit={handleCheckout} />
                <CartSummary items={items} cartTotal={cartTotal} />
            </div>
        </div>
    );
}