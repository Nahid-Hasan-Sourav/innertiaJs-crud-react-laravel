import { Link } from "@inertiajs/react";
import React from "react";

const SidebarLayout = ({ children }) => {
    return (
        <div className="flex h-[100vh]">
            <div className="w-[30%] border-red-600 border-2 border-t-0 h-[100%]">
                <div className="navbar bg-neutral text-neutral-content mb-[10px]">
                    <Link href="/all-class" className="text-xl">Student Class</Link>
                </div>
                <div className="navbar bg-base-300  mb-[10px]">
                    <Link className="text-xl">Student Year</Link>
                </div>
                <div className="navbar bg-primary text-primary-content">
                    <Link className="text-xl">
                        Student Group
                    </Link>
                </div>
            </div>
            <div className="w-[70%] border-green-600 border-2 border-t-0">{children}</div>
        </div>
    );
};

export default SidebarLayout;
