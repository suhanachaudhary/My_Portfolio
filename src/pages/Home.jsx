
import '../index.css';
function Home() {
  return (
    <>
      <div className='homePage container' id="home">
        <div className="introduction card">
          <div className="card-body">

            <h2 className="card-title">Hello, I am Suhana</h2>
            <p className="card-text">Hello! I am a final-year B.Tech Computer Science and Engineering student at Shri Ram Group of Colleges, with a strong academic record and a CGPA of 8.3. My coursework includes core computer science subjects such as Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, and Data Structures & Algorithms.

              Since beginning my academic journey in 2022, I have consistently focused on strengthening my technical foundation and applying theoretical knowledge through practical projects and internships. With an expected graduation year of 2026, I am eager to begin my professional career as a fresher and contribute my skills, enthusiasm, and learning mindset to real-world technology solutions.</p>

            <a href="https://drive.google.com/file/d/1u0vBc1RInHjjwhtWAiRlpM04kNgVJVja/view?usp=drive_link" className="btn btnHome btn-outline-info">Get My Resume</a>
            <a href="mailto:suhanachaudhary212@gmail.com" className="btn btnHome btn-outline-info">Hire me!</a>
          </div>
        </div>

        <div className="image card">
          <img src="/image.png" className="card-img mt-4 ms-auto myimage" alt="" />
          <div className="card-body profileLink">

            <a className="nav-a active mx-2 card-link" href="https://www.linkedin.com/in/suhana-chaudhary-1bb4a7279/"><i className="fa-brands fa-linkedin"></i></a>

            <a className="nav-a active mx-2 card-link" href="https://github.com/suhanachaudhary"><i className="fa-brands fa-square-github"></i></a>

            <a className="nav-a active mx-2 card-link" href="https://leetcode.com/u/suhanarida/  "><i className="fa-solid fa-code"></i></a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
