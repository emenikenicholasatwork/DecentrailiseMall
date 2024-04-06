"use client"
import { useGlobal } from '@/app/globalContext'
import axios from 'axios'
import React, { useRef, useState } from 'react'

const NewProduct = () => {
    const {change_new_product_form_state} = useGlobal()
    const [image, setImage] = useState(null)
    const image_ref = useRef(null)
    const [productDetails, setProductDetails] = useState({
        name:'',
        price:'',
        description:''
      })
    const image_click =()=>{
        image_ref.current.click()
    }
    const image_changed=(e)=>{
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
            reader.onload=(e)=>{
                setImage(e.target.result)
            }
        }
    }
    const inputChanged=(e)=>{
        setProductDetails({
          ...productDetails,
          [e.target.name]: e.target.value
        })
      }
      const submit= async ()=>{
        if(image === null) return
        const formData = new FormData()
        formData.append('name', productDetails.name)
        formData.append('price', productDetails.price)
        formData.append('description', productDetails.description)
        formData.append('image', image)
        const response = await axios.post('http://localhost:8080/api/v1/admin/item/add', formData, {
            headers: {Accept: "application/json"}
        })
      }
  return (
    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div class="bg-gray-400 h-[600px] w-[400px] p-6 rounded-lg">
            <div className='flex flex-row justify-between'>
                <p className='font-bold text-2xl'>New Product</p>
                <i className='font-bold text-red-500 text-2xl cursor-pointer' onClick={change_new_product_form_state}>X</i>
            </div>
            <form>
                <div className='w-[200px] h-[200px] newProductImage cursor-pointer'>
                    <img src={image} onClick={()=>{image_click()}} className='w-[200px] rounded-md h-[200px] newProductImage cursor-pointer'/>
                    <input name='2' type='file' accept='image/*' ref={image_ref} onChange={image_changed} className='d-none'/>
                    { image === null ? <p className='text-red-600 gone'>Image not set</p> : '' }
                  </div>
                  <div className='p-3'>
                    <div className='flex flex-col '>
                        <label htmlFor="name" className='text-black'>Name</label>
                        <input type="text" required onChange={inputChanged} name='name' className='outline-none p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="description" className='text-black'>Description</label>
                        <input type="text" required onChange={inputChanged} name='description' className='outline-none p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="price" className='text-black'>Price In Eth</label>
                        <input type="number" required onChange={inputChanged} name='price' className='outline-none p-2 rounded-md'/>
                    </div>
                  </div>
                  <button onClick={(e)=>{
                    e.preventDefault();
                    submit()
                    }} className='bg-blue-600 hover:text-white p-3 w-[200px] rounded-md text-lg hover:shadow-md font-bold' >Submit</button>
            </form>
        </div>
    </div>

  )
}

export default NewProduct