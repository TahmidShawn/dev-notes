# The useEffect Hook allows us to perform side effects in our components.

## main work

-   1. receive props
-   2. read state
-   3. calculate ui
-   4. return jsx (react elements)

## side effects

-   1. api requests (fetch, axios)
-   2. timers (setTimeout, setInterval)
-   3. event listeners
-   4. dom manipulation
-   5. update document title
-   6. local storage / session storage
-   7. websocket connections
-   8. external subscriptions
-   9. browser apis (geo location, clipboard, notifications, etc.)
-   10. initialize third-party libraries
-   11. logging / analytics
-   12. cleanup (remove listeners, clear timers, close connections, unsubscribe)

---

## Syntax:

```js
useEffect(() => {
		// side effect

		return () => {
			// clean up logic
		};
	}, [ dependency array]);
```

## Render :

useEffect runs after the component has rendered and the UI is updated in the browser

## Flow :

Render → Commit → Paint → useEffect

## dependency :

1. State/props change causes re-render.
2. Dependency array is only checked after render to decide if useEffect should run.

```js
useEffect(() => {}, []); // once per mount
useEffect(() => {}, [a]); // runs when a changes
useEffect(() => {}); // every render
```

## Dependency changes

-   1. state or props (usually) change happens
-   2. component re-renders
-   3. react commits dom updates
-   4. browser paints ui
-   5. cleanup of previous effect runs
-   6. new useEffect callback runs

## Important :

1. if we creates something that keeps running outside react ----> cleanup needed

2. if it is just a one-time action inside effect ----> no cleanup needed

## when we need cleanup

-   1. event listeners (addEventListener)
-   2. timers (setInterval, setTimeout)
-   3. websocket connections
-   4. subscriptions (real-time data, stores)
-   5. external libraries (charts, maps, etc.)
-   6. manual dom listeners (scroll, resize, focus)

---

## when we don't need cleanup

-   1. simple state updates
-   2. rendering logic (ui calculation)
-   3. one-time api call (fetch, axios)
-   4. document.title update
-   5. console.log / simple computations

---

## useEffect stale closure example :

```jsx
import { useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log(count);
        }, 1000);
    }, []); // runs only once

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
```

## result :

1. ui 1 -> 2 -> 3
2. console 0 -> 0 -> 0

---

## why

-   1. useEffect runs only once because dependency is []
-   2. setInterval is created inside useEffect
-   3. interval runs in browser independently of React
-   4. interval captures value of count from first render (0)
-   5. when state updates, component re-renders BUT effect does not re-run
-   6. interval still uses old captured value (closure)
-   7. result: console keeps printing 0 forever
