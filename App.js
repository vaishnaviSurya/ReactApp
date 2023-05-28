import React from "react";
import  ReactDOM  from "react-dom/client";

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
//    );
// const parent = React.createElement('h1', {}, 'this is react first page')

const HeadingComponent = () => (
    <div id="container">
        <h1>Hello this is heaading Component</h1>
    </div>
);
const heading = React.createElement("h1", {},"hello world")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);