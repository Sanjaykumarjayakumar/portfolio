import "@fortawesome/fontawesome-free/css/all.min.css";
const Skillslist = () => {
  const skills = [
    {
  icon : <i className="fa-solid fa-code"></i>,
  name : "C",
  level : "Intermediate"
},
{
  icon : <i className="fa-solid fa-mug-saucer"></i>,
  name : "Java",
  level : "Intermediate"
},

    {
        icon : <i className="fa-brands fa-html5"></i>,
        name : 'Html',
        level : "Intermediate"
    },
    {
        icon : <i className="fa-brands fa-css3-alt"></i>,
        name : 'CSS',
        level : "Intermediate"
    },
    {
        icon : <i className="fa-brands fa-js-square"></i>,
        name : 'JavaScript',
        level : "Intermediate"
    },
    {
        icon : <i className="fa-brands fa-react"></i>,
        name : 'ReactJS',
        level : "Intermediate"
    },
    {
        icon : <i className="fa-brands fa-node-js"></i>,
        name : 'NodeJS',
        level : "Beginner"
    },
    {
        icon : <i className="fa-solid fa-database"></i>,
        name : 'MongoDB',
        level : "Beginner"
    },
    {
        icon : <i className="fa-brands fa-git-alt"></i>,
        name : 'Git',
        level : "Beginner"
    }
  ]
  return skills;
};

export default Skillslist;
