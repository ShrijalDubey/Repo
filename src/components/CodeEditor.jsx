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
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setCode(boilerCode[language]);
    }, [language]);

    return (
        <>
        <EditorNavbar code={code} setCode={setCode} setOutput={setOutput} language={language} setIsError={setIsError} 
 />
        <div className={styles.editorpage}>
            <div className={styles.editorbox}>
                <Editor 
                    height="90vmin" 
                    language={language} 
                    value={code}
                    onChange={(value) => setCode(value)}
                    theme="vs-dark"
                    options={{
                        fontSize: 24,
                        minimap: { enabled: false },
                        padding: { top: 20 }
                    }}
                />
            </div>
            <div className={styles.outputbox} style={{ color: isError ? "red" : "green" }}>{output}</div>
        </div>
        </>
    );
}
