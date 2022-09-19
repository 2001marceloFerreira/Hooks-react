import React, { useState, useEffect } from "react";

//executar algo quando alguma coisa muda 

const Effect = () => {

    const [resource, setResource] = useState("Post");


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`) //chamando a API
            .then(response => response.json())
            .then(json => console.log(json))
    }, [resource]); // [] sempre vai executar quando a variavel que estiver dentro mudar.

    const changeResource = (resource) => {
        setResource(resource);
    };

    return (
        <>
            <h1>USEEFFECT</h1>

            <h1>{resource}</h1>
            <span>chamando a API (console)</span>
            <div >
                <button onClick={() => changeResource("posts")}>Posts</button>
                <button onClick={() => changeResource("comments")}>Comments</button>
                <button onClick={() => changeResource("todos")}>todos</button>
            </div>
        </>
    )

}

export default Effect;