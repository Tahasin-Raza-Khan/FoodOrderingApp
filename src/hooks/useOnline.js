import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    const handleSetOnline = () => {
      setOnline(true);
    };
    const handleSetOffline = () => {
      setOnline(false);
    };
    window.addEventListener("online", handleSetOnline);
    window.addEventListener("offline", handleSetOffline);
    return () => {
      window.removeEventListener("online", handleSetOnline);
      window.removeEventListener("offline", handleSetOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
