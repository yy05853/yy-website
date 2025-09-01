
export default function App() {
    const lastAdded = "";
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("test");
    }

    return (
        <main>
            <h1>TODO</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">追加</button>
            </form>
            <section>
                <h2>直近の入力</h2>
                <div>
                    {lastAdded || "(まだ何も追加していません)"}
                </div>
            </section>
        </main>
    )
}