import axios from "axios";
import { useEffect, useState } from "react";
import useFullPageLoader from "./useFullPageLoader";

const useLocality = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [local, setLocal] = useState([]);
  const [defaultPark, setDefaultpark] = useState([]);

  useEffect(() => {
    const getData = () => {
      showLoader();

      fetch("http://parkingkoi.xyz/laravel_api/public/monthly-places-v2")
        .then((response) => response.json())
        .then((json) => {
          hideLoader();
          setDefaultpark(json);
        });
    };

    getData();
  }, []);
  return { local, setLocal, defaultPark, setDefaultpark, loader };
};
export default useLocality;
