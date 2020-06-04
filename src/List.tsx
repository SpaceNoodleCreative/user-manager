import React, { useState } from "react";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import Detail from "./Detail";
import ListItem from "./ListItem";

interface Props {
  users: any[];
}

const List = (props: Props) => {
  const users = props.users;
  return (
    <div className="user-list">
      {users.map((item, index) => (
        <React.Fragment key={item.id}>
          <ListItem {...item} index={index} />
          <Detail {...item} index={index} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default List;
