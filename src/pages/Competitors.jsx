import { useEffect } from "react";
import { useState } from "react";

import useHttp from "../hooks/use-http";

const Competitors = () => {
  const [data, setData] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest("?limit=10", setData);
  }, [sendRequest]);

  let content = "";

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (!isLoading && error) {
    content = <h2>Something went wrong!</h2>;
  } else if (!isLoading && data) {
    content = (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name.firstname}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>Competitors page</h1>
      {content}
    </div>
  );
};

export default Competitors;
