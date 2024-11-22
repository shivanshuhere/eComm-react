import { Link } from "react-router-dom";

function Aside({ headings, links }) {
    // headings?.map((heading, index) => {
    //     return (
    //         <div key={index}>
    //             <h1 className="text-2xl font-bold">{heading}</h1>
    //             {links[index]?.map((link) => {
    //                 return (
    //                     <Link
    //                         key={Date.now()}
    //                         to={link.link}
    //                         className=" text-lg font-semibold"
    //                         >
    //                         {link.name}
    //                     </Link>
    //                 );
    //             })}
    //         </div>
    //     );
    // });
    console.log("headings", headings);
    console.log("links", links);
    return (
        <>
            {headings?.map((heading, index) => {
                <h1 className="text-2xl font-bold">{heading}</h1>;
            })}
        </>
    );
}

export default Aside;
