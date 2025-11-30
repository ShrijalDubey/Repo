import { useNavigate } from "react-router-dom";
import styles from '../css/Body.module.css';
import java from "../assets/java.png";
import js from "../assets/js.png";
import pyt from "../assets/pyt.svg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

export default function Body() {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.maincont}>
                
                <p className={styles.practice}>
                    <i className="fa-solid fa-bolt"></i> Rapid Execution And Programming Online
                </p>

                <div className={styles.mainhead}>
                    <h1 className={styles.main}>Master <span className={styles.datastr}>Data Structures</span></h1>
                    <h1 className={`${styles.main} ${styles.pos}`}>Through Coding</h1>
                </div>

                <div className={styles.btndiv}>
                    <button onClick={() => navigate("/login")} className={styles.startbtn}>
                        <i className="fa-solid fa-play"></i> Get Started
                    </button>

                    <button onClick={() => navigate("/community")} className={styles.expbtn}>
                        <i className="fa-solid fa-user-group"></i> Explore Community
                    </button>
                </div>

                <div className={styles.stack}>
                    <img src={img1} className={`${styles.card} ${styles.small}`} alt="" />
                    <img src={img2} className={`${styles.card} ${styles.mid}`} alt="" />
                    <img src={img3} className={`${styles.card} ${styles.big}`} alt="" />
                    <img src={img4} className={`${styles.card} ${styles.mid}`} alt="" />
                    <img src={img5} className={`${styles.card} ${styles.small}`} alt="" />
                </div>

                <div className={styles.langcont}>
                    <div className={styles.langallery}>
                        <div className={styles.langbox}><img style={{height:"30px"}} src={java}/>Java</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src={js}/>Javascript</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src={pyt}/>Python</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/color/48/c-plus-plus-logo.png"/>C++</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/fluency/48/c-programming.png"/>C</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/ios/50/go-programming-language.png"/>Go</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/color/48/swift.png"/>Swift</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/color/48/lua-language.png"/>Lua</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/color/48/ruby-programming-language.png"/>Ruby</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/color/48/rust-programming-language.png"/>Rust</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/color/48/kotlin.png"/>Kotlin</div>
                        <div className={styles.langbox}><img style={{height:"30px"}} src="https://img.icons8.com/nolan/64/php-logo.png"/>Php</div>
                    </div>
                </div>

            </div>
        </>
    );
}
