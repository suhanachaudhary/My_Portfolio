
function About() {
  return (
    <>
      <div className="homePage container" id="about">
        <div className="image card">
          <img src="/about.png" className="card-img mt-4 myimage" alt="Profile of Suhana" />
          <div className="card-body profileLink">
            <a
              className="nav-a active mx-2 card-link"
              href="https://www.linkedin.com/in/suhana-chaudhary-1bb4a7279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="nav-a active mx-2 card-link"
              href="https://github.com/suhanachaudhary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              className="nav-a active mx-2 card-link"
              href="https://leetcode.com/u/suhanarida/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-code"></i>
            </a>
          </div>
        </div>

        <div className="introduction card">
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p className="card-text">
              I'm Suhana, a passionate computer science engineering student with a focus on Java development, MERN stack development, software development, and web development.
            </p>
            <p className="card-text">
              I have a strong command of programming languages like C, Java, JavaScript, and Python, which I utilize to build robust and efficient applications. I am skilled in frontend development using React.js and have expertise in backend development using Node.js. I have hands-on experience with databases like MongoDB and MySQL for efficient data storage and retrieval.
            </p>
            <p className="card-text">
              Additionally, I am proficient in using tools like MS Word, MS Excel, and VS Code. With a constant thirst for knowledge, I actively learn new technologies.
            </p>
            
          <a href="/resume_suhana11.pdf"  className="btn btnHome btn-outline-info">Get My Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
