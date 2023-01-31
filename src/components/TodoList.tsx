'use client'

import React from 'react'
import { HStack, VStack, Text, IconButton, Divider, Spacer, Badge } from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'


export default function TodoList({todos, deleteTodo}: any) {

  if(!todos.length) {
    return (
      <Badge variant='subtle'  colorScheme='purple' p='4' m='4' borderRadius='lg'>Plan Some New Tasks!</Badge>
    )
  }
  
  return (
    <VStack 
        divider={<Divider />} 
      borderColor='blue.100'
      borderWidth='3px'
      p='6'
      borderRadius='2xl'
      width='75%'
      maxW={{base: '80vw', sm:'50vw', lg: '50vw', xl:'50vw'}}
      alignItems='stretch'
      >
      
      {todos.map((todo:any) => (
        <HStack key={todo.id}>
          <Text fontWeight={'bold'}>{todo.body}</Text>
          <Spacer />
          <IconButton bg='red.400' aria-label='trash' icon={<MinusIcon />} onClick={()=>deleteTodo(todo.id)}/>
          
        </HStack>
      ))}

    </VStack>
  )
}
