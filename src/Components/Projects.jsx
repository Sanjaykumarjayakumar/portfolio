import Projectlist from "./Projectlist"
const Projects = ()=>{
    const project = Projectlist()
    return(
        <>
        <div className="projects">
            <h1>Projects</h1>
            <div className="four">
            {project.map((a, index) => (
                <div className="project" key={index}>
                <h2>{a.name}</h2>
                <p>{a.des}</p>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}
export default Projects;