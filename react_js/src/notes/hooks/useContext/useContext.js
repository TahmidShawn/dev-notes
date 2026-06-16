/*
React useContext Hook

useContext is used when we want to share data between components
without passing props manually through every level.

This solves prop drilling problem.

Example:
Instead of sending props like this:

App → Layout → Sidebar → UserProfile

we can directly access the data in UserProfile using context.


--------------------------------------------------

1. How Context works

We first create a context:

const ThemeContext = createContext("light");

1. This creates a container for data.
2. It does not store state.
3. It does not magically make data global.

It just defines a channel where values can be shared.


--------------------------------------------------

2. Provider

<ThemeContext.Provider value={theme}>
    <App />
</ThemeContext.Provider>

1. Provider decides what value will be available
for all components inside it.

2.If value changes, React updates all components
that are using this context.


--------------------------------------------------

3. useContext

const theme = useContext(ThemeContext);

This is how we read the value.

React finds the nearest Provider above this component
and returns its value.

If no Provider is found, it uses the default value
from createContext.


--------------------------------------------------

4. How React actually handles it

When component renders and hits useContext:

- React checks the current Provider in the tree
- reads its stored value
- gives it to the component
- also remembers that this component depends on this context


So later if Provider value changes,
React knows which components to re-render.


--------------------------------------------------

5. Re-render behavior

When Provider value changes:

- parent component re-renders
- new value is passed to Provider
- React compares old and new value (Object.is)
- if value changed, all consuming components re-render


Important:
Only components that use that context will re-render
(not the whole tree automatically, but still affected by normal React rendering)


--------------------------------------------------

6. Nearest Provider wins

If multiple Providers exist:

<ThemeContext.Provider value="dark">
    <ThemeContext.Provider value="light">
        <Child />
    </ThemeContext.Provider>
</ThemeContext.Provider>

Child will get "light"

React always picks the closest Provider above.


--------------------------------------------------

7. What useContext does NOT do

- it does not create state
- it does not store data globally
- it does not prevent re-renders
- it does not replace state management tools
- it does not fetch data

It only reads the value from Context.


--------------------------------------------------

8. When Context is useful

Good use cases:
- theme (dark/light)
- logged in user
- language
- small global settings

Not good for:
- frequently changing data
- complex state logic
- large application state management

*/
