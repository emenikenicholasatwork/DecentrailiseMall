'use client'
import React from 'react'
import UserListCard from '@/components/admin dashboard/UserListCard'
import ProductListCard from '@/components/admin dashboard/ProductListCard'
import { useGlobal } from '../globalContext'
import NewProduct from '@/components/admin dashboard/NewProduct'

const page = () => {
  const { new_product_form } = useGlobal();

  return (
    <div className=' flex-col w-full mb-52 d-flex'>
          {new_product_form && <NewProduct />}
            <UserListCard/>
            <ProductListCard/>
          </div>
  )
}

export default page