import React from "react";
import "./OutgoingMessage.css";

export const OutgoingMessage = ({ message, date, time }) => {
  return (
    <div className="outgoing_msg">
      <div className="outgoing_msg_img">
        <img
          className="rounded-circle chat-person-img"
          src="./user.jpg"
          alt="outgoing"
        ></img>
      </div>
      <div className="sent_msg">
        <div className="title">
          Guest
        </div>
        <p>{message}</p>
        {/* <span className="time_date"> {time} | {date}</span> */}
      </div>
    </div>
  );
};
