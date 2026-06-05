import React from "react"
import ReactDOM from "react-dom/client"

// function HelloWorld(){
//     return <h1>
//         Hello nigga
//     </h1>
// }
// function Button(){
//     return <button>Touch me</button>
// // }
// const name = "Aditya Bhandari";
// function add(x, y){
//     return x+y;
// }
// function MyComponent(){

//     return <h2>Hello my name is {add(10, 5)}</h2>;
// }

function DynamicAttributes(){
    const link = "https://www.github.com/neverask1121";
    return <a href = {link}>Touch me</a>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HelloWorld/>);
// root.render(<Button/>);
// root.render(<MyComponent/>)
root.render(<DynamicAttributes/>)