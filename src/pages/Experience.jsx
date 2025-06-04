
function Experience(){
    const experiences = [
    {
      company: "SNDIGITECH",
      role: "Frontend Developer Intern",
      duration: "June 2025",
      description:
        "Developed responsive UI components, improved page performance, and collaborated with designers to implement modern frontend features using HTML, CSS, and JavaScript.",
    },
    {
      company: "Infosys Springboard",
      role: "Certified Learner",
      duration: "Ongoing",
      description:
        "Completed multiple certification courses focused on frontend technologies and software engineering fundamentals through Infosys Springboard platform.",
    },
  ];

    return(
        <div  className='container skill' id="experience">

            
            <h2>Experience</h2>

            <div className="experience-container">
                {experiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                    <h3>{exp.company}</h3>
                    <p className="role">{exp.role}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="desc">{exp.description}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Experience