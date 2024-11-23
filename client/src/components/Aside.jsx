import { Link } from "react-router-dom";

function Aside({ headings, links }) {
    return (
        <>
            {headings?.map((heading, index) => {
                return (
                    <div key={Date.now() + index} className="">
                        <h1 className="text-2xl font-bold">{heading}</h1>
                        {links[index]?.map((link) => {
                            return (
                                <Link
                                    key={Date.now()}
                                    to={link.link}
                                    className=" text-lg font-semibold"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
}
export default Aside;
