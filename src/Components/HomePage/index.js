import './index.css'

const HomePage = () => (
  <div className="homepage">
    {/* Hero Section */}
    <h2>Welcome to My Portfolio 🚀</h2>
    <p>Explore my Static, Dynamic, and Full Stack projects.  
       I’m passionate about building modern, user-friendly, and efficient applications.</p>

    {/* About Me */}
    <section className="about-section">
      <h3>👋 About Me</h3>
      <p>
        Hi, I'm [Your Name], a web developer who loves turning ideas into interactive
        digital experiences. I specialize in frontend, backend, and full stack projects
        using technologies like <strong>React, Node.js, Express, MySQL, and Python</strong>.
      </p>
    </section>

    {/* Skills */}
    <section className="skills-section">
      <h3>🛠️ Skills</h3>
      <ul>
        <li>Frontend: HTML, CSS, JavaScript, React</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MySQL, MongoDB</li>
        <li>Other: Git, GitHub, REST APIs</li>
      </ul>
    </section>

    {/* Projects Overview */}
    <section className="projects-section">
      <h3>📂 Project Categories</h3>
      <p>Check out my work organized into three categories:</p>
      <ul>
        <li><strong>Static Projects:</strong> Clean and responsive static websites</li>
        <li><strong>Dynamic Projects:</strong> Interactive apps with APIs and state management</li>
        <li><strong>Full Stack Projects:</strong> End-to-end applications with backend & frontend</li>
      </ul>
    </section>

    {/* Contact Section */}
    <section className="contact-section">
      <h3>📬 Get In Touch</h3>
      <p>If you’d like to collaborate or have opportunities, feel free to connect:</p>
      <p>
        📧 Email: <a href="mailto:youremail@example.com">youremail@example.com</a><br />
        💼 LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a><br />
        🌐 GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">github.com/yourgithub</a>
      </p>
    </section>
  </div>
)

export default HomePage
