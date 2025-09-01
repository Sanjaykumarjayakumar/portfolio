import Skillslist from "./Skillslist";

const Skills = () => {
  const skills = Skillslist();

  return (
    <>
    <div id="skills">
      <div className="card">
        <h1>Skills</h1>
        <h2>Programming Languages</h2>
        <div className="three">
        <div className="programminglanguages">
            {skills.slice(0,2).map((skill, index) => (
                <div className="skills" key={index}>
                <h2>{skill.name}</h2>
                <p>{skill.level}</p>
                </div>
            ))}
        </div>
        </div>
        <h2>Frontend Languages</h2>
        <div className="frontendlanguages">
            {skills.slice(2,6).map((skill, index) => (
                <div className="skills" key={index}>
                <h2>{skill.icon}</h2>
                <h2>{skill.name}</h2>
                <p>{skill.level}</p>
                </div>
            ))}
        </div>
        <h2>Backend Languages</h2>
        <div className="backendlanguages">
            {skills.slice(6,8).map((skill, index) => (
                <div className="skills" key={index}>
                <h2>{skill.icon}</h2>
                <h2>{skill.name}</h2>
                <p>{skill.level}</p>
                </div>
            ))}
        </div>
        <h2>Additional Tools</h2>
        <div className="othertools">
            {skills.slice(-1).map((skill, index) => (
                <div className="skills" key={index}>
                <h2>{skill.icon}</h2>
                <h2>{skill.name}</h2>
                <p>{skill.level}</p>
                </div>
            ))}
        </div>
        </div>
        </div>
    </>
  );
};

export default Skills;
