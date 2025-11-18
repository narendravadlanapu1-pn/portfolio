import "./index.css";

const HomePage = () => (
  <div className="homepage">
    {/* Hero / Intro Section */}
    <section className="hero-section">
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/dcl6z3nux/image/upload/v1762794999/Profoilo_ikfvwe.jpg"
          alt="profile"
          className="profile-img"
        />
      </div>

      <div className="hero-content">
        <h1 className="title">Welcome to My Portfolio 🚀</h1>
        <p className="descripition">
          Hi, I'm <span className="name">Narendra</span>, a passionate Full Stack Developer who loves
          building interactive and high-performance web applications.
        </p>
        <p className="descripition">
          Explore my <strong>Static</strong>, <strong>Dynamic</strong>, and <strong>Full Stack</strong> projects.  
          I focus on creating clean, modern, and user-friendly experiences.
        </p>
      </div>
    </section>

    {/* About Section */}
    <section className="card-section">
      <h3 className="about">👋 About Me</h3>
      <p className="descripition">
       I’m Narendra, a Full Stack Developer with a solid foundation in <strong>JavaScript, React, Node.js, Express, and databases like MySQL & MongoDB</strong> . I love turning ideas into functional, user-friendly applications. I completed my graduation in <strong>2025,</strong> and since then, I have been continuously learning and building projects that improve both my technical and creative skills.
      </p>
    </section>

    {/* Skills Section */}
    <section className="card-section">
      <h3 className="skills"> Skills</h3>
      <ul className="skills-list">
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
        <li><strong>Backend:</strong> Node.js, Express.js,Python</li>
        <li><strong>Database:</strong> MySQL, MongoDB,</li>
        <li><strong>Other:</strong> Git, GitHub, REST APIs</li>
      </ul>
    </section>

    {/* Projects Section */}
    <section className="card-section">
      <h3 className="projects"> Project Categories</h3>
      <ul className="project-list">
        <li><strong>Static Projects:</strong> Responsive and elegant websites</li>
        <li><strong>Dynamic Projects:</strong> Interactive apps with real-time data</li>
        <li><strong>Full Stack Projects:</strong> End-to-end web apps with backend integration</li>
      </ul>
    </section>

    {/* Contact Section */}
    <section className="card-section contact-section">
      <h3 className="heading">📬 Get In Touch</h3>
      <p className="para">Let’s collaborate or discuss opportunities!</p>
      <p>
         <a href="vadlnapunarendra9@gmail.com">Narendra</a><br />
         <a
          href="https://www.linkedin.com/in/narendra-vadlanapu-42859534a"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </a><br />
         <a
          href="https://github.com/narendravadlanapu1-pn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Profile
        </a>
      </p>
    </section>
  </div>
);

export default HomePage;
