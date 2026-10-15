import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Faizan<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact Me
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">HELLO, I'M FAIZAN GOURI</p>

            <h1>
              I Build Modern
              <span> Web Experiences.</span>
            </h1>

            <p className="hero-description">
              I'm a web developer learning and building responsive websites
              using React, JavaScript and CSS.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore My Work ↗️
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-skills">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="code-card">
              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
                <p>developer.jsx</p>
              </div>
              <div className="code-body">
                <p>
                  <span className="code-purple">const</span> developer = {"{"}
                </p>
                <p className="code-indent">
                  name: <span className="code-green">'Faizan Gouri'</span>,
                </p>
                <p className="code-indent">
                  role: <span className="code-green">'Web Developer'</span>,
                </p>
                <p className="code-indent">
                  passion:{" "}
                  <span className="code-green">'Building for the web'</span>
                </p>
                <p>{"}"}</p>
                <br />
                <p>
                  <span className="code-purple">function</span>{" "}
                  <span className="code-blue">createWebsite</span>() {"{"}
                </p>
                <p className="code-indent">
                  return <span className="code-green">'Something great!'</span>
                </p>
                <p>{"}"}</p>
              </div>
              <div className="code-footer">
                <span className="online-dot"></span> Available to learn &
                collaborate
              </div>
            </div>
            <div className="floating-badge">✦ Clean Code. Creative Ideas.</div>
          </div>
        </section>

        <section className="intro-strip" id="about">
          <p>
            Turning ideas into <strong>useful web experiences.</strong>
          </p>
          <a href="#projects">See my projects ↗️</a>
        </section>

        <section className="content-section" id="skills">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>My Skills</h2>
          <p className="section-description">
            Technologies I'm learning and using to build websites.
          </p>
          <div className="skills-grid">
            <article className="skill-card">
              <span>01</span>
              <h3>HTML & CSS</h3>
              <p>Website structure, styling and responsive layouts.</p>
            </article>
            <article className="skill-card">
              <span>02</span>
              <h3>JavaScript</h3>
              <p>Interactive features and programming fundamentals.</p>
            </article>
            <article className="skill-card">
              <span>03</span>
              <h3>React.js</h3>
              <p>Reusable components and modern user interfaces.</p>
            </article>
            <article className="skill-card">
              <span>04</span>
              <h3>Git & GitHub</h3>
              <p>Learning version control and project management.</p>
            </article>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <p className="section-label">SOME OF MY WORK</p>
          <h2>Featured Projects</h2>
          <p className="section-description">
            Real projects built while learning and improving my skills.
          </p>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-number">PROJECT / 01</div>
              <h3>Belim Electrician Service</h3>
              <p>
                A responsive website that helps customers explore electrician
                services and contact the business.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>Responsive</span>
              </div>
              <a
                href="https://belimelectricianservice.in/"
                target="_blank"
                rel="noreferrer"
              >
                View Live Website ↗️
              </a>
            </article>
            <article className="project-card">
              <div className="project-number">PROJECT / 02</div>
              <h3>Gouri Mart</h3>
              <p>
                An e-commerce learning project focused on product browsing,
                shopping cart and wishlist features.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <p className="project-status">In development</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">LET'S CONNECT</p>
          <h2>Have a project in mind?</h2>

          <p>
            I'm continuing to learn web development and looking forward to
            connecting with people and exploring opportunities.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/917976822075?text=Hi%20Faizan%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              WhatsApp Me ↗️
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=faizangouri77@gmail.com&su=Website%20Development%20Inquiry"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Email Me ↗️
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          Faizan<span>.</span>
        </a>
        <p>Designed & built with React and CSS.</p>
        <a
          href="https://github.com/faizalkhan25"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗️
        </a>
      </footer>
    </div>
  );
}

export default App;
