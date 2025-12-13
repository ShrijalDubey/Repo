import styles from '../css/Cards.module.css';
export default function Cards() {
  return (
    <>
    <div className={styles.headingcont}>
    {/* <div className={styles.cardcont}>
        <div  className={styles.card}>
           <i className={`${styles.image} fa-solid fa-code`}></i>
            <h2 className={`${styles.title} ${styles.colortext}`}>Multi-Language Editor</h2>
            <p className={styles.para}>Write code in Java, C++, Python,<br/> or JavaScript with syntax highlighting<br/> and auto-save. </p>
        </div>
        <div  className={styles.card}>
            <i className={`${styles.play} ${styles.image} fa-solid fa-play`}></i>
            <h2 className={`${styles.title} ${styles.colortext}`}>Instant Execution</h2>
            <p className={styles.para}>Run your code instantly and see results with execution time and memory usage.</p>
        </div>
        <div  className={styles.card}>
            <i className={`fa-solid fa-share ${styles.share} ${styles.image}`}></i>
            <h2 className={`${styles.title} ${styles.colortext}`}>Share & Collaborate</h2>
            <p className={styles.para}>Share your solutions<br/> with the community and learn from<br/> others' approaches.</p>
        </div>
        <div  className={styles.card}>
            <i className={`fa-solid fa-user-group ${styles.user} ${styles.image}`}></i>
            <h2 className={`${styles.title} ${styles.colortext}`}>Active Community</h2>
            <p className={styles.para}>Browse community solutions,<br/> discover new approaches, and get inspired.</p>
        </div>
        <div  className={styles.card}>
            <i className={`fa-regular fa-message ${styles.message} ${styles.image}`}></i>
            <h2 className={`${styles.title} ${styles.colortext}`}>Ask Doubts</h2>
            <p className={styles.para}>Stuck on a problem?<br/> Ask the community and get<br/> help from fellow learners.</p>
        </div>
        <div className={styles.card}>
            <i className={`fa-solid fa-bolt ${styles.bolt} ${styles.image}`}></i>
            <h2 className={`${styles.title} ${styles.colortext}`}>Track Progress</h2>
            <p className={styles.para}>Save your projects,track your<br/> learning journey,and build your portfolio.</p>
        </div>
    </div> */}
    <div className={styles.midbody}>
        <h1 style={{fontSize:"50px",fontWeight:"900"}}>Why Developers Love Us</h1>
        <p className={styles.subpara}><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> No setup required. Write code and see results immediately with our powerful execution engine.</p>
        <p className={styles.subpara}><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> Practice DSA concepts with real code, not just theory. Build muscle memory through repetition.</p>
        <p className={styles.subpara}><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> Clear error messages, starter templates, and an intuitive interface designed for learners.</p>
        <p className={styles.subpara}><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> Cloud-based platform accessible from any device. Your code is always saved and secure.</p>
        
    </div>
    </div>
    </>
  );
}