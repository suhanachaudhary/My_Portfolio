

function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className='projects container' id="projects">

        <a href="https://myshop-frontend-42dr.onrender.com/" className='show'>
          <div className="card">
            <img src="/Myshop.PNG" className="card-img-top projectImage" alt="MyShop E-Commerce"></img>

            <div className="card-body">
              <h5 className="card-title">MyShop – Modern E-Commerce Web Application</h5>
              <p className="card-text">
                A fully responsive modern e-commerce web application with Amazon-like cart
                functionality and checkout flow, built using React.js and Tailwind CSS.
              </p>

              <a href="#" className="btn btn-primary">React.js</a>
              <a href="#" className="btn btn-primary">Redux</a>
              <a href="#" className="btn btn-primary">JavaScript</a>
              <a href="#" className="btn btn-primary">Tailwind CSS</a>
              <a href="#" className="btn btn-primary">Node.js</a>
            </div>
          </div>
        </a>

        <a href="https://focusflowfrontend.onrender.com" className='show'>
          <div className="card">
            <img src="/focusflow.jpeg" className="card-img-top projectImage" alt="..."></img>

            <div className="card-body">
              <h5 className="card-title">FocusFlow Productivity Website</h5>
              <p className="card-text">A perfect tool for students & professional to boost focus,track habits,summarize content & retain knowledge efficiently.</p>
              <a href="#" className="btn btn-primary">React.js</a>
              <a href="#" className="btn btn-primary">Express.js</a>
              <a href="#" className="btn btn-primary">MongoDB</a>
              <a href="#" className="btn btn-primary">Node.js</a>
              <a href="#" className="btn btn-primary">Material UI</a>
              <a href="#" className="btn btn-primary">JavaScript</a>
              <a href="#" className="btn btn-primary">Tailwind CSS</a>
            </div>
          </div>
        </a>


        <a href="https://wanderlust-travell.onrender.com/" className='show'>
          <div className="card">
            <img src="/wanderlust.PNG" className="card-img-top projectImage" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">WanderLust Travelling Website</h5>
              <p className="card-text">Wanderlust is a full-stack travel web application where users can sign up, explore vacation destinations, add reviews and ratings, and perform full CRUD operations on travel experiences.</p>
              <a href="#" className="btn btn-primary">MongoDB</a>
              <a href="#" className="btn btn-primary">Express.js</a>
              <a href="#" className="btn btn-primary">Node.js</a>
              <a href="#" className="btn btn-primary">EJS</a>
              <a href="#" className="btn btn-primary">Bootstrap</a>
              <a href="#" className="btn btn-primary">CSS</a>
            </div>
          </div>
        </a>


      </div>
    </>
  )
}

export default Projects
