# React useState - Mental Model Notes

> This is a simplified mental model of how `useState` works internally in React.  
> It is not exact source code, but it is very close to the real behavior.

## 1. Two layers of `useState`

### (a) Public `useState` (what we import)

```js
export function useState(initialState) {
    const dispatcher = resolveDispatcher();
    return dispatcher.useState(initialState);
}
```

### Key ideas:

- This is a normal JavaScript function
- It does NOT store state
- It does NOT contain state logic
- It only forwards the call to React internals

## (b) Internal `useState` (real implementation)

React switches implementation internally based on render phase:

- `mountState` → first render
- `updateState` → re-render

These live inside a dispatcher object:

```js
dispatcher = {
  useState: mountState OR updateState
}
```

### Key ideas:

- This is NOT a standalone function you directly call
- It is a method inside an internal object
- React decides which function is attached

So:

- `dispatcher.useState` changes based on render phase

---

## 2. Why two internal functions exist?

React has two main phases:

### 2.1 Mount phase (first render)

- Create state from scratch
- Initialize hook memory
- Create setState function

### 2.2 Update phase (re-render)

- Reuse existing state
- Read hook list in order
- Apply queued updates

---

## 3. Why return value is always the same?

Both implementations return:

```js
[state, setState];
```

### Why?

React guarantees a stable API.

If structure changed, this would break:

```js
const [state, setState] = useState();
```

So React ensures:

- Same output shape always

---

## 4. What actually changes?

### NOT changing:

- Return structure
- API shape

### CHANGING:

- Internal function (`mountState` / `updateState`)
- How state is computed
- How updates are processed
- How hooks are tracked internally

---

## 5. Dispatcher concept (core idea)

React stores the current hook system here:

```js
ReactSharedInternals.H = dispatcher;
```

Before rendering, React sets:

### Mount phase:

```js
H = HooksDispatcherOnMount;
```

### Update phase:

```js
H = HooksDispatcherOnUpdate;
```

---

## 6. Final execution flow

```text
useState()
  ↓
resolveDispatcher()
  ↓
dispatcher.useState()
  ↓
mountState OR updateState
  ↓
returns [state, setState]
```

---

## 7. Why this design exists

React uses this design to ensure:

- Same API for developers
- Different internal behavior per render phase
- Safe rendering system
- Hook order consistency
