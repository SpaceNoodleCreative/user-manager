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

interface Props {}

const Detail = (props: Props) => {
  return (
    <div className="user-detail">
      <div className="pic">
        {/* <img src={boyIcon} /> */}
        <img src={girlIcon} />
      </div>
      <div className="text">
        <h1>User Name</h1>
        <div className="sub">Female, 25 y.o.</div>
        <div className="details-item">
          <MdEmail className="icon-circle" /> <span>email@email.com</span>
        </div>
        <div className="details-item">
          <MdLocalPhone className="icon-circle" /> <span>0629502920</span>
        </div>
        <div className="details-item">
          <MdLocationOn className="icon-circle" />{" "}
          <span>Home address 1234 Amsterdam</span>
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
