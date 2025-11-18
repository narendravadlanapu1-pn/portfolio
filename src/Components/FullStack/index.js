import './index.css';

const projects = [
  {
    name: "Restaurant",
    url: "https://resturant-fortend.vercel.app/login",
    description:
      "A clean and responsive restaurant website built with React, CSS, Node.js, and MongoDB. It allows users to view menus, explore dishes, and easily navigate through the site.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757848669/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c_ezryuq.jpg",
  },
  {
    name: "MLA Dashboard",
    url: "https://public-tracker-fortend.vercel.app/home",
    description:
      "The dashboard provides a clean interface, data visualization, and quick access to updates so MLAs can make better decisions and respond to citizen needs faster.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1763449741/corr13_logo_EN_shx0m8.jpg",
  },
  {
    name:"Jobby App",
    url:"https://jobby-app-rho-one.vercel.app/login",
    description:"Jobby App – A web-based platform that allows users to log in, browse job opportunities, filter roles by type, and view detailed descriptions. Built with a responsive interface for smooth navigation.",
    image:"https://res.cloudinary.com/dyziadg5o/image/upload/v1763450100/find-job-logo-template-design_20029-959_nizkve.jpg"
  }
];

const FullStack = () => (
  <div className="page">
    <h2 className="title">Full Stack Projects</h2>
    <p className="subtitle">Here are my full stack apps using React, Node.js, and databases.</p>

    <div className="projects-container">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <img src={project.image} alt={project.name} className="project-image" />

          <h3>{project.name}</h3>
          <p>{project.description}</p>

          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <button className="visit-btn">Visit Site</button>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default FullStack;
