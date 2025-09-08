import sanjay from "../assets/sanjaykumar.jpg"
const Home = ()=>{
  return(
    <>
    <div className="one">
    <div className="image">
        <img src= {sanjay} alt="sanjaykumar" />
    </div>
      <div className="Home">
        <h1>Sanjaykumar Jayakumar</h1>
        <p>A full stack developer,coder</p>
        <a href="resume.pdf" download="SanjayResume.pdf">Download Resume</a>
      </div>
      </div>
    </>
  )
}
export default Home;