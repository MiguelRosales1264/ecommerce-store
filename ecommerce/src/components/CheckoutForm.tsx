import { useFormStatus } from "react-dom";

interface CheckoutFormProps {
    onSubmit: () => void;
}

export default function ChekcoutForm({ onSubmit }: CheckoutFormProps) {
    const { pending } = useFormStatus();

    return (
        <form action={onSubmit} className='space-y-4'>
            <div>
                <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Full Name
                </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border rounded-md" 
                    required 
                />
            </div>
            <div>
                <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email
                </label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md" 
                    required 
                />
            </div>
            <div>
                <label 
                    htmlFor="address" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Address
                </label>
                <input 
                    type="text" 
                    id="address" 
                    name="address"
                    placeholder="Address"
                    className="w-full px-3 py-2 border rounded-md" 
                    required 
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label 
                        htmlFor="city" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        City
                    </label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city"
                        placeholder="City"
                        className="w-full px-3 py-2 border rounded-md" 
                        required 
                    />
                </div>
                <div>
                    <label 
                        htmlFor="zipCode" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Zip Code
                    </label>
                    <input 
                        type="text" 
                        id="zipCode" 
                        name="zipCode"
                        placeholder="Zip Code"
                        className="w-full px-3 py-2 border rounded-md" 
                        required 
                    />
                </div>
            </div>

            <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400"
                disabled={pending}
            >
                {pending ? "Processing order..." : "Place Order"}
            </button>
        </form>
    );
}