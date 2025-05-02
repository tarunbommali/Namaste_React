import { useState } from 'react';
const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {

    }, []);


    // async function getData() {
     
    // }
    return (
        <div className="user-card m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <h1>Count = {count}</h1>
            <h2>Count2 = {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: Bangalore</h3>
            <h4> Contact: +91 1234567890</h4>
        </div>
    );
};

export default User;