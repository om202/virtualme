import React, { useEffect } from "react";
import "./Messaging.css";
import { IncomingMessage } from "../components/IncomingMessage";
import { OutgoingMessage } from "../components/OutgoingMessage";
import { useLocation } from "react-router-dom";
import { chat } from "../services/langchat";

export default function Messaging() {
  const location = useLocation();
  const { name, img } = location.state;
  const [message, setMessage] = React.useState("");
  const [chatData, setChatData] = React.useState([]);
  const msgHistoryRef = React.useRef(null);

  useEffect(() => {
    setChatData([
      {
        message: "Hello, I am Elon Musk. Nice to meet you!",
        type: "incoming",
      },
    ]);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message === "") return;
    setMessage("");
    const tempChatData = [
      ...chatData,
      {
        message: 'typing...',
        type: "incoming",
      },
    ];
    setChatData(tempChatData);
    chat(message).then((response) => {
      const newChatData = [
        ...chatData,
        {
          message: message,
          type: "outgoing",
        },
        {
          message: response,
          type: "incoming",
        },
      ];
      setChatData(newChatData);
    });
  };

  useEffect(() => {
    if (msgHistoryRef.current) {
      msgHistoryRef.current.scrollTop = msgHistoryRef.current.scrollHeight;
    }
  }, [chatData]);

  return (
    <div className="container-fluid messaging-container">
      <div className="messaging">
        <div className="mesgs">
          <div className="msg_history" ref={msgHistoryRef}>
            {chatData.map((chat, index) => {
              if (chat.type === "incoming") {
                return (
                  <IncomingMessage
                    key={index}
                    message={chat.message}
                    name={name}
                    img={img}
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
          <div className="type_msg">
            <div className="input_msg_write">
              <form onSubmit={sendMessage}>
                <input
                  type="text"
                  className="write_msg"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="msg_send_btn"
                  type="submit"
                  aria-label="Send Message"
                >
                  <i className="bi bi-send"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
