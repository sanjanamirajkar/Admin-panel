import React from 'react'
import SideBar from './component/common/SideBar'
import Header from './component/common/Header'
import Footer from './component/common/Footer'
import { Outlet } from 'react-router'


export default function Layout() {
    return (
        <>
            <section className='w-full'>
                <div className='grid grid-cols-[20%_auto] gap-5'>
                    <div>
                        <SideBar />
                    </div>

                    <div>
                        <Header />
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </section>

        </>
    )
}
