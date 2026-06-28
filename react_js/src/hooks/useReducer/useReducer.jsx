// import { useReducer } from "react";
// const initialState = 0;

// function reducer(state, action) {
//     switch (action) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         default:
//             return state;
//     }
// }

// const Test = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <p>Count -{count}</p>
//             <button
//                 type="button"
//                 onClick={() => {
//                     dispatch("increment");
//                 }}
//             >
//                 Increment
//             </button>
//             <button
//                 type="button"
//                 onClick={() => {
//                     dispatch("decrement");
//                 }}
//             >
//                 Decrement
//             </button>
//         </div>
//     );
// };

// export default Test;

import { useReducer } from "react";
const initialState = {
    counter: 0,
};

function reducer(state, action) {
    // console.log(action);
    switch (action.type) {
        case "increment":
            return { counter: state.counter + action.value };
        case "decrement":
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

const Test = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count -{count.counter}</p>
            <button
                type="button"
                onClick={() => {
                    dispatch({
                        type: "increment",
                        value: 1,
                    });
                }}
            >
                Increment by 1
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch({
                        type: "increment",
                        value: 5,
                    });
                }}
            >
                Increment by 5
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch({ type: "decrement" });
                }}
            >
                Decrement
            </button>
        </div>
    );
};

export default Test;
