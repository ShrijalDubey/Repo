import { useNavigate } from "react-router-dom";
import './body.css';

export default function Body() {
    const navigate = useNavigate();
  return (
    <>
    <div className="main-cont">
        <div>
            <p className='practice' ><i class="fa-solid fa-bolt"></i> Practice DSA with Real-Time Code Execution</p>
        </div>
        <div className='main-head'>
            <h1 className='main'>Master <span className='datastr'>Data Structures</span></h1>
            <h1 className='main pos'>Through Coding</h1>
        </div>
        <div className='desc-cont'>
            <p className='desc'>Write, run, and share code in Java, C++, Python, and JavaScript. Join a</p>
            <p className='desc2'> community of learners practicing algorithms together.</p>
        </div>
        <div className='btndiv'>
            <button onClick={() => navigate("/login")} className='startbtn'><i class="fa-solid fa-play"></i> Get Started</button>
            <button onClick={() => navigate("/community")} className='expbtn   '><i class="fa-solid fa-user-group"></i> Explore Community</button>
        </div>
    </div>
    </>
  );
}