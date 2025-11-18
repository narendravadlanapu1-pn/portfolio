import './index.css'

const projects = [
  {
    name: "Comments App",
    url: "https://comments-app-pearl.vercel.app/",
    description: "A dynamic comments app where users can add and delete comments.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757850323/comments-icon_159242-10532_acphfu.jpg",
  },
  {
    name: "Gallery App",
    url: "https://gallery-app-tidd.vercel.app/",
    description: "A responsive gallery app showcasing images dynamically.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757850521/modern-garden-logo-vector_ptzdwj.jpg",
  },
  {
    name: "App Store",
    url: "https://app-store-jet.vercel.app/",
    description: "An app store clone with category-based filtering.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757850898/Apple-App-Store-Awards-2022-Trophy_inline.jpg.slideshow-large_2x_ht6our.jpg",
  },
  {
    name: "Wikipedia Page",
    url: "https://wekipediapage.ccbp.tech/",
    description: "A simple Wikipedia search clone using API.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757850970/Wikipedia-logo-de_iffpzq.png",
  },
  {
    name: "Famous Hotel",
    url: "https://famoushotel.ccbp.tech/",
    description: "A hotel booking demo website built with dynamic features.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757851076/hotel-logo-design-template-e5520a805026e9d9a5dd660cf83185ba_screen_ouoeih.jpg",
  },
  {
    name: "Speed Test",
    url: "https://speedtest18.ccbp.tech/",
    description: "A speed test webpage to simulate network speed results.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757851395/pastille-methode_k7urxc.svg",
  },
  {
    name: "Random Jokes",
    url: "https://randomjokes18.ccbp.tech/",
    description: "Generates random jokes dynamically for fun.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757851696/67f663ff037d60001d36ae0e_vie75u.jpg",
  },
  {
    name: "Todo App",
    url: "https://todo018.ccbp.tech/",
    description: "A simple todo list app to add, delete, and track tasks.",
    image: "https://res.cloudinary.com/dyziadg5o/image/upload/v1757851760/-HVJ0Nk8pks9-172JJSBsORCJpKd9b2A6E6EcQfVsgQzBQgI5uqsFiy8bGSwscyD_w_udoz6r.png",
  },
]

const Dynamic = () => (
  <div className="page">
    <h2 className='title'>Dynamic Projects</h2>
   
    <p className='para'>Here are some dynamic projects I’ve built using JavaScript and APIs.</p>
 <hr className='line'/>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.name} className="project-img" />
          <h3 className='heading'>{project.name}</h3>
          <p className='descripitions'>{project.description}</p>
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

export default Dynamic
