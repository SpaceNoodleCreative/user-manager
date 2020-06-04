import React, { useState } from "react";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import Detail from "./Detail";

interface Props {
  id: string;
  index: number;
  name: string;
  email?: string;
  phone?: string;
  address?: object;
}

const ListItem = ({ id, index, name, email, phone, address }: Props) => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div>
      <div
        className={"user-item " + (selected && "selected")}
        onClick={() => setSelected(!selected)}
      >
        <span className="nr">{index + 1}</span> {name}
        {email && <MdEmail className="icon-circle" />}
        {phone && <MdLocalPhone className="icon-circle" />}
        {address && <MdLocationOn className="icon-circle" />}
      </div>
      <Detail
        id={id}
        name={name}
        email={email}
        phone={phone}
        address={address}
        selected={selected}
      />
    </div>
  );
};

export default ListItem;
