import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { FaStoreAlt } from 'react-icons/fa';
import { MdHomeFilled } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router';

export default function Companyprofile() {

    const [selectedFile, setSelectedFile] = useState(null); // 🟢 state for file

    const onDrop = useCallback((acceptedFiles) => {
        // console.log(acceptedFiles);
        setSelectedFile(acceptedFiles[0]); // get the first file only
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const removeFile = () => {
        setSelectedFile(null);
    };



    return (
        <>
            <div className='w-full flex items-center justify-start gap-2 text-stone-700 border-0 border-b-2 border-stone-400 py-2 mb-5 text-xl'>

                <Link to='/home' className='flex items-center justify-start gap-1'>
                    <MdHomeFilled className='text-blue-500' />
                    Home
                </Link>
                /
                <span className='flex items-center justify-start gap-1'>
                    <FaStoreAlt className='text-blue-500' />

                    Company Profile
                </span>
            </div>



            <div className='max-w-[80vw] mx-auto gap-3 mb-50 mt-10 p-10 shadow-lg border-1 rounded-md border-stone-300'>

                <div className='grid grid-cols-[30%_auto] gap-5'>
                    <div>
                        <label className="block mb-2 font-bold">Choose Image</label>
                        <div>
                            <div
                                {...getRootProps()}
                                className={`p-10 text-center border-2 border-dashed ${isDragActive ? 'bg-blue-50' : 'bg-gray-50'
                                    } cursor-pointer hover:bg-blue-400 duration-500`}
                            >
                                <input {...getInputProps()} />
                                {isDragActive
                                    ? <p>Drop the image here …</p>
                                    : <p>Drag & drop an image, or click to select</p>}
                            </div>
                        </div>
                        {selectedFile && (
                            <div className="mt-3 flex items-center gap-3">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        <strong>{selectedFile.name}</strong>
                                    </p>
                                    <img
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Preview"
                                        className="mt-2 max-w-[200px] rounded max-h-[200px]"
                                    />
                                </div>
                                <button
                                    onClick={removeFile}
                                    className="text-red-600 hover:text-red-800 text-lg cursor-pointer"
                                    title="Remove selected file"
                                >

                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        )}

                    </div>
                    <div>
                        <label htmlFor="company_name" className='block my-2 font-bold'>
                            Company Name
                        </label>
                        <input type="text" id='company_name' placeholder='Company Name...' className=' py-2 ps-2 w-full rounded-md border-1 border-stone-400' />

                        <label htmlFor="company_email" className='block my-2 font-bold'>
                            Email ID
                        </label>
                        <input type="text" id='company_email' placeholder='Enter Email ID...' className='w-full py-2 ps-2 rounded-md border-1 border-stone-400' />

                        <label htmlFor="company_phone" className='block my-2 font-bold'>
                            Mobile Number
                        </label>
                        <input type="text" id='company_phone' placeholder='Enter Mobile Number...' className='w-full py-2 ps-2 rounded-md border-1 border-stone-400' />

                    </div>
                </div>
                <div>

                    <label htmlFor="company_address" className='block my-2 font-bold'>
                        Address
                    </label>
                    <textarea name="company_address" id="company_address" placeholder='Enter Company Address...' className='w-full py-2 ps-2 rounded-md border-1 border-stone-400' rows={6}></textarea>

                    <label htmlFor="g_map_url" className='block my-2 font-bold'>
                        Google Map URL
                    </label>
                    <input type="text" id='g_map_url' placeholder='Enter Google Map URL...' className='w-full rounded-md py-2 ps-2 border-1 border-stone-400' />

                    <div className='mt-5 p-3 border border-stone-400 rounded-md'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.4050619509107!2d74.59552507492322!3d16.905299983901998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc13d594cd1788b%3A0xba201620b0e95c88!2sMahadev%20Mandir!5e0!3m2!1sen!2sin!4v1757937438899!5m2!1sen!2sin" width="100%" height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Parent Category
                    </button>

                </div>

            </div>
        </>
    )
}
