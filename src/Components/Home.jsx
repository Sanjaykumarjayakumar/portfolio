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
            <button>Download Resume</button>
      </div>
      </div>
    </>
  )
}
export default Home;