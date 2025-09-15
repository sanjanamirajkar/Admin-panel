import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import { IoIosColorPalette } from "react-icons/io"
import Header from '../../common/Header'

export default function AddColor() {
    return (
        <>
            <Breadcrumb fst_para={<><IoIosColorPalette className='text-blue-500' /> Colors</>} fst_path="/color/view" snd_para="Add" />

            <div className='max-w-[1320px] mx-auto gap-3 mb-40 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        Add Colors
                    </h1>
                </div>
                <div className='m-5'>
                    <label htmlFor="color_name" className='block my-2 font-bold'>
                        Color Name
                    </label>
                    <input type="text" id='color_name' placeholder='Enter Color Name...' className='w-full py-2 ps-2 rounded-md border-1 border-stone-400' />

                    <label htmlFor="color_picker" className='block my-2 font-bold'>
                        Color Picker
                    </label>
                    <input type="color" name="" id="color_picker" />

                    <label htmlFor="color_order" className='block my-2 font-bold'>
                        Order
                    </label>
                    <input type="text" id='color_order' placeholder='Enter Color Order...' className='w-full py-2 ps-2 rounded-md border-1 border-stone-400' />

                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Color
                    </button>

                </div>

            </div>
        </>
    )
}
