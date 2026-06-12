// 1. DOM ELEMENT REACT ELEMENT
//-------------------------------------------------------------

// Example JSX:
// <div />

// React Element shape:
// {
//   type: "div", // string
//   props: { ... }
// }

// What it actually means:
// -----> type is a string (like "div", "button", "span")
// -----> represents a real html element in the browser DOM
// -----> react already knows how to handle it directly

// What react does with it:
// -----> creates a real DOM node using document.createElement("div")
// -----> sets attributes / properties on it
// -----> inserts it into the DOM tree

// Execution flow:
// React element -> DOM node creation -> UI appears on screen

// Key idea:
// -----> this is a direct instruction to create html
// -----> no function execution is needed
// -----> React just translates it into real DOM work
//

// 2. COMPONENT ELEMENT REACT ELEMENT
//-------------------------------------------------------------

// Example JSX:
// <App />

// React Element shape:
// {
//   type: App,   // function or class reference
//   props: { ... }
// }

// What it actually means:
// -----> type is a function (or class), not a string
// -----> this does not represent UI directly
// -----> it represents “run this component” instruction

// What React does with it:
// -----> calls the function: App(props)
// -----> gets back more React elements as return value
// -----> continues processing those returned elements

// Execution flow:
// React Element -> component function executes → returns React Elements -> DOM nodes created later

// Key idea:
// -----> this is not UI itself
// -----> this is a UI generator (function)
// -----> actual DOM creation happens after execution
