import { use } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";

type CartItem = {
    title: string,
    id: number,
    quantity: number,
    image: string,
    price: number,
};

export default function Cart() {
    const { items, removeItem, updateQuantity, cartTotal } = use(CartContext);

    return (
        <div className="p-8 max-w-4xl mx-auto"> 
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="divide-y divide-gray-200">
                    { items.map((item: CartItem) => (
                        <div key={item.id} className="p-6 flex items-center gap-6">
                            <img
                                src={item.image} 
                                alt={item.title} 
                                className="w-24 h-24 object-contain" 
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-grey-600">${item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-1 rounded-md hover:bg-gray-100"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button className="p-1 rounded-md hover:bg-gray-100"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                                <button className="text-red-600 hover:text-red-800 transition-colors"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="p-6 bg-gray-50">
                        <div className='flex justify-between items-center mb-6'>
                            <span className="text-lg font-semibold">Total: </span>
                            <span className="text-2xl font-bold">${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-end">
                        <Link to='/checkout'
                            className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
                        >
                            Proceed to checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}