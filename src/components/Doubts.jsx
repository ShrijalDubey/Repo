import React from 'react'
import './Community.css';
import './Doubts.css';
import photo from '../assets/pfp.png';
import AskDoubtModal from "./AskDoubtModal";
import AnswerDoubtModal from "./AnswerDoubtModal";


export default function Doubts() {
  return (
    <>
    <div className="doubts-cont">
        <div className="dob-hero">
            <div className="dob-heading">
                <h1 style={{fontSize:"40px", fontWeight:"900" }} >Doubts & Answers</h1>
                <p>Ask questions and help others solve their coding problems</p>
            </div>
            <div className='dob-post'><i class="fa-solid fa-plus"></i> Ask Doubt</div>
        </div>
        
        <div className="dob-gallery">
            <div className="dob-card">
                <div className='dob-img'>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className='dob-con'>
                    <div className='dob-title'>
                        <h3>React Custom Hook for API Calls</h3>
                        <p className='dob-card-lang'>Java</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Sarah Chen</span></p>
                    <p style={{color:"grey"}}>A reusable hook that handles loading states, errors, and data fetching with automatic cleanup short and easy to read code written in java.</p>
                    <div  className='dob-codepreview'>
                        <i class="fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
            <div className="dob-card">
                <div className='dob-img'>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className='dob-con'>
                    <div className='dob-title'>
                        <h3>Python Fibonacci Generator</h3>
                        <p className='dob-card-lang' style={{backgroundColor:"green"}}>Python</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Alex Kumar</span></p>
                    <p style={{color:"grey"}}>Memory-efficient generator for Fibonacci sequence using dynamic programming.</p>
                    <div  className='dob-codepreview'>
                        <i class="fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
            <div className="dob-card">
                <div className='dob-img'>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className='dob-con'>
                    <div className='dob-title'>
                        <h3>CSS Grid Auto-Fit Layout</h3>
                        <p className='dob-card-lang' style={{backgroundColor:"red"}}>Css</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Jordan Smith</span></p>
                    <p style={{color:"grey"}}>Responsive grid layout that automatically adjusts columns without media queries.</p>
                    <div  className='dob-codepreview'>
                        <i class="fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
            <div className="dob-card">
                <div className='dob-img'>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className='dob-con'>
                    <div className='dob-title'>
                        <h3>TypeScript Generic Utility</h3>
                        <p className='dob-card-lang' style={{backgroundColor:"blue"}}>TypeScript</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Maya Johnson</span></p>
                    <p style={{color:"grey"}}>Type-safe deep partial utility for complex nested objects.</p>
                    <div  className='dob-codepreview'>
                        <i class="fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
