import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data, setData] = useState([])

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                data ? (
                    <div>
                        <h1>Title:{data.title}</h1>
                    </div>
                ) : (
                    <div>...Loading</div>
                )
            }


        </div>
    )
}

export default Fetch