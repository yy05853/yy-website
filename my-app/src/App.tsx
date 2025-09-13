import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

export type Todo = {
    id: string;
    title: string;
    done: boolean;
};

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    return (
        <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 520 }}>
            <h1 style={{ marginBottom: 16 }}>TODO</h1>
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
       </main>
    )
}