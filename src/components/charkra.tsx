'use client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'

export default function Chakra({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='light' />
      {children}</ChakraProvider>
  )
}
