import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    
    return (
        <div className="error">
        <h1>OOPS!!! </h1>
        <h1> Something went wrorng!!!</h1>
       
        <h3>
            {err.status} : {err.statusText}
        </h3>
        </div>
    );
    }

export default Error;