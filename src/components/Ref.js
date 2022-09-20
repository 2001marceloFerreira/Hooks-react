import { useEffect, useRef, useState } from "react";

//Guarda uma variável e quando atualizado o componente não é renderizado novamente.

const Ref = () => {

    const [name, setName] = useState("");
    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    return (
        <>
            <h1>USEREF</h1>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name}</p>
            <p>renders: {renders.current}</p>


        </>
    )
}
export default Ref;