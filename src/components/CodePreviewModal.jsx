import React, { useState } from "react";
import Modal from "./Modal";
import "./Community.css";

export default function CodePreviewModal({ trigger }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span onClick={() => setIsOpen(true)}>{trigger}</span>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="React Custom Hook for API Calls">
        <p><strong>By Sarah Chen</strong></p>
        <pre className="code-block">
{`import { useState, useEffect } from 'react';

export function useAPI(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });
    return () => (cancelled = true);
  }, [url]);

  return { data, loading, error };
}`}
        </pre>
      </Modal>
    </>
  );
}
