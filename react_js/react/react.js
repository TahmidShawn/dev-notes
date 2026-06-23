/*
React useReducer Hook

useReducer is used when state logic becomes complex
and useState starts feeling messy.

It works like a centralized state manager inside a component.


--------------------------------------------------

1. When to use useReducer

useState is fine for simple values.

But useReducer is better when:

- multiple state updates depend on previous state
- state logic is complex
- you want all state transitions in one place
- state changes follow specific rules


--------------------------------------------------

2. Basic structure

const [state, dispatch] = useReducer(reducer, initialState);


reducer is just a function:

function reducer(state, action) {
    // return new state based on action
}


--------------------------------------------------

3. How it works

You don’t directly change state.

Instead you send an action:

dispatch({ type: "increment" })

React sends this action to reducer.

Reducer decides how state should change.


--------------------------------------------------

4. Example

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


--------------------------------------------------

5. Flow

dispatch(action)
    → React sends action to reducer
    → reducer calculates new state
    → React updates state
    → component re-renders


--------------------------------------------------

6. Why useReducer exists

Instead of writing multiple setState calls
scattered across component,

you keep all state logic in one place (reducer).


--------------------------------------------------

7. Important

- reducer must be pure function
- it should not modify state directly
- always return new state


--------------------------------------------------

8. Simple idea

useState → direct update

useReducer → action based update
*/
/*
React useMemo Hook

useMemo is used to avoid unnecessary calculations
when a function is expensive.

It memorizes (caches) a computed value.


--------------------------------------------------

1. When to use useMemo

Use it when:

- calculation is heavy
- depends on some state/props
- you don’t want to recompute every render


--------------------------------------------------

2. Syntax

const result = useMemo(() => {
    return expensiveCalculation();
}, [dependencies]);


--------------------------------------------------

3. How it works

React runs the function only when dependencies change.

If dependencies are same,
React returns cached value.


--------------------------------------------------

4. Example

const filteredUsers = useMemo(() => {

    return users.filter(user => user.active);

}, [users]);


--------------------------------------------------

5. Flow

first render
    → run function
    → store result

next render
    → check dependencies
    → if same → reuse value
    → if changed → recompute


--------------------------------------------------

6. Important

useMemo does NOT:

- stop re-render
- make code faster automatically
- replace useEffect


It only avoids recalculating values unnecessarily.


--------------------------------------------------

7. Simple idea

recalculate only when needed

React Rendering Lifecycle (Deep Note)

React rendering is not the same as DOM updating.
Rendering simply means React is calling your component function.

Actual UI update happens later.


--------------------------------------------------

1. What "render" actually means

When state or props change:

React does NOT immediately update the DOM.

Instead it:

- calls your component function again
- re-calculates JSX
- builds a new virtual representation

That whole process is called rendering.


--------------------------------------------------

2. Full rendering cycle

React has 3 main phases:

1. Trigger phase
2. Render phase
3. Commit phase


--------------------------------------------------

3. Trigger phase

Something changes:

- state update (setState / dispatch)
- props change
- parent re-render

React just marks the component to re-render.
Nothing is updated yet.


--------------------------------------------------

4. Render phase

React calls the component function.

Example:

function App() {
    const [count, setCount] = useState(0);

    return <h1>{count}</h1>;
}

React will re-run this function again.

Important:
- no DOM updates happen here
- just calculation + JSX creation


--------------------------------------------------

5. Commit phase

After render is done:

React updates the real DOM.

- updates changed nodes
- removes old nodes
- applies new changes

Then browser paints UI.


--------------------------------------------------

6. Flow summary

state change
    → re-render triggered
    → component function runs
    → JSX created
    → React compares old vs new (reconciliation)
    → DOM updated
    → browser paint


--------------------------------------------------

7. Important idea

Render phase can run many times.

But DOM updates only happen in commit phase.


--------------------------------------------------

8. React is always re-running functions

React components are not "living objects".

They are just functions that run again and again
based on state changes.


*//*
Hook Execution Order Inside Render

React always runs hooks in the SAME order
on every render.

This is very important.


--------------------------------------------------

1. Why order matters

React does not identify hooks by name.

It identifies hooks by position.


Example:

useState()  → first hook
useEffect() → second hook
useRef()    → third hook


React stores them in a list internally.


--------------------------------------------------

2. How React tracks hooks

Internally React keeps something like:

Hook 1 → state
Hook 2 → effect
Hook 3 → ref


On next render it reads them in the SAME order.


--------------------------------------------------

3. Example

function App() {

    const [a, setA] = useState(0);   // hook 1

    const [b, setB] = useState(0);   // hook 2

    useEffect(() => {}, []);         // hook 3

    return null;
}


React expects this order every render.


--------------------------------------------------

4. What breaks React

Hooks must NEVER be called conditionally.

Wrong:

if (x) {
    useState();
}

Correct:

useState();

if (x) {
    // logic here
}


--------------------------------------------------

5. Why conditional hooks break everything

If hook order changes:

Render 1:
useState → useEffect

Render 2:
useEffect → useState

React gets confused:

- state mismatch
- wrong hook data
- bugs


--------------------------------------------------

6. Render flow with hooks

Component renders

→ React starts hook pointer at 0

→ runs hook 1 (useState)
→ runs hook 2 (useEffect)
→ runs hook 3 (useRef)

→ stores them in internal array

Next render:

→ pointer resets
→ reads hooks in same order again


--------------------------------------------------

7. Key rule

Hooks depend on position, not name.

Same order = correct behavior
Different order = broken state


--------------------------------------------------

8. Simple idea

React treats hooks like a list.

It walks through them one by one
every time the component renders.
*//*
React Reconciliation (Diffing Algorithm - Deep Note)

Reconciliation is how React compares
previous UI with new UI and decides
what actually needs to change in the DOM.


--------------------------------------------------

1. What problem reconciliation solves

Every time state or props change:

React re-runs the component
and produces a new React element tree.

Now React has:

- old tree (previous render)
- new tree (current render)

React does NOT replace the whole DOM.

It tries to find the minimum changes needed.


--------------------------------------------------

2. Key idea

React does NOT compare full trees deeply.

Instead it uses:

- same position comparison
- type comparison
- key comparison (for lists)


This makes diffing fast.


--------------------------------------------------

3. Two assumptions React makes

React uses these rules to optimize:

1. Different element types = completely different tree

2. Same type = same component, just update props

These assumptions avoid expensive deep comparisons.


--------------------------------------------------

4. Element type comparison

Example:

Before:
<div />

After:
<span />

React will:

- destroy old DOM node
- create new DOM node

Because type changed.


But:

Before:
<div className="a" />

After:
<div className="b" />

React will:

- keep same DOM node
- update only changed props


--------------------------------------------------

5. Component comparison

Before:
<Header />

After:
<Header />

Same component type → React reuses it
and just re-renders it.


If:

<Header /> → <Sidebar />

Different component → destroy old, create new.


--------------------------------------------------

6. Children reconciliation (same level rule)

React compares children only within same level.

It does NOT jump across tree levels.

Example:

Parent
 ├── A
 ├── B
 └── C

React compares A with A, B with B, C with C.

It does NOT search entire tree.


--------------------------------------------------

7. Lists and keys (very important)

Without keys:

React compares by index.

Example:

A B C
↓ ↓ ↓
A C B

React thinks:

- A same
- B becomes C
- C becomes B

This causes incorrect updates.


With keys:

[A, B, C]
keys: 1,2,3

React matches by key, not position.

So it understands:

B moved, C moved

instead of treating them as new elements.


--------------------------------------------------

8. Why keys must be stable

Bad key:
index of array

Good key:
unique id from data

Because index changes when list changes,
which breaks reconciliation accuracy.


--------------------------------------------------

9. Reconciliation process step-by-step

1. State/props change
2. Component re-renders
3. New element tree is created
4. React compares old vs new tree
5. Same type → update props
6. Different type → replace node
7. Children compared by index or key
8. Minimal DOM operations calculated
9. Commit phase applies changes to DOM


--------------------------------------------------

10. Important optimization rule

React tries to minimize:

- DOM removals
- DOM insertions
- DOM updates

Because DOM operations are expensive.


--------------------------------------------------

11. What React does NOT do

React does NOT:

- deep compare entire trees
- compare actual DOM nodes deeply
- diff by component name
- track visual changes directly


It only compares React elements.


--------------------------------------------------

12. Why reconciliation is fast

Because React assumes:

- same type = reusable
- stable structure = predictable UI
- keys = identity for lists

This avoids O(n^3) tree comparison.

Instead it works in almost O(n).


--------------------------------------------------

13. Simple idea

React doesn’t rebuild UI.

It just figures out:

what changed
and what stayed same

then updates only the minimum parts.
*/