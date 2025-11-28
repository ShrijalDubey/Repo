import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeEditor from "./CodeEditor";
import styles from '../css/EditorNavbar.module.css';

export default function EditorNavbar() {
  const [language, setLanguage] = useState("javascript");
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.editornavcont}>
        <div className={styles.leftnav}>
          <button className={styles.editbutton} onClick={() => navigate("/")}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
          <input style={{ width: "400px" }} className={styles.editbutton} type="text" placeholder="FileName" />
        </div>
        <div className={styles.rightnav}>
          <select className={styles.editbutton} onChange={(e) => setLanguage(e.target.value)}>
            <option value={styles.javascript}>JavaScript</option>
            <option value={styles.python}>Python</option>
            <option value={styles.cpp}>C++</option>
            <option value={styles.java}>Java</option>
          </select>
          <p style={{ color: "rgba(11, 187, 1, 1)" }}>
            <i style={{ color: "rgba(11, 187, 1, 1)" }} className="fa-solid fa-check"></i> Saved
          </p>
          <button className={styles.editbutton}><i className="fa-solid fa-floppy-disk"></i> Save</button>
          <button style={{ backgroundColor: "rgba(11, 187, 1, 1)" }} className={styles.editbutton}><i className="fa-solid fa-play"></i> Run</button>
        </div>
      </div>
      <CodeEditor />
    </>
  );
}
