import React from "react";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";

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
          {email && <MdEmail className="icon" />}
          {phone && <MdLocalPhone className="icon" />}
          {address && <MdLocationOn className="icon" />}
        </div>
      ))}
    </div>
  );
};

export default List;
