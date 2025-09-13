import {Todo} from "../App";

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
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
            {todos.map((t) => (
                <li key={t.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <input type="checkbox" checked={t.done} onChange={() => toggleDone(t.id)} />
                    <span style={{ flex: 1, textDecoration: t.done ? "line-through" : "none" }}>
                        {t.title}
                    </span>
                    <button onClick={() => removeTodo(t.id)}>削除</button>
                </li>
            ))}
        </ul>
    );
}