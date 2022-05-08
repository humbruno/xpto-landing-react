import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (param, setData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://fakestoreapi.com/users${param}`);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
