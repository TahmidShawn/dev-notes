/*
React useMemo Hook

useMemo is used to avoid unnecessary calculations
when a function is expensive.

It memorizes (caches) the result of a calculation.

useMemo returns a memoized (cached) value.


--------------------------------------------------

1. When to use useMemo

Use it when:

- calculation is expensive
- result depends on state or props
- you don't want to recalculate on every render


--------------------------------------------------

2. Syntax

const result = useMemo(() => {
    return expensiveCalculation();
}, [dependencies]);


--------------------------------------------------

3. How it works

On the first render,
React runs the callback function
and stores its returned value.

On later renders,
React compares the dependencies.

- if dependencies changed
  → run the callback again
  → store the new value

- if dependencies are the same
  → return the cached value


--------------------------------------------------

4. Example

const filteredUsers = useMemo(() => {

    return users.filter(user => user.active);

}, [users]);


--------------------------------------------------


5. Flow

First Render
    ↓
run callback
    ↓
store returned value

Next Render
    ↓
component re-renders
    ↓
check dependencies
    ↓
same?
	── Yes → return cached value
	── No  → run callback → store new value




--------------------------------------------------

6. Dependency Array

The dependency array does NOT
cause a re-render.

It is only used to decide
whether React should recompute
the memoized value.


--------------------------------------------------

7. Important

useMemo does NOT:

- stop component re-rendering
- make code faster automatically
- replace useEffect

It only avoids recalculating
values unnecessarily.


--------------------------------------------------

8. Don't overuse useMemo

useMemo is a performance optimization.

If the calculation is cheap,
using useMemo may add unnecessary
complexity with little or no benefit.


--------------------------------------------------

9. Simple idea

Recalculate only when needed.

*/
