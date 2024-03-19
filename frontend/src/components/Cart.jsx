import { useEffect, useState } from "react";
import { useCart } from "../context/useCart";
import CartItems from "./CartItems";

function Cart() {
    const cart = useCart();
    const [total, setTotal] = useState(0);


    useEffect(() => {
        let sum = 0;
        cart.items.forEach((item) => {
            sum += item.newprice * item.quantity;
        });
        setTotal(sum);
    }, [cart.items]);

    const removeFromCart = (itemName) => {
        const updatedItems = cart.items.filter((item) => item.name !== itemName);
        cart.setItems(updatedItems);
    };

    return (
        <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
            <h2 className="display-5 my-4">Cart {cart.items.length}</h2>
            <div>
                {cart.items.map((item) => (
                    <CartItems key={item.name} data={item} removeFromCart={removeFromCart} total={total} setTotal={setTotal}></CartItems>
                ))}
            </div>
            <div className="total">
                <h4>Total: ₹{total}</h4>
            </div>
        </div>
    );
}

export default Cart;