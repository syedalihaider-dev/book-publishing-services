"use client"; // client-side component

import Image from "next/image";

export default function SingleChatButton() {
  return (
    <a href="#" className="btn btn_2 chat">
      <div className="text">
        <span>Live Chat</span>
        <span>Live Chat</span>
      </div>
      <div className="icon">
        <Image
          src="/chat-icon.png"
          alt="Chat Icon"
          width={23}
          height={23}
          className="myImage"
        />
      </div>
    </a>
  );
}