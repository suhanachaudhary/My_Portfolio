
import '../index.css';

function Skills() {
  return (
    <div className='container skill' id="skills">
        <h2>Skills</h2>
        <div className="skillCol">
            <div className="frontend card">
              <h4 className='card-title'>Programming Languages </h4>
                <div className="card-body aboutLink">
                  <img src="/java.jpeg" className="iconImage" alt="" />
                  <img src="c.jpeg" className="iconImage" alt="" />
                  <img src="c++.jpeg" className="iconImage" alt="" />
                  <img src="python.jpeg" className="iconImage" alt="" />
                  <img src="javascript.jpeg"  className="iconImage"alt="" />
                  <img src="oops.jpeg" className="iconImage" alt="" />
                  <img src="sql.jpeg" className="iconImage" alt="" />
                  <img src="ds.jpeg" className="iconImage" alt="" />
                </div>
            </div>

            <div className="frontend card">
              <h4 className='card-title'>Frontend Development </h4>
                <div className="card-body aboutLink">
                  <img src="/html.jpeg" className="iconImage" alt="" />
                  <img src="css.jpeg" className="iconImage" alt="" />
                  <img src="/javascript.jpeg" className="iconImage" alt="" />
                  <img src="/react.jpeg" className="iconImage" alt="" />
                  <img src="/materialui.jpeg"  className="iconImage"alt="" />
                  <img src="bootstrap.jpeg" className="iconImage" alt="" />
                  <img src="tailwind.jpeg" className="iconImage" alt="" />
                </div>
            </div>

            <div className="frontend card">
              <h4 className='card-title'>Backend Development </h4>
                <div className="card-body aboutLink">
                  <img src="/node.jpeg" className="iconImage" alt="" />
                  <img src="express.jpeg" className="iconImage" alt="" />
                  <img src="ejs.jpeg" className="iconImage" alt="" />
                </div>
            </div>

            <div className="frontend card">
              <h4 className='card-title'>Databases </h4>
                <div className="card-body aboutLink">
                  <img src="/mongo.jpeg" className="iconImage" alt="" />
                  <img src="mysql.jpeg" className="iconImage" alt="" />
                </div>
            </div>

            <div className="frontend card">
              <h4>Tools </h4>
                <div className="card-body aboutLink">
                  <img src="/gitbash.jpeg" className="iconImage" alt="" />
                  <img src="github.jpeg" className="iconImage" alt="" />
                  <img src="npm.jpeg" className="iconImage" alt="" />
                  <img src="vscode.jpeg" className="iconImage" alt="" />
                  <img src="aws.jpeg"  className="iconImage"alt="" />
                  <img src="render.jpeg" className="iconImage" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills
