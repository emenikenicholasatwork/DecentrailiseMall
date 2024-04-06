import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import './admin.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const layout = ({children}) => {

  return (
    <div className='h-full w-full'>
        <header className=' flex bg-white justify-between p-2 h-[75px] shadow-sm min-w-full fixed z-10'>
            <div className='d-flex justify-content-center justify-between align-items-center gap-[10%] w-full'>
                <div className='d-flex gap-1 justify-content-center align-items-center flex-row '>
                    <i className='d-flex rounded-lg fa fa-shopping-cart h-[60px] min-w-[50px] justify-center items-center bg-green-800 text-white text-3xl'></i>
                    <p className='md:block hidden font-bold text-3xl m-0'>E-Shop</p>
                </div>
                <p className='font-bold text-3xl d-flex m-0'>Admin Panel</p>
            </div>
        </header>
        <div className='h-[80px] w-full '></div>
        <div className='w-full h-full fixed d-flex flex-row'>
            <main className='p-3 bg-[#f6f9FF] w-full overflow-auto'>{children}</main>
        </div>
    </div>
  )
}

export default layout