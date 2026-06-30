# React `useMemo` Hook

## What is `useMemo`?

`useMemo` is a React Hook that memoizes (caches) the result of a calculation.

It helps avoid unnecessary recalculations by recomputing a value only when its dependencies change.

---

## When to Use `useMemo`

Use `useMemo` when:

- A calculation is expensive.
- The result depends on state or props.
- You want to avoid recalculating the value on every render.

---

## Syntax

```jsx
const result = useMemo(() => {
    return expensiveCalculation();
}, [dependencies]);
```

---

## How `useMemo` Works

### First Render

- React executes the callback function.
- The returned value is stored.

### Later Renders

React compares the dependency array.

- If dependencies changed:
    - Execute the callback again.
    - Store the new value.

- If dependencies are the same:
    - Return the previously cached value.

---

## Example

```jsx
const filteredUsers = useMemo(() => {
    return users.filter((user) => user.active);
}, [users]);
```

---

## Render Flow

```text
First Render
    ↓
Run callback
    ↓
Store returned value

Next Render
    ↓
Component re-renders
    ↓
React checks dependencies
    ↓
Dependencies changed?

├── Yes
│     ↓
│   Run callback
│     ↓
│   Store new value
│
└── No
      ↓
   Return cached value
```

---

## Dependency Array

The dependency array **does not trigger a re-render**.

A component re-renders because:

- State changes
- Props change
- Parent component re-renders

The dependency array is only used to determine whether React should recompute the memoized value.

---

## What `useMemo` Does Not Do

`useMemo` does **not**:

- Prevent component re-rendering.
- Automatically make an application faster.
- Replace `useEffect`.

It only avoids recalculating values when the dependencies have not changed.

---

## When Not to Use `useMemo`

`useMemo` is a performance optimization.

Avoid using it for simple or inexpensive calculations, because the overhead of memoization may outweigh the benefit and can make code harder to read.
