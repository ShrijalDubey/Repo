import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container">
      <div className="box">
        <p><Link className="logo" to="/">REPO</Link></p>
        <ul>
          <li><Link className="btn" to="/editor"><i className="fa-solid fa-code"></i> Editor</Link></li>
          <li><Link className="btn" to="/community"><i className="fa-solid fa-user-group"></i> Community</Link></li>
          <li><Link className="btn" to="/doubts"><i className="fa-regular fa-message"></i> Doubts</Link></li>
          <li><Link className="btn" to="/profile"><i className="fa-regular fa-user"></i> Profile</Link></li>
          <li><Link className="login-btn btn" to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
