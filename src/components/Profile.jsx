import React from 'react';
import logo from '../assets/profilephoto.jpg';
import './Profile.css';
import java from "../assets/java.png";
import python from "../assets/pyt.svg";
import cpp from "../assets/css.png";
import javascript from "../assets/js.png";
import { MdDeleteForever } from "react-icons/md";

export default function Profile() {
  return (
    <>
    <div className='prof-cont'>
        <div className='prof-hero'>
            <div>
                <img style={{height:"150px",borderRadius:"50%",overflow:"hidden"}} src={logo} alt="Profile Photo" />
            </div>
            <div>
                <p className="prof-name" style={{display:"inline",fontSize:'38px',fontWeight:'700'}}>Shrijal Dubey</p>
                <div className='prof-stats'>
                    <div className='statbox'><p><i style={{color:"yellow"}} class="fa-solid fa-folder"></i> 45</p>REPOs Made</div>
                    <div className='statbox'><p><i style={{color:"red"}} class="fa-solid fa-user-group"></i> 50</p>Community Posts</div>
                    <div className='statbox'><p><i style={{color:"orange"}} class="fa-regular fa-circle-question"></i> 5</p>Doubts Asked</div>
                    <div className='statbox'><p><i style={{color:"green"}} class="fa-solid fa-check"></i> 3</p>Doubts Answered</div>
                </div>
            </div>
        </div>
    </div>
    <div className='prof-list'>
        <div>
        <h1 style={{marginBottom:"20px"}}>My Repositories</h1>
        </div>
        <div className='profile-gallery'>
            <div className='repo-card'>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >  
                    <button className='view-repo'>View REPO</button>
                </div>
            </div>
            <div className='repo-card'>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <button className='view-repo'>View REPO</button>
                </div>
            </div>
            <div className='repo-card'>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <button className='view-repo'>View REPO</button>
                </div>
            </div>
            <div className='repo-card'>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <button className='view-repo'>View REPO</button>
                </div>
            </div>
            <div className='repo-card'>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <button className='view-repo'>View REPO</button>
                </div>
            </div>
            <div className='repo-card'>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <button className='view-repo'>View REPO</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
