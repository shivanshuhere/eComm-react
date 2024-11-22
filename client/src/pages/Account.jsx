import Aside from "../components/Aside.jsx";

const headings = ["Manage My Account", "My Orders", "My WishList"];
const links = [
    [
        {
            name: "My Profile",
            link: "/profile",
        },
        {
            name: "Address Book",
            link: "/address",
        },
        {
            name: "My Payment Option",
            link: "/payment",
        },
    ],
    [
        {
            name: "My Return",
            link: "/return",
        },
        {
            name: "My Cancellation",
            link: "/cancel",
        },
    ],
];
function Account() {
    return (
        <>
            <section className="h-full w-full flex justify-between">
                <aside>
                    <Aside headings={headings} links={links} />
                </aside>
                <main>something</main>
            </section>
        </>
    );
}

export default Account;
