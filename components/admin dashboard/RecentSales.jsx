import React,{useState} from 'react'
import './admindashboard.css'

const RecentSales = () => {
  return (
    <div className='card flex-col p-3 h-[00px]'>
        <div className='d-flex justify-between '>
            <h5 className=''>Recent Sales</h5>
        </div>
        <div className='h-[400px] overflow-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className=''>
                            <th>#</th>
                            <th>customer</th>
                            <th>product</th>
                            <th>price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href='#' className='no-underline'>#29279</a></td>
                            <td>Nicholas Emenike</td>
                            <td>Gucci system</td>
                            <td>$77</td>
                            <td className='bg-success text-white text-center rounded-md'>Approved</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default RecentSales