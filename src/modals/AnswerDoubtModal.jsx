import React, { useState } from "react";
import Modal from "./Modal";
import "./Community.css";

export default function AnswerDoubtModal({ trigger }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span onClick={() => setIsOpen(true)}>{trigger}</span>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Answer a Doubt">
        <form className="form-modal">
          <textarea placeholder="Write your answer..." rows="5" />
          <textarea
            placeholder="Write your code solution here..."
            className="code-input"
            rows="8"
          />
          <button type="submit" className="submit-btn">Submit Answer</button>
        </form>
      </Modal>
    </>
  );
}
