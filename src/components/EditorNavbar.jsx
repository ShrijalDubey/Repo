import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import styles from '../css/EditorNavbar.module.css';
import { executeCode } from "../api";

export default function EditorNavbar({ code, setOutput, language, setIsError,input }) {
    const navigate = useNavigate();
    const { setLanguage } = useContext(LanguageContext);

    async function handleRun() {
    if (!code) return;
    setOutput("Running...");
    try {
        const result = await executeCode(code, language,input);

        const stderr = result?.run?.stderr;
        const stdout = result?.run?.output;

        if (stderr) {
            const lines = stderr.split("\n").slice(1, 7).join("\n");
            setOutput(lines);
            setIsError(true);
        } else {
            setOutput(stdout || "No output");
            setIsError(false);
        }
    } catch (error) {
        console.error(error);
        setOutput("Error running code");
        setIsError(true);
    }
}

    return (
        <div className={styles.editornavcont}>
            <div className={styles.leftnav}>
                <button className={styles.editbutton} onClick={() => navigate("/")}>
                    <i className="fa-solid fa-arrow-left"></i> Back
                </button>

                <input className={styles.filename} type="text" placeholder="Untitled File" />

                <button className={`${styles.editbutton} ${styles.runbtn}`} onClick={handleRun}>
                    <i className="fa-solid fa-play"></i> Run
                </button>
            </div>

            <div className={styles.rightnav}>
                <select className={styles.select} onChange={(e) => setLanguage(e.target.value)} value={language}>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                </select>

                <p className={styles.saved}>
                    <i style={{ color: "rgba(11, 187, 1, 1)" }} className="fa-solid fa-check"></i> Saved
                </p>

                <button className={styles.editbutton}>
                    <i className="fa-solid fa-floppy-disk"></i> Save
                </button>
            </div>
        </div>
    );
}
