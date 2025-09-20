import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { Todo } from "./types"

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    return (
        <main className="mx-auto max-w-xl p-6 font-sans">
            <h1 className="mb-4 text-2xl font-bold">TODO</h1>
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
       </main>
    )
}