import React from "react";
import "./OutgoingMessage.css";

export const OutgoingMessage = ({ message, date, time }) => {
  return (
    <div class="outgoing_msg">
      <div class="outgoing_msg_img">
        <img
          className="rounded-circle chat-person-img"
          src="./user.png"
          alt="outgoing"
        ></img>
      </div>
      <div class="sent_msg">
        <div className="title">
          Guest
        </div>
        <p>{message}</p>
        {/* <span class="time_date"> {time} | {date}</span> */}
      </div>
    </div>
  );
};
