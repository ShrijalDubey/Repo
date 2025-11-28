import styles from '../css/Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.box}>
        <p className={styles.logo}>
          <Link to="/">
            <img
              src={logo}
              alt="Repo Logo"
              style={{
                height: '35px',
                verticalAlign: 'middle',
                horizontalAlign: 'middle',
              }}
            />
          </Link>
        </p>

        <ul>
          <li><Link className={styles.btn} to="/"><i className="fa-solid fa-house"></i>Home</Link></li>
          <li><Link className={styles.btn} to="/editor"><i className="fa-solid fa-code"></i> Editor</Link></li>
          <li><Link className={styles.btn} to="/community"><i className="fa-solid fa-user-group"></i> Community</Link></li>
          <li><Link className={styles.btn} to="/doubts"><i className="fa-solid fa-question"></i>Doubts</Link></li>
          <li><Link className={styles.btn} to="/profile"><i className="fa-solid fa-user"></i> Profile</Link></li>
          <li><Link className={`${styles.loginbtn} ${styles.btn}`} to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
