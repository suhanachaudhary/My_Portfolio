
import '../index.css';
function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top navbarHeight mb-4">
            <div className="container">
                <a className="navbar-brand logoName" href="#home">Programmer</a>

                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto navLink">
                        <a className="nav-a active mx-2" href="#home">Home</a>
                        <a className="nav-a active mx-2" href="#about">About</a>
                        <a className="nav-a active mx-2" href="#skills">Skills</a>
                        <a className="nav-a active mx-2" href="#projects">Project</a>
                        <a className="nav-a active mx-2" href="#interests">Interest</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
