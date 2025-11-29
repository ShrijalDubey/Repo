import React from 'react';
import logo from '../assets/profilephoto.jpg';
import styles from '../css/Profile.module.css';

export default function Profile() {
  return (
    <>
    <div className={styles.profcont}>
        <div className={styles.profhero}>
            <div className={styles.namecard}>
            <div>
                <img style={{height:"150px",borderRadius:"30%",overflow:"hidden"}} src={logo} alt="Profile Photo" />
            </div>
            <div>
                <p className={styles.profname} style={{display:"inline",fontSize:'38px',fontWeight:'700'}}>_ShrijalDubey</p>
                <div className={styles.profstats}>
                    <div className={styles.statbox}><p><i style={{color:"yellow"}} className="fa-solid fa-folder"></i> 3</p>REPOs Made</div>
                    <div className={styles.statbox}><p><i style={{color:"red"}} className="fa-solid fa-user-group"></i> 50</p>Community Posts</div>
                </div>
                </div>
            </div>
            <div className={styles.addbtn}>
                <button className={styles.compost}>
                                <i className="fa-solid fa-plus"></i> New Project
                </button>
            </div>
        </div>
    </div>
    <div className={styles.proflist}>
        <div>
        <h1 style={{marginBottom:"20px",marginLeft:"10px"}}>  My Snippets</h1>
        </div>
        <div className={styles.profilegallery}>
            <div className={styles.repocard}>
                <div className={styles.leftcard}>
                    <div className={styles.langpic}></div>
                    <div><h2>Bubble Sort</h2>
                        <p style={{color:"#686868"}}>Language : Java</p>
                        <p style={{color:"#686868"}}>upload time : 00:00</p>
                    </div>
                </div>
                <div className={styles.rightrepo}>
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div className={styles.leftcard}>
                    <div className={styles.langpic}></div>
                    <div><h2>Hash Table</h2>
                        <p style={{color:"#686868"}}>Language : Java</p>
                        <p style={{color:"#686868"}}>upload time : 00:00</p>
                    </div>
                </div>
                <div className={styles.rightrepo}>
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div className={styles.leftcard}>
                    <div className={styles.langpic}></div>
                    <div><h2>Snake Game</h2>
                        <p style={{color:"#686868"}}>Language : Java</p>
                        <p style={{color:"#686868"}}>upload time : 00:00</p>
                    </div>
                </div>
                <div className={styles.rightrepo}>
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div className={styles.leftcard}>
                    <div className={styles.langpic}></div>
                    <div><h2>Snake Game</h2>
                        <p style={{color:"#686868"}}>Language : Java</p>
                        <p style={{color:"#686868"}}>upload time : 00:00</p>
                    </div>
                </div>
                <div className={styles.rightrepo}>
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div className={styles.leftcard}>
                    <div className={styles.langpic}></div>
                    <div><h2>Snake Game</h2>
                        <p style={{color:"#686868"}}>Language : Java</p>
                        <p style={{color:"#686868"}}>upload time : 00:00</p>
                    </div>
                </div>
                <div className={styles.rightrepo}>
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div className={styles.leftcard}>
                    <div className={styles.langpic}></div>
                    <div><h2>Snake Game</h2>
                        <p style={{color:"#686868"}}>Language : Java</p>
                        <p style={{color:"#686868"}}>upload time : 00:00</p>
                    </div>
                </div>
                <div className={styles.rightrepo}>
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            <div className={styles.repocard}>
                <div className={styles.leftcard}>
                    <div className={styles.langpic}></div>
                    <div><h2>Snake Game</h2>
                        <p style={{color:"#686868"}}>Language : Java</p>
                        <p style={{color:"#686868"}}>upload time : 00:00</p>
                    </div>
                </div>
                <div className={styles.rightrepo}>
                    <i className={`fa-solid fa-trash-can ${styles.image}`}></i>   
                    <button className={styles.viewrepo}>View REPO</button>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
