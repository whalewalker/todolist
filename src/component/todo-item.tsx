import * as React from "react";
import {TodoItemProps} from "../types/types";

const TodoItem: React.FC<TodoItemProps> = ({ completed, title, id }: TodoItemProps) => {
    return (
        <>
            <div className="flex gap-5 justify-between self-center max-w-full w-[492px] max-md:flex-wrap">
                <div className="flex gap-5">
                    <img
                        src={completed ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f5cf7f6bf948c4ea52e5dff1982c52484bcde1b0b45cced9ea768d4e0924c831?apiKey=3e1bb15b07b84126bafcc6938336bd68&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/6b03a0b0745185c50a4c18ee9d7d822a309766973b0e53017d7d18b59cba0ee4?apiKey=3e1bb15b07b84126bafcc6938336bd68&"}
                        alt={`Checkbox ${completed ? "checked" : "unchecked"}`}
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className={`flex-auto ${completed ? "title-gray-600" : ""}`}>
                        {title}
                    </div>
                </div>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6fea655ca50e27ad961c532e04cfd75d9f891854574364d3c56ab9ebfbac3cb?apiKey=3e1bb15b07b84126bafcc6938336bd68&"
                    alt="Delete icon"
                    className="shrink-0 my-auto aspect-square w-[18px]"
                />
            </div>
            <div className="shrink-0 mt-5 h-px bg-zinc-700 max-md:max-w-full" />
        </>
    );
};

export default TodoItem;