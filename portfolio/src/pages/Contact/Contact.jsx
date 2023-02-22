import react from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  function handlePhoneClick() {
    const el = document.createElement("textarea");
    el.value = "(516)-737 3400";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setPhoneCopied(true);
  }
  function handleEmailClick() {
    const el = document.createElement("textarea");
    el.value = "lrajic997@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setEmailCopied(true);
  }

  return (
    <div className="container">
      <h1 className="title">Contact Me</h1>
      <div className="grid">
        <div className="box" onClick={handlePhoneClick}>
          {phoneCopied ? "Copied!" : "Copy to Clipboard"}
          <FaPhone className="icon" />
          516-737 3400
        </div>
        <div className="box" onClick={handleEmailClick}>
          {emailCopied ? "Copied!" : "Copy to Clipboard"}
          <FaEnvelope className="icon" />
          Lrajic997@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
