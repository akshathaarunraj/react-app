import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
 
    useEffect(() => {
      function handleOnline() {
        console.log("NET comes back");
        setIsOnline(true);
      }
      function handleOffline() {
        console.log("NET goes off");
        setIsOnline(false);
      }
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }, []);
   
    return isOnline;
}

export default useOnlineStatus