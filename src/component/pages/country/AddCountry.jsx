import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import { FaMapLocationDot } from 'react-icons/fa6'
import Header from '../../common/Header'

export default function AddCountry() {
  return (
    <>
     <Breadcrumb fst_para={<><FaMapLocationDot className='text-blue-500' /> Courtry</>} fst_path="/country/view" snd_para="Add" />

    <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        Add Country
                    </h1>
                </div>
                <div className='m-5'>

                    <div>
                        <label htmlFor="country_name" className='block my-2 font-bold'>
                            Country Name
                        </label>
                        <input type="text" id='country_name' placeholder='Enter Country Name...' className='w-full py-2  ps-2 rounded-md border-1 border-stone-400' />

                        <label htmlFor="country_order" className='block my-2 font-bold'>
                            Country Order
                        </label>
                        <input type="text" id='country_order' placeholder='Enter Category Order...' className='w-full py-2 ps-2 rounded-md border-1 border-stone-400' />
                    </div>

                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Country
                    </button>


                </div>

            </div>
    </>
  )
}
