import { NavLink } from "react-router";
import checkoutIcon from "../assets/checkout.png";
import { use } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
    const { cartCount } = use(CartContext);

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <NavLink to="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-lg font-bold">TrendyMart</h1>
            </NavLink>
            <NavLink 
                to="/cart" 
                className="p-2 hover:bg-blue-700 transition-colors rounded-full relative">
                <img src={checkoutIcon} alt="Checkout" className="h-6 w-6"/>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                    </span>
                )}
            </NavLink>
        </header>
    )
}