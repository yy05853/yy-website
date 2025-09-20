import { useForm, type SubmitHandler } from "react-hook-form";
import { Todo } from "../types";

type FormValues = { todo: string };
type Props = { setTodos: React.Dispatch<React.SetStateAction<Todo[]>> };

export default function TodoForm({ setTodos }: Props) {
    const { register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: { todo: "" },
    });

    const onSubmit: SubmitHandler<FormValues> = ({ todo }) => {
        const title = todo.trim();
        if (!title) return;
        const newTodo: Todo = { id: crypto.randomUUID(), title, done: false };
        setTodos((prev) => [newTodo, ...prev]);
        reset({ todo: "" });
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="mb-5 flex gap-2"
        >
            <input
                {...register("todo", { required: true })}
                placeholder="やることを入力"
                aria-label="やること"
                style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid #ddd" }}
                />
                <button type="submit">追加</button>
        </form>
    );
}