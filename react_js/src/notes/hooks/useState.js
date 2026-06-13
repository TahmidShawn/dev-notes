/*
React useState note (its mental model not exactly same)

1. two "useState" layers exist

(a) public useState (what we import)

export function useState(initialState) {
    const dispatcher = resolveDispatcher();
    return dispatcher.useState(initialState);
}

1. this is just a router function (normal function)
2. it does not store state
3. it does not change behavior itself

important :
- this is a normal javascript function
- you call it like useState()
- it just forwards the call internally

(b) internal useState (method implementation)

react switches this internally:
1. mountState   → first render
2. updateState  → re-render

these live inside dispatcher as methods:

dispatcher = {
  useState: mountState OR updateState
}

important beginner idea:
- this is NOT a normal standalone function
- it is a method inside an object (dispatcher)
- react chooses which method to attach

so:
- dispatcher.useState is a method call
- it changes based on render phase

2. why two internal functions?

because react has 2 phases:

2.1 mount phase (first render)
- create state from scratch
- create hook memory
- create setState function

2.2 update phase (re-render)
- reuse previous state
- read hook list in order
- apply updates from queue

3. why same return value always?

both mountState and updateState must return:
[state, setState]

why?
react guarantees stable api

if structure changed, this would break:

const [state, setState] = useState();

so react ensures:
same output shape always

4. what actually changes?

not:
- return structure
- api shape

yes:
- internal function (mountState / updateState)
- how state is computed
- how updates are processed
- how hooks are tracked

5. dispatcher idea (core concept)

ReactSharedInternals.H = dispatcher

before render react sets:

5.1 mount phase
H = HooksDispatcherOnMount

5.2 update phase
H = HooksDispatcherOnUpdate

then flow becomes:

useState()
→ dispatcher.useState()
→ mountState OR updateState

6. why this design exists

react needs:
- same api for developers
- different behavior internally
- safe rendering system
- hook order consistency


*/
