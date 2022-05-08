import { useEffect } from "react";
import { useState } from "react";

import useHttp from "../hooks/use-http";

import UserItem from "../components/UserItem/UserItem";
import UserDetails from "../components/UserDetails/UserDetails";

const Winners = () => {
  const [data, setData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest("?limit=3", setData);
  }, [sendRequest]);

  const clickHandler = (id, email) => {
    setUserDetails({
      ranking: id,
      email: email,
    });
  };

  let content = "";

  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (!isLoading && error) {
    content = <h3>Something went wrong!</h3>;
  } else if (!isLoading && data) {
    content = (
      <ul>
        {data.map((user) => (
          <UserItem
            key={user.id}
            onClick={() => clickHandler(user.id, user.email)}
          >
            {user.name.firstname}
          </UserItem>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Competition Winners</h2>
      {content}
      {userDetails && (
        <ul>
          <UserDetails>Ranking: {userDetails.ranking}</UserDetails>
          <UserDetails>Email: {userDetails.email}</UserDetails>
        </ul>
      )}
    </div>
  );
};

export default Winners;
