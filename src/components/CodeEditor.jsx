import { useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import styles from '../css/CodeEditor.module.css';
import { LanguageContext } from "./LanguageContext";
import { boilerCode } from "./BoilerCode.js";
import EditorNavbar from "./EditorNavbar";

export default function CodeEditor() {
    const { language } = useContext(LanguageContext);

    const [code, setCode] = useState(() => {
        return localStorage.getItem(`code_${language}`) || boilerCode[language];
    });

    const [output, setOutput] = useState("Click Run To See Output...");
    const [input, setInput] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const savedCode = localStorage.getItem(`code_${language}`);
        setCode(savedCode || boilerCode[language]);
    }, [language]);

    useEffect(() => {
        localStorage.setItem(`code_${language}`, code);
    }, [code, language]);

    return (
        <>
            <EditorNavbar
                code={code}
                setCode={setCode}
                input={input}
                setOutput={setOutput}
                language={language}
                setIsError={setIsError}
            />
            <div className={styles.editorpage}>
                <div className={styles.editorbox}>
                    <Editor
                        height="88vmin"
                        language={language}
                        value={code}
                        onChange={(value) => setCode(value)}
                        theme="vs-dark"
                        options={{
                            fontSize: 24,
                            minimap: { enabled: false },
                            padding: { top: 20 },
                        }}
                    />
                </div>
                <div className={styles.io}>
                    <p className={styles.box}>&gt;  Input Box</p>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={styles.inputbox}
                        spellCheck="false"
                        placeholder="Enter input here..."
                    />
                    <p className={styles.box}>&gt;  Output Box</p>
                    <pre
                        className={styles.outputbox}
                        style={{ color: isError ? "red" : "grey" }}
                    >
                        {output}
                    </pre>
                </div>
            </div>
        </>
    );
}
