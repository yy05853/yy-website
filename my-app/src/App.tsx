import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Todo = {
    id: string;
    title: string;
    done: boolean;
};

type FormValues = {
    todo: string;
};

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const { register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: { todo: ""},
    });

    const onSubmit: SubmitHandler<FormValues> = ({ todo }) => {
        const title = todo.trim();
        if (!title) return;

        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title,
            done: false,
        };

        setTodos((prev) => [newTodo, ...prev]);
        reset({ todo: "" });
    };

    const toggleDone = (id: string) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    };

    const removeTodo = (id: string) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 520 }}>
            <h1 style={{ marginBottom: 16 }}>TODO</h1>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", gap: 8, marginBottom: 20 }}
            >
                <input
                    {...register("todo", { required: true })}
                    placeholder="やることを入力"
                    aria-label="やること"
                    style={{
                        flex: 1,
                        padding: "10px 12px",
                        borderRadius: 8,
                        border: "1px solid #ddd",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        flex: 1,
                        padding: "10px 12px",
                        borderRadius: 8,
                        border: "1px solid #ddd",
                    }}>
                        追加
                    </button>
            </form>

            <section>
                <h2 style={{ fontSize: 16, marginBottom: 8 }}>TODO一覧</h2>

                {todos.length === 0 ? (
                    <div
                        style={{
                        padding: "12px",
                        borderRadius: 8,
                        border: "1px dashed #ccc",
                        background: "#fafafa",
                        }}
                    >
                        (まだ何も追加していません)
                    </div>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                        {todos.map((t) => (
                            <li
                                key={t.id}
                                style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "10px 12px",
                                border: "1px solid #eee",
                                borderRadius: 8,
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={t.done}
                                    onChange={() => toggleDone(t.id)}
                                    aria-label="完了にする"
                                />
                                <span
                                    style={{
                                        flex: 1,
                                        textDecoration: t.done ? "line-through" : "none",
                                        opacity: t.done ? 0.6 : 1,
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    {t.title}
                                </span>
                                <button
                                    onClick={() => removeTodo(t.id)}
                                    style={{
                                        padding: "6px 10px",
                                        borderRadius: 6,
                                        border: "1px solid #ddd",
                                        background: "#fff",
                                        cursor: "pointer",
                                    }}
                                >
                                    削除
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    )
}