import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CreateNewTodo } from "./Todo/CreateNewTodo";
import TodoList from "./Todo/TodoList";

export type TodoType = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export default function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList") ?? "[]");
    if (savedTodoList?.length) {
      return savedTodoList;
    }

    return [];
  });
  const [newTodoString, setNewTodoString] = useState("");
  const [errorInput, setErrorInput] = useState("");

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const onAddingBtnClick = () => {
    setErrorInput("");
    if (!newTodoString) {
      setErrorInput("Please provide Todo Name");
      return;
    }

    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    };
    const newTodoList = [newTodoItem, ...todoList];
    newTodoList.sort((a, b) => a.name.localeCompare(b.name))

    setTodoList(newTodoList);
    setNewTodoString("");
  };

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return todo;
      });
    });
  };

  const onDeleteBtnClick = (todoId: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <p>Todo App TypeScript</p>
      <CreateNewTodo
        onAddingBtnClick={onAddingBtnClick}
        newTodoString={newTodoString}
        onNewTodoChange={onNewTodoChange}
        errorInput={errorInput}
      />
      <TodoList
        todoList={todoList}
        updateIsCompleted={updateIsCompleted}
        onDeleteBtnClick={onDeleteBtnClick}
      />
    </>
  );
}
