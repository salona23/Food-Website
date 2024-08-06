
import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>Something went wrong</h2>
            <h3>Your Internet is slow, spend some money on it </h3>
            <p>{err.status} : {err.statusText}</p>
           
        </div>
    );

}

export default Error;