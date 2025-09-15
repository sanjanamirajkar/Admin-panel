import React from 'react'
import Header from '../../common/Header'
import Breadcrumb from '../../common/Breadcrumb'
import { SiMaterialdesignicons } from 'react-icons/si'

export default function AddMaterial() {
  return (
    <>
    <Breadcrumb fst_para={<><SiMaterialdesignicons className='text-blue-500' /> Material</>} fst_path="/material/view" snd_para="Add" />


      <div className='max-w-[1320px] mx-auto gap-3 mb-60 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        Add Material
                    </h1>
                </div>
                <div className='m-5'>
                    <label htmlFor="material_name" className='block my-2 font-bold'>
                        Material Name
                    </label>
                    <input type="text" id='material_name' placeholder='Enter Material Name...' className='w-full rounded-md border-1 border-stone-400 py-2 ps-2' />

                    <label htmlFor="material_order" className='block my-2 font-bold'>
                        Order
                    </label>
                    <input type="text" id='material_order' placeholder='Enter Material Order...' className='w-full rounded-md border-1 border-stone-400 py-2 ps-2' />

                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Material
                    </button>

                </div>

            </div>
    </>
  )
}
