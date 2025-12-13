import styles from '../css/Navbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.box}>
        <p className={styles.logo}>
          <NavLink to="/">
            <img
              src={logo}
              alt="Repo Logo"
              style={{
                height: '35px',
                verticalAlign: 'middle',
                horizontalAlign: 'middle',
              }}
            />
          </NavLink>
        </p>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.btn} ${styles.active}` : styles.btn
              }
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/editor"
              className={({ isActive }) =>
                isActive ? `${styles.btn} ${styles.active}` : styles.btn
              }
            >
              <i className="fa-solid fa-code"></i> Editor
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive ? `${styles.btn} ${styles.active}` : styles.btn
              }
            >
              <i className="fa-solid fa-user-group"></i> Community
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? `${styles.btn} ${styles.active}` : styles.btn
              }
            >
              <i className="fa-solid fa-user"></i> Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `${styles.btn} ${styles.loginbtn} ${styles.active}`
                  : `${styles.btn} ${styles.loginbtn}`
              }
            >
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
