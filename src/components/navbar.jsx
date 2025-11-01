import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="container">
        <div className="box">
            <h2><a className="logo" href="/codepractice">REPO</a></h2>
            <ul>
                <li><a className="btn" href="/editor"><i className="fa-solid fa-code"></i>     Editor</a></li>
                <li><a className="btn" href="/community"><i className="fa-solid fa-user-group"></i>     Community</a></li>
                <li><a className="btn" href="/doubts"><i className="fa-regular fa-message"></i>     Doubts</a></li>
                <li><a className="btn" href="/profile"><i className="fa-regular fa-user"></i>     Profile</a></li>
                <li><a className="login-btn btn" href="/login"><i className="fa-solid fa-right-to-bracket"></i>     Login</a></li>
            </ul>
        </div>
    </nav>
  );
}