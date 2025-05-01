
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const handleOffline = () => setOnlineStatus(false);
        const handleOnline = () => setOnlineStatus(true);

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // Clean up the event listeners when the component is unmounted
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;



// import { useEffect, useState } from "react";
// import { useState } from "react";


// const useOnlineStatus = () => {

//     const [onlineStatus, setOnlineStatus]  = useState(true);
// useEffect(() => {

// window.addEventListener("offline", () => {
//     setOnlineStatus(false);

// });
// window.addEventListener("online", () => {
//     setOnlineStatus(true);
// });
// return () => {
//     window.removeEventListener("offline", () => {
//         setOnlineStatus(false);
//     });
//     window.removeEventListener("online", () => {
//         setOnlineStatus(true);
//     });
// };


// }, []);
// return onlineStatus;

// }


// export default useOnlineStatus;