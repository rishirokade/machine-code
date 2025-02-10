import { useState } from "react";

export const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const deleteHandle = (index: number) => {
        const targetedValue = todos[index];
        const newArray = [...todos];
        const newFilteredArray = newArray.filter((v) => {
            return v !== targetedValue;
        });
        setTodos(newFilteredArray);
    };
    const editHandler = (index: number) => {
        const targetedValue = todos[index];
        const newArray = [...todos];
        const newFilteredArray = newArray.filter((v) => {
            return v !== targetedValue;
        });
        setInput(targetedValue);
        setTodos(newFilteredArray);
    };
    const completeHandler = () => {};
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newArray = [input, ...todos];
        setTodos(newArray);
        setInput("");
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                }}
            >
                <form onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button disabled={!input}>Save</button>
                </form>
            </div>
            <div
                style={{
                    marginTop: "20px",
                }}
            >
                {todos.map((e, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                gap: "12px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <input type="checkbox" onSelect={completeHandler} />
                            <span style={{ width: "100px" }}>{e}</span>
                            <button
                                onClick={() => {
                                    editHandler(index);
                                }}
                            >
                                edit
                            </button>
                            <button
                                onClick={() => {
                                    deleteHandle(index);
                                }}
                            >
                                delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
