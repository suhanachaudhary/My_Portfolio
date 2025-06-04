
import '../index.css';
function Home() {
  return (
    <>
      <div className='homePage container' id="home">
        <div className="introduction card">
          <div className="card-body">

          <h2 className="card-title">Hello, I am Suhana</h2>
          <p className="card-text">Hello! I am currently pursuing my education at Shri Ram Group of Colleges, where I have been excelling academically with a remarkable CGPA of 8.3 in the first four semesters. My major coursework focuses on essential subjects such as Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, Data Structures and Algorithms. Since beginning my educational journey in 2022, I have been dedicated to expanding my knowledge and skills in the field of computer science. With an expected graduation year of 2026, I am eager to leverage my education to contribute meaningfully to the world of technology and embark on exciting opportunities.</p>

          <a href="https://drive.google.com/file/d/180RT_oUTcUbKFG-L6vR9nC09AG1CPlv2/view"  className="btn btnHome btn-outline-info">Get My Resume</a>
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
