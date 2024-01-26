import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col item-center overflow-hidden rounded-lg shadow-lg w-[15rem] mx-3 bg-white'>
        <div className='h-[13rem] w-[10rem]'>
            <img classname='object-cover object-top w-full h-full' src={product.imageUrl}/>
        </div>
        <div className='p-4'>
            <h3 className='text-lg text-gray-900 font-medium'>{product.brand}</h3>
            <p className='mt-2 text-grey-500 text-sm'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard