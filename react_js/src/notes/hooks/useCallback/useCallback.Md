# React useCallback Hook

useCallback is used to cache a function.

Normally,  
every time a component re-renders,  
JavaScript creates a new function.

useCallback tells React:

> "If nothing changed, give me the previous function."

useCallback returns a memoized (cached) function.

---

## 1. When to use useCallback

Use it when:

- passing functions to child components
- using React.memo
- using a function inside useEffect
- you don't want a new function on every render

---

## 2. Syntax

```jsx
const callback = useCallback(() => {
    // code
}, [dependencies]);
```

---

## 3. How it works

On the first render,

React stores the function.

On later renders,

React checks the dependencies.

- if dependencies changed

    React stores the new function.

- if dependencies are the same

    React returns the previous function.

---

## 4. Example

```jsx
const handleClick = useCallback(() => {
    console.log("Clicked");
}, []);
```

---

## 5. Flow

```text
First Render
    │
    ▼
create function
    │
    ▼
React stores it

          ↓

Next Render
    │
    ▼
new render starts
    │
    ▼
check dependencies
    │
    ▼
same?
├── Yes → return previous function
└── No  → store new function
```

---

## 6. Dependency Array

The dependency array does **NOT** cause a re-render.

It only tells React

whether to keep the previous function

or store a new one.

---

## 7. Important

Without useCallback,

every re-render creates a brand new function.

With useCallback,

React can reuse the previous function

when dependencies have not changed.

---

## 8. Don't overuse useCallback

Creating a function is usually very cheap.

Only use useCallback

when keeping the same function reference

actually improves performance.
