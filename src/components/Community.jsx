import React from 'react'
import styles from '../css/Community.module.css'
import photo from '../assets/pfp.png';

export default function Community() {
  return (
    <>
    <div className={styles.communitycont}>
        <div className={styles.comheading}>
            <div className={styles.comhero}>
                <h1 style={{fontSize:"40px", fontWeight:"900" }} >Community Showcase</h1>
                <p>Discover and learn from solutions shared by the community</p>
            </div>  
            <div className={styles.compost}>
                <i className="fa-solid fa-plus"></i> Post
            </div>
        </div>
        <div className={styles.comsearch}>
            <input className={styles.comsearchbar} type="text" placeholder="Search REPO..." />
            <select className={styles.comlang}>
                <option style={{color:"black"}} value="javascript">JavaScript</option>
                <option style={{color:"black"}} value="java">Java</option>
                <option style={{color:"black"}} value="python">Python</option>
                <option style={{color:"black"}} value="cpp">C++</option>
            </select>
        </div>
        <div className={styles.comgallery}>
            <div className={styles.comcard}>
                <div className={styles.comimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.comcon}>
                    <div className={styles.comtitle}>
                        <h3>React Custom Hook for API Calls</h3>
                        <p className={styles.comcardlang}>Java</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Sarah Chen</span></p>
                    <p style={{color:"grey"}}>A reusable hook that handles loading states, errors, and data fetching with automatic cleanup short and easy to read code written in java.</p>
                    <div  className={styles.comcodepreview}>
                        <i className="fa-solid fa-code"></i>  Code Preview
                    </div>
                </div>
            </div>
            <div className={styles.comcard}>
                <div className={styles.comimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.comcon}>
                    <div className={styles.comtitle}>
                        <h3>Python Fibonacci Generator</h3>
                        <p className={styles.comcardlang} style={{backgroundColor:"green"}}>Python</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Alex Kumar</span></p>
                    <p style={{color:"grey"}}>Memory-efficient generator for Fibonacci sequence using dynamic programming.</p>
                    <div  className={styles.comcodepreview}>
                        <i className="fa-solid fa-code"></i>  Code Preview
                    </div>
                </div>
            </div>
            <div className={styles.comcard}>
                <div className={styles.comimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.comcon}>
                    <div className={styles.comtitle}>
                        <h3>CSS Grid Auto-Fit Layout</h3>
                        <p className={styles.comcardlang} style={{backgroundColor:"red"}}>Css</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Jordan Smith</span></p>
                    <p style={{color:"grey"}}>Responsive grid layout that automatically adjusts columns without media queries.</p>
                    <div  className={styles.comcodepreview}>
                        <i className="fa-solid fa-code"></i>  Code Preview
                    </div>
                </div>
            </div>
            <div className={styles.comcard}>
                <div className={styles.comimg}>
                    <img style={{height:"80px",borderRadius:"50%",overflow:'Hidden'}} src={photo} alt="profile picture" />  
                </div>
                <div className={styles.comcon}>
                    <div className={styles.comtitle}>
                        <h3>TypeScript Generic Utility</h3>
                        <p className={styles.comcardlang} style={{backgroundColor:"blue"}}>TypeScript</p>
                    </div>
                    <p style={{color:"grey"}}>by <span style={{fontWeight:"700"}} >Maya Johnson</span></p>
                    <p style={{color:"grey"}}>Type-safe deep partial utility for complex nested objects.</p>
                    <div  className={styles.comcodepreview}>
                        <i className="fa-solid fa-code"></i>  Code Preview
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
