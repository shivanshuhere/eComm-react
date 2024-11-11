import React from "react";

function AlertBar() {
  return (
    <>
      <div className="w-full h-10 bg-black text-white text-center flex items-center justify-center">
        <p className="text-sm">Exclusive Sale</p>
        <select className="absolute top-2 right-4 text-sm  text-white bg-black pr-6">
          <option defaultChecked="true">English</option>
          <option>Spanish</option>
        </select>
      </div>
    </>
  );
}

export default AlertBar;
