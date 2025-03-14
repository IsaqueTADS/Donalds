"use client"



import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">
}

const ProductHeader = ({product}: ProductHeaderProps) => {
  const router = useRouter()
  const HandleBackClick = () => router.back();
  return (
    <div className="relative h-[300px] w-full">

    <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={HandleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>



      <Image 
      src={product.imageUrl} 
      alt={product.name}
      fill
      className='object-contain'/>


    </div>
  )
}

export default ProductHeader