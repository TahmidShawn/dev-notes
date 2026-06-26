// import { useRef, useState } from "react";

// const Test = () => {
//     const ref = useRef(0);
//     const [count, setCount] = useState(0);

//     console.log("Render");

//     function handleRef() {
//         ref.current++;

//         console.log("ref.current:", ref.current);
//         console.log("No re-render happened");
//     }

//     function handleState() {
//         setCount((prev) => prev + 1);
//     }

//     return (
//         <div>
//             <h2>State: {count}</h2>

//             <button onClick={handleRef}>Update Ref</button>

//             <button onClick={handleState}>Update State</button>
//         </div>
//     );
// };

// export default Test;

// ---------------------------------------------------------------------------------------

import { useEffect, useRef } from "react";

const Test = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" />

            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
};

export default Test;
