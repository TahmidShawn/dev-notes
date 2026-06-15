import { useEffect, useState } from "react";

const Test = () => {
    // useEffect runs after the component has rendered and the UI is updated in the browser
    // let count = 0;
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    useEffect(() => {
        // side effect
        // count++;
        console.log("use effect");
        return () => {
            // clean up logic
        };
    }, [count]); // dependency array
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Test;
