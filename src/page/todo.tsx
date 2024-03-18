import * as React from "react";
import TodoList from "../component/todo-list";

const TodoApp: React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-14 bg-gray-900">
            <header className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 w-full min-h-[300px] max-md:px-5 max-md:max-w-full">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0787a7d7cae8128c4cf44b198cebe6f55e828a49fb4c66f0b3da3fc2d0fcf6c7?apiKey=3e1bb15b07b84126bafcc6938336bd68&"
                    alt="Background"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col max-w-full w-[541px]">
                    <div className="flex gap-5 text-4xl font-bold text-white whitespace-nowrap tracking-[15px] max-md:flex-wrap max-md:max-w-full">
                        <h1 className="flex-auto">TODO</h1>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ce454e1da48b3778d57baead51b2a8ede36f2be52b156f7f6483df53ce7f63f?apiKey=3e1bb15b07b84126bafcc6938336bd68&"
                            alt="Sun icon"
                            className="shrink-0 self-start mt-3 aspect-square fill-white w-[26px]"
                        />
                    </div>
                    <form className="flex gap-5 px-6 py-5 mt-12 text-lg tracking-tight rounded-md shadow-2xl bg-slate-800 text-slate-500 max-md:flex-wrap max-md:px-5 max-md:mt-10">
                        <label htmlFor="newTodo" className="sr-only">
                            Create a new todo
                        </label>
                        <input
                            type="text"
                            id="newTodo"
                            placeholder="Create a new todo…"
                            className="flex-auto bg-transparent outline-none border-none text-slate-300"
                        />
                    </form>
                </div>
            </header>
            <main>
                <TodoList />
            </main>
            <footer>
                <div className="mt-12 text-sm tracking-normal text-center text-gray-500 max-md:mt-10">
                    Drag and drop to reorder list
                </div>
            </footer>
        </div>
    );
};

export default TodoApp;