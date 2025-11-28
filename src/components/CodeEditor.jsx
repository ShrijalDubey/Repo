import { useState } from "react";
import Editor from "@monaco-editor/react";
import styles from '../css/CodeEditor.module.css';

export default function CodeEditor() {
  const [code, setCode] = useState("// Write your code here...");

  return (
    <div className={styles.editorpage}>
      <div className={styles.editorbox}>
        <Editor 

          height="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value)}
          options={{
            fontSize: 24,
            minimap: { enabled: false },
            fixedOverflowWidgets: true,
            overflowWidgetsDomNode: document.body,
            padding: {
      top: 20,     
      bottom: 10,   
    },
          }}
        />
      </div>

          <div className={styles.outputbox}><i>Click "Run" to see output here</i></div>

      </div>
  );
}
