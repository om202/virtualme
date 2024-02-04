import React from "react";
import "./IncomingMessage.css";

export const IncomingMessage = ({ message, date, time }) => {
  return (
    <div class="incoming_msg">
      <div class="incoming_msg_img">
        <img
          className="rounded-circle chat-person-img"
          src="./ghost.png"
          alt="incoming"
        ></img>
      </div>
      <div class="received_msg">
        <div className="title">
          Ghost
        </div>
        <div class="received_withd_msg">
          <p>{message}</p>
          {/* <span class="time_date">
            {time} | {date}
          </span> */}
        </div>
      </div>
    </div>
  );
};
