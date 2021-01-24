import React, { useState, useEffect } from "react";
function App(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(props, count);
        return () => {
            console.log("Clean up");
        };
    }, [count]);

    const style = {
        width: "1800px",
        height: "500px",
        
        fontSize: "100px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        margin: "0 auto",
        border: "1px solid black",
    };

    return (
        <button style={style} onClick={(e) => setCount(count + 1)}>
            {count}
        </button>
    );
}

export default App;
