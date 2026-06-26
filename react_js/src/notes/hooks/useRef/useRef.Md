# React `useRef` Hook

`useRef` is a Hook that returns a mutable object.

We mainly use it for two things:

- keeping a reference to a DOM element
- storing mutable data without causing a re-render

---

## syntax

```js
const ref = useRef(initialValue);
```

---

## what useRef returns

```js
const ref = useRef(0);
```

React returns an object like:

```js
{
    current: 0;
}
```

The object itself never changes.

Only `ref.current` can change.

---

## using useRef for DOM references

Keep a reference to a real DOM element.

Example:

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />;

inputRef.current.focus();
```

---

## using useRef for mutable data

Store values that should survive re-renders
without triggering another render.

Example:

```js
const countRef = useRef(0);

countRef.current++;
```

---

## how it works

```text
Component renders
        ↓
React creates the ref object (first render only)
        ↓
The same ref object is returned on every render
        ↓
ref.current is updated
        ↓
The value changes
        ↓
No re-render happens
```

---

## useState vs useRef

### useState

- stores state
- updating state causes a re-render
- used for UI data

### useRef

- stores a mutable object
- updating ref.current does not cause a re-render
- used for DOM references or non-UI data

---

## common use cases

1.  access DOM elements
2.  focus an input
3.  scroll to an element
4.  play or pause audio/video
5.  measure element size or position
6.  store previous state or props
7.  store timeout IDs
8.  store interval IDs
9.  store requestAnimationFrame IDs
10. store WebSocket instances
11. store third-party library instances
12. store mutable variables
13. avoid stale closures
14. track render count
15. keep values between renders without re-rendering

---

## Summary

- React creates the ref object only once.
- The same ref object is returned on every render.
- Only `ref.current` changes.
- Changing `ref.current` does not notify React.
- Updating `ref.current` does not trigger a re-render.
- When a ref is attached to JSX, React assigns the DOM node to `ref.current` during the commit phase.
