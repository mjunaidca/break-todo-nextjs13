"use client";

import { HStack, Input, Button, useToast, IconButton } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { AddIcon} from '@chakra-ui/icons'


export default function AddNewTasks({ addTodo }: any) {
  const toast = useToast();

  function handleNewTask(e: any) {
            e.preventDefault();
            if (!task) {
            toast({
                title: "Enter Valid Task.",
                status: "error",
                duration: 2500,
                isClosable: true,
            });
            return;
            }

            const todo = {
            id: nanoid(),
            body: task,
            };

            addTodo(todo);
            setTask("");
        }

  const [task, setTask] = useState("");

  return (
    <form onSubmit={handleNewTask}>
      <HStack m="6">
        <Input
          variant="filled"
          placeholder="Add To Do"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <IconButton aria-label="new-task" icon={<AddIcon/>} colorScheme="blue" px="6" type="submit" />
      </HStack>
    </form>
  );
}
