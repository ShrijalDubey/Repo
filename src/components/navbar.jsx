import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="container">
      <div className="box">
        <p className="logo">
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
          <li><Link className="btn" to="/"><i class="fa-solid fa-house"></i>Home</Link></li>
          <li><Link className="btn" to="/editor"><i className="fa-solid fa-code"></i> Editor</Link></li>
          <li><Link className="btn" to="/community"><i className="fa-solid fa-user-group"></i> Community</Link></li>
          <li><Link className="btn" to="/doubts"><i class="fa-solid fa-question"></i>Doubts</Link></li>
          <li><Link className="btn" to="/profile"><i class="fa-solid fa-user"></i> Profile</Link></li>
          <li><Link className="login-btn btn" to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
