import React from "react";
import boyIcon from "./img/boy.svg";
import girlIcon from "./img/girl.svg";
import {
  MdLocationOn,
  MdLocalPhone,
  MdEmail,
  MdEdit,
  MdClose,
} from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";

interface Props {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: {
    suite?: string;
    street?: string;
    zipcode?: string;
    city?: string;
  };
}

const Detail = ({ id, name, email, phone, address }: Props) => {
  const streetAddress = address
    ? `${address.suite} ${address.street} ${address.zipcode} ${address.city} `
    : null;
  return (
    <div className="user-detail">
      <div className="pic">
        {/* <img src={boyIcon} /> */}
        <img src={girlIcon} />
      </div>
      <div className="text">
        <h1>{name}</h1>
        <div className="sub">
          <IoMdFemale className="gen-icon" />
          {/* <IoMdMale className="gen-icon" /> */}
          25 y.o.
        </div>
        <div className="details-item">
          <MdEmail className="icon-circle" /> <span>{email}</span>
        </div>
        <div className="details-item">
          <MdLocalPhone className="icon-circle" /> <span>{phone}</span>
        </div>
        <div className="details-item">
          <MdLocationOn className="icon-circle" /> <span>{streetAddress}</span>
        </div>
      </div>
      <div className="btn-wrap">
        <button className="pr">
          <MdEdit /> Edit
        </button>
        <button className="sec">
          <MdClose /> Close
        </button>
      </div>
    </div>
  );
};

export default Detail;

// to do:
// - show fields if not empty
