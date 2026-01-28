
function Experience() {
    const experiences = [
        {
            company: "SNDIGITECH",
            role: "Fullstack Developer Intern",
            duration: "Nov 2025",
            description:
                "During my internship at SNDigitech Pvt. Ltd. as a Full Stack Developer Intern, my primary focus was on UI development and frontend implementation. I worked on creating responsive and user-friendly interfaces using modern web technologies.I collaborated closely with designers and backend developers to translate design requirements into functional UI components. Along with frontend work, I also gained exposure to backend development, where I assisted in API integration, handling data flow between frontend and backend, and ensuring smooth application functionality.This internship helped me strengthen my understanding of real-world application development, improve my UI/UX sense, and gain hands-on experience in full stack workflows.",
        },
        {
            company: "Infosys Springboard",
            role: "Certified Learner",
            duration: "2+ months",
            description:
                "Completed multiple certification courses focused on frontend technologies and software engineering fundamentals through Infosys Springboard platform.",
        },
    ];

    return (
        <div className='container skill' id="experience">


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