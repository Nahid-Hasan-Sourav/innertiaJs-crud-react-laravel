import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import SidebarLayout from '../../Layout/SidebarLayout';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import StudentAddClassModal from '../Components/Modal/StudentAddClassModal';
import { router } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const StudentClass = () => {
    const [modalOpen,setModalOpen]=useState(false)
    const IsOpenModal =(e)=>{
        setModalOpen(!modalOpen);
        // console.log("E...",e);
    }
    const onClose=()=>{
        setModalOpen(!modalOpen)
    }
    const submitAddClassForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const className = form.className.value;
        const data = {
            className,
        };
        // it's working
        // router.post("/add-class", data, {
        //     preserveScroll: false,
        //     preserveState: true,
        //     onSuccess: (res) => {
        //         console.log(res); // Access the data property of the response
        //     },
        // });

        // Inertia.post("/add-class", data)
        // .then((res) => {
        //     console.log(res); 
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
        // Inertia.post("/add-class", data, {
        //     onSuccess: (res) => {
        //         console.log(res); // Access the data property of the response
        //     },
        // });
        
        Inertia.post("/add-class", data, {
            preserveState: true,
            onSuccess: (res) => {
                console.log(res); // Access the data property of the response
            },
        });
        
    };
    
    return (
        <>

            <Layout>
                <SidebarLayout>
                    <div className='card bg-gray-500 p-[15px] rounded-none my-[10px] flex-row justify-between items-center'>
                        <h1 className='text-2xl font-bold'>All Class</h1>
                        <button className="btn no-animation" onClick={(e)=>IsOpenModal(e)}>Add Class</button>
                    </div>
                    <div className="overflow-x-auto">

                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <td>
                                    <p>1</p>
                                </td>
                                <td>
                                    <p>Sourav</p>
                                </td>
                                <td>
                                <div className="flex">
                                <FaRegEdit className='text-3xl text-red-700'/>
                                <MdDelete className='text-3xl text-green-700'/>
                                </div>
                                </td>

                            </tr>

                        </tbody>
                        {/* foot */}

                    </table>
                    </div>
                    <StudentAddClassModal
                    isOpen={modalOpen}
                    onClose={onClose}
                    submitAddClassForm={submitAddClassForm}
                    />
                </SidebarLayout>
            </Layout>
        </>
    );
};

export default StudentClass;
