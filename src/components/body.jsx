import { useNavigate } from "react-router-dom";
import styles from '../css/Body.module.css';

export default function Body() {
    const navigate = useNavigate();
  return (
    <>
    <div className={styles.maincont}>
        <div>
            <p className={styles.practice} ><i className="fa-solid fa-bolt"></i> Practice DSA with Real-Time Code Execution</p>
        </div>
        <div className={styles.mainhead}>
            <h1 className={styles.main}>Master <span className={styles.datastr}>Data Structures</span></h1>
            <h1 className={`${styles.main} ${styles.pos}`}>Through Coding</h1>
        </div>
        <div className={styles.desccont}>
            <p className={styles.desc}>Write, run, and share code in Java, C++, Python, and JavaScript. Join a</p>
            <p className={styles.desc2}> community of learners practicing algorithms together.</p>
        </div>
        <div className={styles.btndiv}>
            <button onClick={() => navigate("/login")} className={styles.startbtn}><i className="fa-solid fa-play"></i> Get Started</button>
            <button onClick={() => navigate("/community")} className={styles.expbtn}><i className="fa-solid fa-user-group"></i> Explore Community</button>
        </div>
    </div>
    </>
  );
}