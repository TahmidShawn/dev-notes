# React `useReducer` Hook

`useReducer` is used when state logic becomes complex and `useState` starts feeling messy.

It works like a centralized state manager inside a component.

---

## 1. When to use `useReducer`

`useState` is fine for simple values.

But `useReducer` is better when:

- multiple state updates depend on previous state
- state logic is complex
- we want all state transitions in one place
- state changes follow specific rules

---

## 2. Basic structure

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

`reducer` is just a function:

```jsx
function reducer(state, action) {
    // return new state based on action
}
```

---

## 3. How it works

We don't change state directly.

Instead, we send an action:

```jsx
dispatch({ type: "increment" });
```

`dispatch` tells React that a state update is needed.

React passes the current state and the action to the reducer.

The reducer returns the next state.

---

## 4. Example

```jsx
function reducer(state, action) {
    if (action.type === "increment") {
        return state + 1;
    }

    if (action.type === "decrement") {
        return state - 1;
    }

    return state;
}

const [count, dispatch] = useReducer(reducer, 0);
```

---

## 5. Flow

```text
dispatch(action)
    ↓
React schedules a state update
    ↓
React calls reducer(state, action)
    ↓
reducer returns the new state
    ↓
React updates the state
    ↓
component re-renders
```

---

## 6. Why `useReducer` exists

Instead of writing multiple `setState` calls throughout the component,

we keep all state logic in one place (the reducer).

This makes the code easier to read and maintain.

---

## 7. Important

- reducer must be a pure function
- do not modify state directly
- always return a new state
- avoid side effects inside the reducer (like API calls, timers, or DOM manipulation)

---

## 8. Action

An action is the information we send to the reducer.

By convention, it is usually an object with a `type` property.

Example:

```jsx
dispatch({ type: "increment" });
```

---

## 9. Simple idea

```text
useState    → direct state update

useReducer  → action-based state update
```
