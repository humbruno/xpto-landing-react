import { useEffect } from "react";
import { useState } from "react";

import useHttp from "../hooks/use-http";

import UserItem from "../components/UserItem/UserItem";
import UserDetails from "../components/UserDetails/UserDetails";

const Competitors = () => {
  const [data, setData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();

  const clickHandler = (id, email) => {
    setUserDetails({
      ranking: id,
      email: email,
    });
  };

  useEffect(() => {
    sendRequest("?limit=10", setData);
  }, [sendRequest]);

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
            onClick={() => clickHandler(user.id, user.email)}
            key={user.id}
          >
            {user.name.firstname}
          </UserItem>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>All Competitors</h2>
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

export default Competitors;
