import React from "react";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";

interface Props {
  index: number;
  name: string;
  email?: string;
  phone?: string;
  address?: object;
}

const ListItem = ({ index, name, email, phone, address }: Props) => {
  return (
    <div className="user-item">
      <span className="nr">{index + 1}</span> {name}
      {email && <MdEmail className="icon-circle" />}
      {phone && <MdLocalPhone className="icon-circle" />}
      {address && <MdLocationOn className="icon-circle" />}
    </div>
  );
};

export default ListItem;
