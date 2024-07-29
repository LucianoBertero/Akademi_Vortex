import React from "react";
import { UsersList } from "../components/UserList";

export const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "max Schawarst",
      image:
        "https://thegamehaus.com/wp-content/uploads/2020/09/all-league-of-legends-champions.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS}> </UsersList>;
};
