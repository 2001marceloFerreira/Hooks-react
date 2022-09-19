import React, { useState } from "react";

// forma dee armazenar state em components funcionais.

const State = () => {
    const [count, setCount] = useState(0);// count - valor SetCount - valor para setar

    const incremento = () => {
        setCount((prevState) => prevState + 1); // prevState é uma boa prática
    }

    return (
        <div className="App">
            <h1>USESTATE</h1>
            <h1>{count}</h1>
            <button onClick={incremento}>INCREMENTAR</button>
        </div>
    );

}

export default State;