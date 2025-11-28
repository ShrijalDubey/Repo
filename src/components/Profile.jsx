import React from 'react';
import logo from '../assets/profilephoto.jpg';
import styles from '../css/Profile.module.css';
import ComingSoon from './ComingSoon'

export default function Profile() {
  return (
    <>
    <ComingSoon/>
    <div className={styles.profcont}>
        <div className={styles.profhero}>
            <div>
                <img style={{height:"150px",borderRadius:"50%",overflow:"hidden"}} src={logo} alt="Profile Photo" />
            </div>
            <div>
                <p className={styles.profname} style={{display:"inline",fontSize:'38px',fontWeight:'700'}}>Shrijal Dubey</p>
                <div className={styles.profstats}>
                    <div className={styles.statbox}><p><i style={{color:"yellow"}} className="fa-solid fa-folder"></i> 45</p>REPOs Made</div>
                    <div className={styles.statbox}><p><i style={{color:"red"}} className="fa-solid fa-user-group"></i> 50</p>Community Posts</div>
                    <div className={styles.statbox}><p><i style={{color:"orange"}} className="fa-regular fa-circle-question"></i> 5</p>Doubts Asked</div>
                    <div className={styles.statbox}><p><i style={{color:"green"}} className="fa-solid fa-check"></i> 3</p>Doubts Answered</div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.proflist}>
        <div>
        <h1 style={{marginBottom:"20px"}}>My Repositories</h1>
        </div>
        <div className={styles.profilegallery}>
            <div className={styles.repocard}>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>  
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div>
                <h2>Bubble Sort</h2>
                <p>Java</p>
                </div>
                <div >
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>  
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
