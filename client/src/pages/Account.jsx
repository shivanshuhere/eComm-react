import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";
const headings = ["Manage My Account", "My Orders", "My WishList"];
const links = [
    [
        {
            name: "My Profile",
            link: "/account/profile",
        },
        {
            name: "Address Book",
            link: "/account/address",
        },
        {
            name: "My Payment Option",
            link: "/account/payment",
        },
    ],
    [
        {
            name: "My Return",
            link: "/account/return",
        },
        {
            name: "My Cancellation",
            link: "/account/cancel",
        },
    ],
];
function Account() {
    return (
        <>
            <section className="h-full w-full flex justify-between p-10">
                <aside className="flex gap-6 flex-col">
                    <Aside headings={headings} links={links} />
                </aside>
                <Outlet />
            </section>
        </>
    );
}

export default Account;
