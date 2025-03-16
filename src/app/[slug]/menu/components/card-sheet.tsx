

import React, { useContext } from 'react'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CartContext } from '../contexts/cart';

const CardSheet = () => {
    const {isOpen, toggleCart} = useContext(CartContext);
  
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart} >
<SheetContent>
  <SheetHeader>
    <SheetTitle>Em produção!!</SheetTitle>
    <SheetDescription>
      Carrinho Off...
    </SheetDescription>
  </SheetHeader>
</SheetContent>
</Sheet>
  )
}
 
export default CardSheet