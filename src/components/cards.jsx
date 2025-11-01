import './cards.css';
export default function Cards() {
  return (
    <>
    <div className="heading-cont">
    <div className="card-cont">
        <div className="card">
            <i class="fa-solid fa-code image"></i>
            <h2 className='title'>Multi-Language Editor</h2>
            <p className='para'>Write code in Java, C++, Python,<br/> or JavaScript with syntax highlighting<br/> and auto-save. </p>
        </div>
        <div className="card">
            <i class="fa-solid fa-play play image"></i>
            <h2 className='title'>Instant Execution</h2>
            <p className='para'>Run your code instantly and see results with execution time and memory usage.</p>
        </div>
        <div className="card">
            <i class="fa-solid fa-share share image"></i>
            <h2 className='title'>Share & Collaborate</h2>
            <p className='para'>Share your solutions<br/> with the community and learn from<br/> others' approaches.</p>
        </div>
        <div className="card">
            <i class="fa-solid fa-user-group user image"></i>
            <h2 className='title'>Active Community</h2>
            <p className='para'>Browse community solutions,<br/> discover new approaches, and get inspired.</p>
        </div>
        <div className="card">
            <i class="fa-regular fa-message message image"></i>
            <h2 className='title'>Ask Doubts</h2>
            <p className='para'>Stuck on a problem?<br/> Ask the community and get<br/> help from fellow learners.</p>
        </div>
        <div className="card">
            <i class="fa-solid fa-bolt bolt image"></i>
            <h2 className='title'>Track Progress</h2>
            <p className='para'>Save your projects,track your<br/> learning journey,and build your portfolio.</p>
        </div>
    </div>
    </div>
    </>
  );
}