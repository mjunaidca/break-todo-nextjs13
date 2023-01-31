"use client";

import {
  Heading,
  VStack,
  IconButton,
  useColorMode,

} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState } from "react";

import React from "react";
import AddNewTasks from "./AddTasks";
import TodoList from "./TodoList";

export default function ToDoApp() {
  const initialTodos = [
    {
      id: 1,
      body: "Add Todo",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  function deleteTodo(id: any) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTasks(todo: any) {
    setTodos([...todos, todo]);
  }

  

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        aria-label="light"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="10"
        fontWeight="extrabold"
        size={["2xl", "2xl", "3xl"]}
        bgGradient="linear(to-r, blue.600, blue.500, blue.600)"
        bgClip="text"
      >
        Simple Todo App
      </Heading> 
      <AddNewTasks addTodo={addTasks} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </VStack>
  );
}
