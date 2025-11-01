import "./EditorNavbar.css";
import React from 'react'
import CodeEditor  from "./CodeEditor";
export default function EditorNavbar()  {
  return (
    <>
    <div className="editor-nav-cont">
        <div className="leftnav">
            <button className="edit-button"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <input style={{ width:'400px'}} className="edit-button" type="text" placeholder="Filename"/>
        </div>
        <div className="rightnav">
            <select className="edit-button" onChange={(e) => setLanguage(e.target.value)}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
            </select>
            <p style={{ color: "rgba(11, 187, 1, 1)"}}><i class="fa-solid fa-check"></i>Saved</p>
            <button className="edit-button"><i class="fa-solid fa-floppy-disk"></i> Save</button>
            <button style={{ backgroundColor: "rgba(11, 187, 1, 1)"}} className="edit-button"><i class="fa-solid fa-play"></i> Run</button>
        </div>
    </div>
    <CodeEditor />


    </>     
  );
}


