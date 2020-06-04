import React, { useState } from "react";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import Detail from "./Detail";

interface Props {
  users: any[];
}

const List = (props: Props) => {
  const users = props.users;
  return (
    <div className="user-list">
      {users.map((item, index) => (
        <React.Fragment key={item.id}>
          <div className="user-item">
            <span className="nr">{index + 1}</span> {item.name}
            {item.email && <MdEmail className="icon-circle" />}
            {item.phone && <MdLocalPhone className="icon-circle" />}
            {item.address && <MdLocationOn className="icon-circle" />}
          </div>
          <Detail {...item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default List;
