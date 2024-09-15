import { useState, useEffect } from "react";
import { Menu_API } from "./constants";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData?.data);
  };
  return resInfo;
};

export default useRestuarantMenu;
