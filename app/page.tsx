"use client"
import  Link  from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Product } from '@/types/products'
import { client } from '@/sanity/lib/client'
import { allProducts, four } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export default function Page(){
 
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
      async function fetchproduct(){
        const fetchedProduct : Product[] = await client.fetch(four)
        setProduct(fetchedProduct)
      } 
      fetchproduct()
    },[])
  
  return (
    <>
      <div>
        <Image
          src={"/images/hero-sec.png"}
          alt="hero-section"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </div>
      <h1 className='text-[32px] font-bold text-center mt-10'>Browse The Range</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='flex flex-wrap items-center justify-center mt-16 gap-8'>
        <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
          <Image
            src={"/images/img1.png"}
            alt='img-1'
            width={381}
            height={480}
            className="max-w-[100%] h-auto hover:shadow-2xl duration-300 ease-in"
          />
          <h3 className='text-center text-2xl mt-6'>Dining</h3>
        </div>

        <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
          <Image
            src={"/images/img2.png"}
            alt='img-2'
            width={381}
            height={480}
            className="max-w-[100%] h-auto hover:shadow-2xl duration-300 ease-in"
          />
          <h3 className='text-center text-2xl mt-6'>Living</h3>
        </div>

        <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
          <Image
            src={"/images/img3.png"}
            alt='img-3'
            width={381}
            height={480}
            className="max-w-[100%] h-auto hover:shadow-2xl duration-300 ease-in"
          />
          <h3 className='text-center text-2xl mt-6'>Bedroom</h3>
        </div>
      </div>




      





      <div>
        <h1 className='text-[40px] text-center font-bold mt-14 mb-6'>Our Products</h1>
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
         Price: {product.price ? `$${product.price}`: "Price not available"}
        </p>
        <br />
        <Link href={"/shop"}>
          <button className="w-[100px] h-[48px] font-serif bg-[#FFFFFF] border border-[#B88E2F] text-[#000000] hover:bg-[#a2f500] rounded-md">
            Buy now
          </button>
          </Link>
      </div>
  )

)}
</div>
</div>
        




















        <div className='flex items-center justify-center mt-6'>
          <Link href={"/shop"}>
          <button className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#B88E2F] text-[#000000] hover:bg-[#B88E2F]">
            See all products
          </button>
          </Link>
        </div>

        <div className='h-auto bg-[#FCF8F3] mt-10 flex flex-col lg:flex-row items-center justify-around'>
          <div className='text-center lg:text-left px-6 lg:px-0'>
            <h1 className='text-[32px] sm:text-[36px] md:text-[40px] font-bold w-[90%] md:w-[422px]'>
              50+ Beautiful rooms inspiration
            </h1>
            <p className='text-[14px] sm:text-[16px] mt-4 md:mt-6 w-[90%] md:w-[368px]'>
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className='w-[70%] md:w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] mt-8'>
              Explore More
            </button>
          </div>

          <div className='mt-8 lg:mt-0'>
            <Image
              src="/images/img6.png"
              alt="last-1"
              width={404}
              height={582}
              className="w-full lg:w-[404px] lg:h-[582px]"
            />
          </div>

          <div className='mt-8 lg:mt-0'>
            <Image
              src="/images/img5.png"
              alt="last-1"
              width={372}
              height={486}
              className="w-full lg:w-[372px] lg:h-[486px]"
            />
          </div>
        </div>

        <div className="h-auto mt-32 px-6 md:px-16 lg:px-32">
          <h3 className="text-center text-[18px] sm:text-[20px]">Share your setup with</h3>
          <h1 className="text-center text-[30px] sm:text-[40px] font-bold">#FuniroFurniture</h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8">

            <div className="flex flex-col items-center lg:items-start gap-5">
              <Image
                src="/images/last1.png"
                alt="last-1"
                width={451}
                height={312}
                className="mb-5"
              />
              <Image
                src="/images/last2.png"
                alt="last-2"
                width={451}
                height={312}
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/last3.png"
                alt="last-3"
                width={295}
                height={392}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start gap-5">
              <Image
                src="/images/last4.png"
                alt="last-4"
                width={420}
                height={348}
                className="mb-5 pt-8 lg:pt-32"
              />
              <div className="flex justify-between gap-5">
                <Image
                  src="/images/last5.png"
                  alt="last-5"
                  width={178}
                  height={242}
                />
                <Image
                  src="/images/last6.png"
                  alt="last-6"
                  width={258}
                  height={196}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/last7.png"
                alt="last-7"
                width={425}
                height={433}
              />
            </div>
          </div>
        </div>

      </div>


    </>
  )

}