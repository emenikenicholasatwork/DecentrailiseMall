'use client'
import React from 'react'
import StatisticsCard from '@/components/admin dashboard/StatisticsCard'
import RecentSales from '@/components/admin dashboard/RecentSales'
import UserListCard from '@/components/admin dashboard/UserListCard'
import ProductListCard from '@/components/admin dashboard/ProductListCard'

const page = () => {
  return (
    <div className='pb-20 pt-5'>
          <h3 className='m-0 fixed font-bold p-2 top-[75px] z-50 h-10 w-full bg-[#f6f9FF]'>
            Dashboard
          </h3>

        <div className='flex-row h-full d-flex gap-5 '>
          <div className='d-flex h-full flex-col w-full gap-5'>
            <StatisticsCard/>
            <RecentSales/>
            <UserListCard/>
            <ProductListCard/>
          </div>
          <div className='d-flex flex-auto h-full'>
          </div>
        </div>
    </div>
  )
}

export default page