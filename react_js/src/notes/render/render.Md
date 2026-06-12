# React Rendering Flow

## PHASE 1 — BUILD

## 1. Write React code

- Create components, JSX, hooks, functions, etc.
- Only source files exist.
- Nothing has executed yet.

---

## 2. Run `npm run dev`

- Vite starts a development server.
- It waits for the browser to request the application.

---

## 3. Browser requests the application

- Vite begins preparing the JavaScript bundle.
- JSX is transformed into JavaScript.
- Normal JavaScript (useState, functions, variables, etc.) stays unchanged.
- React library and your application code are bundled together.

---

## 4. Browser receives the JavaScript bundle

- The browser never receives JSX.
- It only receives plain JavaScript.
- The bundle contains React, your components, transformed JSX, and other JavaScript code.

---

## PHASE 2 — INITIAL RENDER

## 5. JavaScript engine executes the bundle

- The V8 JavaScript engine starts running the bundle.
- Code executes line by line.
- React and your application code begin executing.

---

## 6. React calls component functions

- React starts rendering your application.
- Function components execute like normal JavaScript functions.
- Hooks (useState, useEffect, etc.) are also executed.

---

## 7. JSX creates React Element objects

- The transformed `jsx()` function is executed.
- React Element objects are created.
- These are plain JavaScript objects, not real DOM elements.

---

## 8. React builds the Fiber tree

- React converts React Element objects into a Fiber tree.
- The Fiber tree represents the UI internally.
- React uses it to track and manage updates efficiently.

---

## 9. React updates the Real DOM

- React compares the Fiber tree with the current DOM.
- Uses DOM APIs (createElement, appendChild, etc.).
- Real HTML elements are created and inserted into the page.

---

## 10. Browser paints the UI

- Browser renders the updated DOM.
- Pixels are drawn on the screen.
- User sees the initial UI.

---

## PHASE 3 — RE-RENDER

## 11. setState() schedules an update

- React does NOT update UI immediately.
- It marks the component for re-render.
- Update is queued (batched for performance).

---

## 12. Component function runs again

- React re-executes the component function from top to bottom.
- This is NOT a fresh component.
- React remembers previous hook values internally.
- `useState` does NOT reset to initial value.
- React uses stored state from Fiber memory.

---

## 13. New React Elements are created

- JSX runs again.
- New React Element objects are created.
- These represent the updated UI.

---

## 14. New Fiber tree is built

- React builds a new Fiber tree from new elements.
- This represents the updated UI structure.

---

## 15. Reconciliation (diffing)

- React compares old Fiber tree vs new Fiber tree.
- Finds what changed (add / update / remove).

---

## 16. Commit phase updates the Real DOM

- React applies only minimal DOM changes.
- Uses DOM APIs (update text, attributes, nodes).

---

## 17. Browser repaints the updated UI

- Browser renders updated DOM.
- User sees the updated screen.
