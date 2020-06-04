import React from "react";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import Detail from "./Detail";

interface Props {
  users: any[];
}

const List = (props: Props) => {
  const users = props.users;
  return (
    <div className="user-list">
      {users.map(({ id, name, email, phone, address }, index) => (
        <div className="user-item" key={id}>
          <span className="nr">{index + 1}</span> {name}
          {email && <MdEmail className="icon-circle" />}
          {phone && <MdLocalPhone className="icon-circle" />}
          {address && <MdLocationOn className="icon-circle" />}
        </div>
      ))}
      <Detail />
    </div>
  );
};

export default List;
