import React, { useState } from "react";
import Modal from "./Modal";
import "./Community.css";

export default function AskDoubtModal({ trigger }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span onClick={() => setIsOpen(true)}>{trigger}</span>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Ask a Doubt">
        <form className="form-modal">
          <input type="text" placeholder="Doubt Title" />
          <textarea placeholder="Explain your doubt..." rows="5" />
          <textarea
            placeholder="Paste your code here..."
            className="code-input"
            rows="8"
          />
          <button type="submit" className="submit-btn">Ask</button>
        </form>
      </Modal>
    </>
  );
}
