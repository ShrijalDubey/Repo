import { useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import styles from '../css/CodeEditor.module.css';
import { LanguageContext } from "./LanguageContext";
import { boilerCode } from "./BoilerCode.js";
import EditorNavbar from "./EditorNavbar";

export default function CodeEditor() {
    const { language } = useContext(LanguageContext);
    const [code, setCode] = useState(boilerCode[language]);
    const [output, setOutput] = useState("Click Run to see output...");
    
     useEffect(() => {
    setCode(boilerCode[language]);
  }, [language]);

  return (
    <>
    <EditorNavbar code={code} setOutput={setOutput} />
    <div className={styles.editorpage}>
      

      <div className={styles.editorbox}>
        <Editor 
        height="90vmin" 
        language={language} 
        defaultValue="// Write your code here..."
        theme="vs-dark"
        value={code}
      onChange={(value) => setCode(value)}
        options={{
          fontSize: 24,
          minimap: {
          enabled: false,
        },
        padding: { top: 20 }
  }} />
      </div>
          <div className={styles.outputbox}>{output}</div>
      </div>
      </>
  );
}
