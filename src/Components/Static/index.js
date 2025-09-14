import './index.css'

const projects = [
  {
    name: "FoodHub Website",
    url: "https://foodhub23.ccbp.tech",
    description: "A modern food delivery website built with HTML & CSS.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757848669/food-logo-silhouette-black-color-illustration-vector_ys5myj.jpg", // Replace with real screenshot if you have
  },
  {
    name: "My College Website",
    url: "https://mycollege23.ccbp.tech",
    description: "A responsive college info website built using HTML & CSS.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757849141/icon_x9e33l.jpg", 
  },
  {
    name: "Cricket Page",
    url: "https://cricketpage18.ccbp.tech",
    description: "A cricket fan page showcasing teams and match details.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757849299/cricket-player-logo-design-illustration-vector_p2ludv.jpg",
  },
]

const Static = () => (
  <div className="page">
    <h2>Static Projects</h2>
    <p>Here are some static websites I’ve built using HTML & CSS.</p>

    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.name} className="project-img" />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Static
