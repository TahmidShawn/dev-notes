// The useEffect Hook allows us to perform side effects in our components.

// main work

// 01. receive props
// 02. read state
// 03. calculate ui
// 04. return jsx (react elements)

// side effects

// 01. api requests (fetch, axios)
// 02. timers (setTimeout, setInterval)
// 03. event listeners
// 04. dom manipulation
// 05. update document title
// 06. local storage / session storage
// 07. websocket connections
// 08. external subscriptions
// 09. browser apis (geolocation, clipboard, notifications, etc.)
// 10. initialize third-party libraries
// 11. logging / analytics
// 12. cleanup (remove listeners, clear timers, close connections, unsubscribe)

// Syntax:

// useEffect(() => {
// 		// side effect

// 		return () => {
// 			// clean up logic
// 		};
// 	}, [// dependency array]);

// dependency :
// State/props change causes re-render.
// Dependency array is only checked after render to decide if useEffect should run.

// useEffect(() => {}, [])      // once per mount
// useEffect(() => {}, [a])     // runs when a changes
// useEffect(() => {})          // every render

// Render :
// useEffect runs after the component has rendered and the UI is updated in the browser

// Flow :
// Render → Commit → Paint → useEffect

// Dependency changes

// 01. state or props change happens
// 02. component re-renders
// 03. react commits dom updates
// 04. browser paints ui
// 05. cleanup of previous effect runs
// 06. new useEffect callback runs

// Important :

//  if we creates something that keeps running outside react ----> cleanup needed
//  if it is just a one-time action inside effect ----> no cleanup needed

// when we need cleanup

// 01. event listeners (addEventListener)
// 02. timers (setInterval, setTimeout)
// 03. websocket connections
// 04. subscriptions (real-time data, stores)
// 05. external libraries (charts, maps, etc.)
// 06. manual dom listeners (scroll, resize, focus)

// when we don't need cleanup

// 01. simple state updates
// 02. rendering logic (ui calculation)
// 03. one-time api call (fetch, axios)
// 04. document.title update
// 05. console.log / simple computations

// useEffect stale closure example :

// import { useState, useEffect } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       console.log(count);
//     }, 1000);
//   }, []); // runs only once

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// result :
// in ui 1 -> 2 -> 3
// console 0 -> 0 -> 0

// why

// 01. useEffect runs only once because dependency is []
// 02. setInterval is created inside useEffect
// 03. interval runs in browser independently of React
// 04. interval captures value of count from first render (0)
// 05. when state updates, component re-renders BUT effect does not re-run
// 06. interval still uses old captured value (closure)
// 07. result: console keeps printing 0 forever
