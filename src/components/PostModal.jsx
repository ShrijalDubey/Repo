import React, { useState } from "react";
import Modal from "./Modal";
import "./Community.css";

export default function PostModal({ trigger }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span onClick={() => setIsOpen(true)}>{trigger}</span>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create a Community Post">
        <form className="form-modal">
          <input type="text" placeholder="Post Title" />
          <textarea placeholder="Write your post content here..." rows="6" />
          <button type="submit" className="submit-btn">Post</button>
        </form>
      </Modal>
    </>
  );
}
