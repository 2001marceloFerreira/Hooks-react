import { useReducer, useState } from "react";

//Muito parecido com o useSTATE 
//Usar quando o state for muito complexo ou grande
//Quando um valor do state depepender de outros valores

const reducer = (state, action) => {
    switch (action.type) {
        case "add-task":
            return {
                ...state,
                tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
                tasksCount: state.tasksCount + 1,
            };
        case "toggle-task":
            return {
                ...state,
                tasks: state.tasks.map((item, index) => // para fazer uma linha na palavra após o click(concluido)
                    index === action.payload
                        ? { ...item, isCompleted: !item.isCompleted }
                        : item
                ),
            };
        default:
            return state;
    }
};

const Reducer1 = () => {

    const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 });

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <h1>USEREDUCER EX1</h1>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: "add-task", payload: inputValue });
                    setInputValue("");
                }}
            >
                Adicionar
            </button>

            {state.tasks.map((task, index) => (
                <p

                    onClick={() => dispatch({ type: "toggle-task", payload: index })}
                    style={{ textDecoration: task.isCompleted ? "line-through" : "none" }} //marcar como concluido
                >
                    {task.name}

                </p>
            ))
            }
        </>
    );
};

export default Reducer1;