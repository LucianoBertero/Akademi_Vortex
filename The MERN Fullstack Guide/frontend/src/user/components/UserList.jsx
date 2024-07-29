import React from "react";
import "./UserList.css";
import { UserItem } from "./UserItem";

export const UserList = (props) => {
  if (!Array.isArray(props.items) || props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};