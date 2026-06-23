/*


React useRef Hook

useRef is used to store a value that persists
between renders without causing re-render.


--------------------------------------------------

1. What useRef is

const ref = useRef(initialValue);


ref looks like:

{
    current: initialValue
}


--------------------------------------------------

2. Main idea

useRef is like a box:

- you can store value inside it
- value survives re-renders
- changing it does NOT re-render component


--------------------------------------------------

3. Example (DOM access)

const inputRef = useRef(null);

<input ref={inputRef} />

Now we can access DOM directly:

inputRef.current.focus();


--------------------------------------------------

4. Example (storing value)

const countRef = useRef(0);

countRef.current = countRef.current + 1;


Even if component re-renders,
value is still there.


--------------------------------------------------

5. Flow

component renders
    → useRef returns same object every time

update ref.current
    → value changes
    → NO re-render happens


--------------------------------------------------

6. Important difference

useState → changes trigger re-render

useRef → changes do NOT trigger re-render


--------------------------------------------------

7. Common use cases

- DOM access (input focus, scroll)
- storing previous values
- storing timers / intervals
- storing mutable variables



*/
