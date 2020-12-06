import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        const style = {
            width: "1800px",
            height: "500px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            margin: "0 auto",
            border: "1px solid black",
        };

        return (
            <div style={style}>
                <h1>css style 사용하기</h1>
            </div>
        );
    }
}

export default App;
