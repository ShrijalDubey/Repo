import styles from '../css/Footerbox.module.css';
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <><div className={styles.footer}>
        <div className={styles.footercont}>
            <h1 className={styles.foothead}>Ready to Level Up Your Coding Skills?</h1>
            <p className={styles.footdesc}>Join thousands of developers practicing DSA daily</p>
            <button onClick={() => navigate("/editor")} className={styles.footbtn}>Start Your First Project</button>
        </div>
    </div>
    </>
  );
}