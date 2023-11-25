import React from "react";
// import { Inertia } from "@inertiajs/inertia";  // Add this import
// import { Inertia } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react'

const StudentAddClassModal = ({ isOpen, onClose }) => {

    const submitAddClassForm=(e)=>{
        e.preventDefault();
        const form = e.target;

        const className = form.className.value;
        const data ={
            className
        }
        console.log("from data",data);

//         Inertia.post("/add-class",data).then((res)=>{
// console.log("This is response",res);
//         })

router.visit('/add-class', {
    method: 'post',
    data,
    forceFormData: false,
    onSuccess: (res) => {
        console.log(res)
    },
  })
    }

    return (
        <>
            {isOpen && (
                <div
                    id="my_modal_3"
                    className="fixed top-[10%] left-[40%] visible w-screen h-screen bg-[#ffffff20] opacity-100 z-10"
                >
                    <form className="modal-box" onSubmit={(e)=>submitAddClassForm(e)}>
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                        >
                            ✕
                        </button>
                        <h3 className="text-lg font-bold">Student Class Add Form</h3>
                        <input type="text"
                        name="className"
                        placeholder="Class Name" className="input input-bordered w-[100%] my-[10px]" />
                        <div className="my-[5px]">
                        <button className="btn w-[100%]" type="submit">Add Class</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default StudentAddClassModal;
