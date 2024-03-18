import * as React from "react";
import TodoItem from "./todo-item";
import {TodoItemProps} from "../types/types";

const todoItems: TodoItemProps[] = [
    {
        id: 1,
        title: "Complete online JavaScript course",
        completed: true,
    },
    {
        id: 2,
        title: "Jog around the park 3x",
        completed: false,
    },
    {
        id: 3,
        title: "10 minutes meditation",
        completed: false,
    },
    {
        id: 4,
        title: "Read for 1 hour",
        completed: false,
    },
    {
        id: 5,
        title: "Pick up groceries",
        completed: false,
    },
    {
        id: 6,
        title: "Complete Todo App on Frontend Mentor",
        completed: false,
    },
];


const TodoList: React.FC = () => {
    return (
        <div className="flex z-10 flex-col py-5 mt-0 max-w-full text-lg tracking-tight rounded-md shadow-2xl bg-slate-800 text-slate-300 w-[540px]">
            {todoItems.map((item) => (
                <TodoItem key={item.id} {...item} />
            ))}
            <div className="flex gap-5 justify-between self-center mt-4 max-w-full text-sm tracking-normal text-gray-500 w-[492px] max-md:flex-wrap">
                <div>5 items left</div>
                <div className="flex gap-5 justify-between font-bold whitespace-nowrap">
                    <div className="text-blue-500">All</div>
                    <div>Active</div>
                    <div>Completed</div>
                </div>
                <div className="text-right">Clear Completed</div>
            </div>
        </div>
    );
};

export default TodoList;