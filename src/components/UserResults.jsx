import { GithubContext } from "context/github/githubContext";
import React, { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  
  const { users, isLoading } = useContext(GithubContext);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users &&
          users.map((user) => (
            <UserItem user={user} key={user.login} />
          ))}
      </div>
    </div>
  );
};

export default UserResults;
