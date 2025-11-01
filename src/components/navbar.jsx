import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="container">
        <div className="box">
            <h2><a className="logo" href="/codepractice">REPO</a></h2>
            <ul>
                <li><a class="btn" href="/editor"><i class="fa-solid fa-code"></i>     Editor</a></li>
                <li><a class="btn" href="/community"><i class="fa-solid fa-user-group"></i>     Community</a></li>
                <li><a class="btn" href="/doubts"><i class="fa-regular fa-message"></i>     Doubts</a></li>
                <li><a class="btn" href="/profile"><i class="fa-regular fa-user"></i>     Profile</a></li>
                <li><a class="login-btn btn" href="/login"><i class="fa-solid fa-right-to-bracket"></i>     Login</a></li>
            </ul>
        </div>
    </nav>
  );
}