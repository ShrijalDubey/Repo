import React, { useEffect } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, title, children }) {
  // Prevent background scroll while modal open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose} /* click overlay to close */
      role="dialog"
      aria-modal="true"
      aria-label={title || "Modal"}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} /* prevent overlay close when clicking inside */
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
