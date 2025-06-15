import { NavLink } from "react-router";
import checkoutIcon from "../assets/checkout.png";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <NavLink to="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-lg font-bold">TrendyMart</h1>
            </NavLink>
            <NavLink to="/cart" className="p-2 hover:bg-blue-700 transition-colors rounded-full">
                <img src={checkoutIcon} alt="Checkout" className="h-6 w-6"/>
            </NavLink>
        </header>
    )
}