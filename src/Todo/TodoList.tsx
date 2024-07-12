import React from "react";
import { TodoType } from "../App";
import Todo from "./Todo";

export default function TodoList({
  todoList,
  updateIsCompleted,
  onDeleteBtnClick,
}: {
  todoList: TodoType[];
  updateIsCompleted: (todoId: string) => void;
  onDeleteBtnClick: (todoId: string) => void;
}) {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Todo
            key={todo.id}
            isCompleted={todo.isCompleted}
            name={todo.name}
            updateIsCompleted={updateIsCompleted}
            todoId={todo.id}
            onDeleteBtnClick={onDeleteBtnClick}
          />
        );
      })}
    </div>
  );
}
