import './cards.css';
export default function Cards() {
  return (
    <>
    <div className="heading-cont">
    <div className="card-cont">
        <div  className="card">
            <i className="fa-solid fa-code image"></i>
            <h2 className='title color-text'>Multi-Language Editor</h2>
            <p className='para'>Write code in Java, C++, Python,<br/> or JavaScript with syntax highlighting<br/> and auto-save. </p>
        </div>
        <div  className="card">
            <i className="fa-solid fa-play play image"></i>
            <h2 className='title color-text'>Instant Execution</h2>
            <p className='para'>Run your code instantly and see results with execution time and memory usage.</p>
        </div>
        <div  className="card">
            <i className="fa-solid fa-share share image"></i>
            <h2 className='title color-text'>Share & Collaborate</h2>
            <p className='para'>Share your solutions<br/> with the community and learn from<br/> others' approaches.</p>
        </div>
        <div  className="card">
            <i className="fa-solid fa-user-group user image"></i>
            <h2 className='title color-text'>Active Community</h2>
            <p className='para'>Browse community solutions,<br/> discover new approaches, and get inspired.</p>
        </div>
        <div  className="card">
            <i className="fa-regular fa-message message image"></i>
            <h2 className='title color-text'>Ask Doubts</h2>
            <p className='para'>Stuck on a problem?<br/> Ask the community and get<br/> help from fellow learners.</p>
        </div>
        <div className="card">
            <i className="fa-solid fa-bolt bolt image"></i>
            <h2 className='title color-text'>Track Progress</h2>
            <p className='para'>Save your projects,track your<br/> learning journey,and build your portfolio.</p>
        </div>
    </div>
    <div className='mid-body'>
        <h1 style={{fontSize:"50px",fontWeight:"900"}}>Why Developers Love Us</h1>
        <p className='sub-para'><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> No setup required. Write code and see results immediately with our powerful execution engine.</p>
        <p className='sub-para'><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> Practice DSA concepts with real code, not just theory. Build muscle memory through repetition.</p>
        <p className='sub-para'><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> Clear error messages, starter templates, and an intuitive interface designed for learners.</p>
        <p className='sub-para'><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> Cloud-based platform accessible from any device. Your code is always saved and secure.</p>
        <p className='sub-para'><i style={{color:"rgba(11, 187, 1, 1)"}} className="fa-solid fa-circle-check"></i> Showcase your best work to the community and potential employers.</p>
    </div>
    </div>
    </>
  );
}