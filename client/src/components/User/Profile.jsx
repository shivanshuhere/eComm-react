import React from "react";

function Profile() {
    const { firstName, lastName, email, address, password } = "";
    return (
        <>
            <section className="w-full h-full p-20 px-30  pt-0 ">
                <h2 className=" text-xl font-bold mb-5">Edit Your Profile</h2>
                <form className="grid grid-cols-2 gap-7">
                    <label className="flex flex-col">
                        First Name{" "}
                        <input
                            className="px-4 py-2 border rounded-sm bg-slate-100"
                            placeholder={firstName || "Alax"}
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        Last Name{" "}
                        <input
                            className="px-4 py-2 border rounded-sm bg-slate-100"
                            placeholder={lastName || "Adams"}
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        Email{" "}
                        <input
                            className="px-4 py-2 border rounded-sm bg-slate-100"
                            placeholder={email || "alax@gmail.com"}
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        Address{" "}
                        <input
                            className="px-4 py-2 border rounded-sm bg-slate-100"
                            placeholder={address || "london, uk"}
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col col-span-2 gap-2">
                        Password Change
                        <input
                            className="px-4 py-2 border rounded-sm bg-slate-100"
                            placeholder={"old password"}
                            type="text"
                        />
                        <input
                            className="px-4 py-2 border rounded-sm bg-slate-100"
                            placeholder={"new password"}
                            type="text"
                        />
                        <input
                            className="px-4 py-2 border rounded-sm bg-slate-100"
                            placeholder={"new password again"}
                            type="text"
                        />
                    </label>
                    <div className="col-span-2 flex justify-end gap-10">
                        <button
                            className="hover:bg-slate-200 px-5 py-3 border rounded-sm"
                            type="reset"
                        >
                            Cancel
                        </button>
                        <button
                            className="hover:bg-red-600 px-5 py-3 border rounded-sm bg-red-400 text-white"
                            type="submit"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Profile;
