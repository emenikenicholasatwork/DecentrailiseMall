'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import NewProduct from '@/components/admin dashboard/NewProduct'
import { useGlobal } from '@/app/globalContext'

const ProductListCard = () => {
  const [productList, setProductList] = useState([]);
  const { new_product_form } = useGlobal();
  const { change_new_product_form_state } = useGlobal();
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/admin/item/all');
    setProductList(response.data);
  };
  
  return (
    <div className='h-full w-full pt-5'>
      {new_product_form && <NewProduct />}
      <div className=''>
        <div className='card p-3'>
          <div className=''>
            <h5 className='m-0 font-bold'>Available Products</h5>
          </div>
          <hr className='mt-1 mb-3' />
          <div className='mb-52 overflow-auto'>
            <table className='w-full pb-52'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Preview</th>
                  <th>Product name</th>
                  <th>Product description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {productList.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td><Image alt='product image' src={product.image} width={20} height={20} className='shadow-md w-14 rounded-circle h-14' /></td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price + ' ETH'}</td>
                    <td className='justify-center ms-2 d-flex'>
                      <i className='bi bi-pencil-square bg-blue-500 font-bold text-lg rounded-lg text-white p-3 cursor-pointer'><span className='ms-2'>Edit</span></i>
                    </td>
                    <td>
                      <i className='bi bi-trash bg-danger font-bold text-lg rounded-lg text-white p-3 cursor-pointer' onClick={async () => {
                        const response = await axios.delete('http://localhost:8080/api/v1/admin/delete/item', {
                          params: {
                            productId: product.id
                          }
                        });
                        setProductList(response.data);
                      }}><span className='ms-2'>Delete</span></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default ProductListCard