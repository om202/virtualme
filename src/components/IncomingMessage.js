import React from "react";
import "./IncomingMessage.css";

export const IncomingMessage = ({ message, name, img }) => {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          className="rounded-circle chat-person-img"
          src={img}
          alt="incoming"
        ></img>
      </div>
      <div className="received_msg">
        <div className="title">
          {name}
        </div>
        <div className="received_withd_msg">
          <p>{message}</p>
          {/* <span className="time_date">
            {time} | {date}
          </span> */}
        </div>
      </div>
    </div>
  );
};
