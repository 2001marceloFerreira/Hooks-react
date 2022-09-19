import { useReducer } from "react";

//Muito parecido com o useSTATE 
//Usar quando o state for muito complexo ou grande
//quando um valor do state depepender de outros valores

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                counter: state.counter + 1,
            };
        case "decrement":
            return {
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <>
            <h1>USEREDUCER</h1>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
        </>
    )
}

export default Reducer;