import React from 'react'
import community from '../css/Community.module.css';
import doubt from '../css/Doubts.module.css';
import photo from '../assets/pfp.png';
const styles = { ...community, ...doubt };
import ComingSoon from './ComingSoon'



export default function Doubts() {
  return (
    <>
    <ComingSoon/>
    <div className={styles.doubtscont}>
        <div className={styles.dobhero}>
            <div className={styles.dobheading}>
                <h1 style={{fontSize:"40px", fontWeight:"900" }} >Doubts & Answers</h1>
                <p>Ask questions and help others solve their coding problems</p>
            </div>
            <div className={styles.dobpost}><i className="fa-solid fa-plus"></i> Ask Doubt</div>
        </div>
        
        <div className={styles.dobgallery}>
            <div className={styles.dobcard}>
                <div className={styles.dobimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.dobcon}>
                    <div className={styles.dobtitle}>
                        <h3>React Custom Hook for API Calls</h3>
                        <p className={styles.dobcardlang}>Java</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Sarah Chen</span></p>
                    <p style={{color:"grey"}}>A reusable hook that handles loading states, errors, and data fetching with automatic cleanup short and easy to read code written in java.</p>
                    <div  className={styles.dobcodepreview}>
                        <i className="styles.fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
            <div className={styles.dobcard}>
                <div className={styles.dobimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.dobcon}>
                    <div className={styles.dobtitle}>
                        <h3>Python Fibonacci Generator</h3>
                        <p className={styles.dobcardlang} style={{backgroundColor:"green"}}>Python</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Alex Kumar</span></p>
                    <p style={{color:"grey"}}>Memory-efficient generator for Fibonacci sequence using dynamic programming.</p>
                    <div  className={styles.dobcodepreview}>
                        <i className="styles.fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
            <div className={styles.dobcard}>
                <div className={styles.dobimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.dobcon}>
                    <div className={styles.dobtitle}>
                        <h3>CSS Grid Auto-Fit Layout</h3>
                        <p className={styles.dobcardlang} style={{backgroundColor:"red"}}>Css</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Jordan Smith</span></p>
                    <p style={{color:"grey"}}>Responsive grid layout that automatically adjusts columns without media queries.</p>
                    <div  className={styles.dobcodepreview}>
                        <i className="styles.fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
            <div className={styles.dobcard}>
                <div className={styles.dobimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.dobcon}>
                    <div className={styles.dobtitle}>
                        <h3>TypeScript Generic Utility</h3>
                        <p className={styles.dobcardlang} style={{backgroundColor:"blue"}}>TypeScript</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Maya Johnson</span></p>
                    <p style={{color:"grey"}}>Type-safe deep partial utility for complex nested objects.</p>
                    <div  className={styles.dobcodepreview}>
                        <i className="styles.fa-solid fa-code"></i>  Answer Doubt
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
