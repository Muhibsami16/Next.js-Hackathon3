"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Product } from '@/types/products'
import { client } from '@/sanity/lib/client'
import { allProducts, four } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export default function Shop() {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts)
      setProduct(fetchedProduct)
    }
    fetchProduct()
  }, [])

  return (
    <>
      <div className="h-auto bg-[#F9F1E7] flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-evenly space-x-4 sm:space-x-8 w-full">
          <Image
            src="/images/dotted-line.svg"
            alt="dotted-line"
            width={25}
            height={25}
          />
          <h3 className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold">Filter</h3>
          <Image
            src="/images/four-dot.svg"
            alt="four-dot"
            width={25}
            height={25}
          />
          <Image
            src="/images/square-line.svg"
            alt="square-line"
            width={25}
            height={25}
          />
        </div>
      </div>

      <div>
        <h1 className='text-[40px] text-center font-bold mt-14 mb-6 tracking-widest'>SHOP</h1>
        <div className='max-w-6xl mx-auto px-4 py-8 '>
          <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {product.map((product) => (
              <div key={product._id} className='border rounded-lg shadow-md p-4 hover:shadow-2xl transition duration-200'>
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    width={400}
                    height={500}
                    className='w-full h-48 object-cover rounded-md'
                  />
                )}
                <h1 className='text-lg font-semibold mt-4'>
                  {product.title}
                </h1>
                <p className='text-gray-500 mt-2'>
                  Price: {product.price ? `$${product.price}` : "Price not available"}
                </p>
                <br />
                <Link href={"/shop"}>
                  <button className="w-[100px] h-[48px] font-serif bg-[#FFFFFF] border border-[#B88E2F] text-[#000000] hover:bg-[#a2f500] rounded-md">
                    Buy now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-8 mt-14'>
        <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>1</div>
        <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>2</div>
        <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>3</div>
        <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>Next</div>
      </div>
    </>
  )
}
