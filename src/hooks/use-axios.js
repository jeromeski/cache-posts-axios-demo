import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [controller, setController] = useState();
  const fetchPosts = async (url) => {
    const ctrl = new AbortController();
    try {
      setController(ctrl);
      const res = await axios.get(url, { signal: ctrl.signal });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => controller?.abort();
  }, [controller]);
  return [data, fetchPosts];
};

export default useAxios;
