'use client'

import React from 'react'
import { HStack, VStack, Text, IconButton, Divider, Spacer, Badge, Checkbox  } from '@chakra-ui/react'
import { CloseIcon, BellIcon } from '@chakra-ui/icons'


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
      width='70%'
      maxW={{base: '90vw', sm:'50vw', lg: '50vw', xl:'50vw'}}
      alignItems='stretch'
      >
      
      {todos.map((todo:any) => (
        <HStack key={todo.id}>
          <Checkbox type={'checkbox'} colorScheme='red'  size='3xl' spacing='2rem' icon={<BellIcon />}>
          <Text fontWeight={'bold'}>{todo.body}</Text></Checkbox>
          <Spacer />
         
          <IconButton bg='red.500' aria-label='trash' icon={<CloseIcon />} onClick={()=>deleteTodo(todo.id)}/>
        </HStack>
      ))}

    </VStack>
  )
}

