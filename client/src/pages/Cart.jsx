import React from "react";
import CartMainSec from "../components/CartMainSec";
import ApplyCoupon from "../components/ApplyCoupon";
function Cart() {
    return (
        <>
            <main className="p-20  flex flex-col gap-5">
                <CartMainSec />
                <ApplyCoupon />
            </main>
        </>
    );
}

export default Cart;
