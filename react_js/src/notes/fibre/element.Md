# React Element Types (DOM Element vs Component Element)

## 1. DOM ELEMENT REACT ELEMENT

### Example JSX

```jsx
<div />
```

---

### React Element Shape

```js
{
  type: "div", // string
  props: { children: null }
}
```

---

## What it actually means

- `type` is a string (like `"div"`, `"button"`, `"span"`)
- Represents a real HTML element in the browser DOM
- React already knows how to handle it directly

---

## What React does with it

```js
document.createElement("div");
```

- Creates a real DOM node
- Sets attributes / properties
- Inserts it into the DOM tree

---

## Execution flow

```
React Element → DOM Node Creation → UI Appears
```

---

## Key idea

- Direct instruction to create HTML
- No function execution needed
- React directly converts it into DOM operations

---

---

## 2. COMPONENT ELEMENT REACT ELEMENT

---

### Example JSX

```jsx
<App />
```

---

### React Element Shape

```js
{
  type: App, // function or class reference
  props: {}
}
```

---

## What it actually means

- `type` is a function (or class), not a string
- Does NOT represent UI directly
- It is an instruction: “run this component”

---

## What React does with it

```js
App(props);
```

- Calls the component function
- Gets back more React elements
- Processes those elements recursively

---

## Execution flow

```
React Element → Component Execution → React Elements → DOM Nodes

```
