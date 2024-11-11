import React from "react";

function SideMenu() {
  return (
    <>
      <div className="w-[1/3] flex justify-center items-center my-6 bg-transparent text-black">
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Woman</a>
          </li>
          <li>
            <a href="#">Man</a>
          </li>
          <li>
            <a href="#">Electronic</a>
          </li>
          <li>
            <a href="#">Home & LifeStyle</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
