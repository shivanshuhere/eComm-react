import React from "react";

function ApplyCoupon() {
    return (
        <>
            <form className="flex gap-3">
                <input
                    type="text"
                    className="rounded-sm border-2 px-5 py-2 placeholder:text-gray-400"
                    placeholder="Coupon Code"
                />
                <button
                    className="rounded-sm px-5 py-2 bg-red-400 hover:bg-red-600 text-white "
                    type="submit"
                >
                    Apply Coupon
                </button>
            </form>
        </>
    );
}

export default ApplyCoupon;
