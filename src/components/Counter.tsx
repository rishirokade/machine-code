import { useReducer } from "react";

enum Action {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
}
const initialState: { counter: number } = {
    counter: 0,
};

const reducer = (
    state: { counter: number },
    { action }: { action: Action }
) => {
    switch (action) {
        case Action.INCREMENT: {
            return {
                counter: state.counter + 1,
            };
        }

        case Action.DECREMENT: {
            return {
                counter: state.counter - 1,
            };
        }
        default:
            return state;
    }
};

// event delegation
export const Counter = () => {
    const [{ counter }, dispatch] = useReducer(reducer, initialState);
    const onClickHandler = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const target = e.target as HTMLButtonElement;
        if (target.tagName === "BUTTON") {
            if (target.dataset.action === "INCREMENT") {
                dispatch({ action: Action.INCREMENT });
                return;
            }
            dispatch({ action: Action.DECREMENT });
        }
    };
    return (
        <div onClick={onClickHandler}>
            <span> {counter}</span>
            <button data-action={Action.INCREMENT}>INCREMENT</button>
            <button data-action={Action.DECREMENT}>DECREMENT</button>
        </div>
    );
};
