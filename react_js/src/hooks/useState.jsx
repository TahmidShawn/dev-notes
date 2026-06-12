import { useState } from "react";

const Test = () => {
    let [data, setData] = useState(() => {
        console.log("running");
        return 10;
    });
    function handleClick() {
        // setData(data + 1);
        setData((prev) => prev + 1);
        // render phase not started yet
        console.log(data); // old value bcz no re render happens yet
    }
    // function handleClick() {
    //     setData((prev) => {
    //         const newValue = prev + 1;
    //         console.log(newValue);
    //         return newValue;
    //     });
    // }
    return (
        <div>
            <p>{data}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Test;

// react state vs temporary variable

// react state

// 1. Stored by React
// 2. Stays even after re-render
// 3. If it changes, UI updates
// 4. Used to show data on screen
// 5. Does not get reset when function runs again

// temporary variable

// 1. Stored inside function
// 2. Only exists while function is running
// 3. Gets removed after function finishes
// 4. Does NOT update UI
// 5.Created again every time function runs
