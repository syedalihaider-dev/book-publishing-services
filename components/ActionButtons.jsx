import Image from "next/image";
import { PHONE_NUMBER } from "@/config/config";

export default function ActionButtons() {
  return (
    <>
      <a href={`tel:${PHONE_NUMBER}`} className="btn btn_1">
        <div className="text">
          <span>Call Now</span>
          <span>Call Now</span>
        </div>
        <div className="icon">
          <Image src="/call-icon.png" alt="Call Icon" width={23} height={23} className="myImage" />
        </div>
      </a>
      <a href="#" className="btn btn_2 chat">
        <div className="text">
          <span>Live Chat</span>
          <span>Live Chat</span>
        </div>
        <div className="icon">
          <Image src="/chat-icon.png" alt="Chat Icon" width={23} height={23} className="myImage" />
        </div>
      </a>
    </>
  );
}
