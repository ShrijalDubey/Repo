import './footerbox.css';
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <><div className='footer'>
        <div className='footer-cont'>
            <h1 className='foothead'>Ready to Level Up Your Coding Skills?</h1>
            <p className='footdesc'>Join thousands of developers practicing DSA daily</p>
            <button onClick={() => navigate("/editor")} className='footbtn'>Start Your First Project</button>
        </div>
    </div>
    </>
  );
}