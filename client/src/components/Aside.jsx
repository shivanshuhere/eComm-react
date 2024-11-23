import { Link } from "react-router-dom";

function Aside({ headings, links }) {
    return (
        <>
            {headings?.map((heading, index) => {
                return (
                    <ul key={Date.now() + index} className="flex flex-col">
                        <h1 className="text-2xl font-bold">{heading}</h1>
                        {links[index]?.map((link) => {
                            return (
                                <Link
                                    key={Date.now()}
                                    to={link.link}
                                    className=" text-lg font-semibold hover:text-red-300 "
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </ul>
                );
            })}
        </>
    );
}
export default Aside;
