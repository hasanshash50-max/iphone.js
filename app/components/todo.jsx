"use client";

import { useState, useEffect } from "react";

export default function () {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        async function getTodo() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1" , //static site generation
                {
                   next:{
                       revalidate: 120,
                   }
                }
            );

            const result = await response.json();
            setTodo(result);
        }

        getTodo();
    }, []);

    return (
        <div>
            <h1 style={{color:"#fff"}}>{todo.title}</h1>
        </div>
    );
}

// 1. cache : 'force-cache' >>    {SSG} معناها كلشي كاتبو هون 

// 2. cache : 'no-store' >>     {SSG} >>> {SSR}

// 3. next : {
//      revalidate :60
// }    >> ISG  but (60) seconds 