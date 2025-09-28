import { Todo } from "../types";

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoList({todos, setTodos}: Props) {
    const toggleDone = (id: string) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !t.done }: t))
        );
    };

    const removeTodo = (id: string) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    if (todos.length === 0) {
        return (
            <div style={{ padding: "12px", border: "1px dashed #ccc", background: "#fafafa" }}>
                (まだ何も追加していません)
            </div>
        );
    }

    return (
        <ul className="grid gap-2">
            {todos.map((t) => (
                <li 
                    key={t.id} 
                    className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2"
                >
                    <input type="checkbox" checked={t.done} onChange={() => toggleDone(t.id)} />
                    <span 
                        className={`flex-1 ${t.done ? "line-through text-gray-200" : ""}`}
                    >
                        {t.title}
                    </span>
                    <button 
                        onClick={() => removeTodo(t.id)}
                        className="rounded-md border border-gray-300 px-3 py-1 text-sm transition hover:bg-gray-50"
                    >
                        削除
                    </button>
                </li>
            ))}
        </ul>
    );
}