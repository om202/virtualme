import React from "react";
import "./Messaging.css";
import { IncomingMessage } from "../components/IncomingMessage";
import { OutgoingMessage } from "../components/OutgoingMessage";

const chatData = [
  {
    message:
      "Bro why are you speaking like this? I am not able to understand. Are you okay? I heard that you are not well. What happened? Can you tell me? I am here to help you.",
    date: "Feb 4",
    time: "11:37 AM",
    type: "incoming",
  },
  {
    message:
      "I am in Hospital. I am not feeling well. Actually I am suffering from fever. So I am not able to speak properly. I got admitted to the hospital yesterday. I am feeling very weak.",
    date: "Feb 4",
    time: "11:38 AM",
    type: "outgoing",
  },
  {
    message: "Which Hospital are you in right now?",
    date: "Feb 4",
    time: "11:38 AM",
    type: "incoming",
  },
  {
    message: "I am in Apollo Hospital",
    date: "Feb 4",
    time: "11:38 AM",
    type: "outgoing",
  },
  {
    message: "I will come to meet you",
    date: "Feb 4",
    time: "11:38 AM",
    type: "incoming",
  },
  {
    message: "I'll be there in about 30 minutes.",
    date: "Feb 4",
    time: "11:40 AM",
    type: "incoming",
  },
  {
    message: "Okay, see you then.",
    date: "Feb 4",
    time: "11:41 AM",
    type: "outgoing",
  },
  {
    message: "Take care, bro.",
    date: "Feb 4",
    time: "11:42 AM",
    type: "incoming",
  },
  {
    message: "You too. Bye.",
    date: "Feb 4",
    time: "11:42 AM",
    type: "outgoing",
  },
  {
    message: "You too. Bye.",
    date: "Feb 4",
    time: "11:42 AM",
    type: "outgoing",
  },
];

export default function Messaging() {
  return (
    <div class="container-fluid messaging-container">
      <div class="messaging">
        <div class="inbox_msg">
          <div class="mesgs">
            <div class="msg_history">
              {chatData.map((chat, index) => {
                if (chat.type === "incoming") {
                  return (
                    <IncomingMessage
                      key={index}
                      message={chat.message}
                      date={chat.date}
                      time={chat.time}
                    />
                  );
                } else {
                  return (
                    <OutgoingMessage
                      key={index}
                      message={chat.message}
                      date={chat.date}
                      time={chat.time}
                    />
                  );
                }
              })}
            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input
                  type="text"
                  class="write_msg"
                  placeholder="Type a message"
                />
                <button
                  class="msg_send_btn"
                  type="button"
                  aria-label="Send Message"
                >
                  <i class="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
