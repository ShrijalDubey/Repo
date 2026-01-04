import styles from '../css/Navbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.box}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt="Repo Logo" />
        </NavLink>

        {/* Hamburger Icon */}
        <div
          className={styles.menuIcon}
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <ul className={`${styles.menu} ${open ? styles.show : ''}`}>
          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.btn} ${styles.active}` : styles.btn
              }
            >
              <i className="fa-solid fa-code"></i> Editor
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
