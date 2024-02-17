import React, { useEffect, useState } from "react";
import "./Messaging.css";
import { IncomingMessage } from "../components/IncomingMessage";
import { OutgoingMessage } from "../components/OutgoingMessage";
import { useLocation } from "react-router-dom";
import { chat, setUpChat } from "../services/langchat";
import { BotData } from "../botdata";
import BackNav from "../components/BackNav";
import ModalBox from "../components/ModalBox";
import { useNavigate, useBlocker } from "react-router-dom";

export default function Messaging() {
  const navigate = useNavigate();
  const location = useLocation();
  const botIndex = location.state ? location.state.botIndex : 0;
  const { name, img, initlaMessage, instructions } = BotData[botIndex];
  const [message, setMessage] = React.useState("");
  const [chatData, setChatData] = React.useState([]);
  const msgHistoryRef = React.useRef(null);
  const messageInput = React.useRef(null);


  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", setVh);
    setVh(); // Call the function immediately
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    setChatData([
      {
        message: initlaMessage,
        type: "incoming",
      },
    ]);

    setUpChat(instructions);
  }, [initlaMessage, instructions]);

  const sendMessage = (e) => {
    e.preventDefault();
    messageInput.current.disabled = true;
    messageInput.current.placeholder = "Bot is typing...";
    if (message === "") return;
    setMessage("");

    setChatData((prevChatData) => [
      ...prevChatData,
      {
        message: message,
        type: "outgoing",
      },
      {
        message: "typing...",
        type: "incoming",
      },
    ]);

    chat(message).then((response) => {
      setChatData((prevChatData) => [
        ...prevChatData.slice(0, prevChatData.length - 1),
        {
          message: response,
          type: "incoming",
        },
      ]);
      messageInput.current.disabled = false;
      messageInput.current.placeholder = "Type a message";
      messageInput.current.focus();
    });
  };

  useEffect(() => {
    if (msgHistoryRef.current) {
      msgHistoryRef.current.scrollTop = msgHistoryRef.current.scrollHeight;
    }
  }, [chatData]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <BackNav clickFn={openModal} />
      <ModalBox isOpen={isModalOpen} onClose={closeModal}>
        <p>All data will be lost. Continue?</p>
        <button className="btn btn-primary" onClick={closeModal}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Leave
        </button>
      </ModalBox>
      <div className="messaging-container">
        <div className="messaging">
          <div className="msg_history" ref={msgHistoryRef}>
            <p className="mt-1 mb-1 text-muted">
              Remember: Everything the character say is made up!
            </p>
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
          <div className="input_msg_write">
            <form onSubmit={sendMessage}>
              <input
                type="text"
                ref={messageInput}
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
    </>
  );
}
