const { useState, useEffect } = React;


/* =========================
   DATA
========================= */

const skills = [
  {
    name: "HTML",
    level: 99,
    icon: "🌐"
  },

  {
    name: "CSS",
    level: 90,
    icon: "🎨"
  },

  {
    name: "JavaScript",
    level: 70,
    icon: "⚡"
  },

  {
    name: "React",
    level: 60,
    icon: "⚛️"
  },

  {
    name: "C++",
    level: 90,
    icon: "💻"
  },

  {
    name: "DSA",
    level: 80,
    icon: "🧠"
  },

  {
    name: "Git & GitHub",
    level: 98,
    icon: "🔗"
  },

  {
    name: "SQL",
    level: 78,
    icon: "🗄️"
  }
];


const projects = [

  {
    category: "web",
    number: "01",
    title: "Personal Portfolio",
    description:
      "A premium responsive developer portfolio with animations, modern UI and interactive sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🚀",
    github: "https://github.com/ajaykumarstm12345677-gif",
    live: "https://ajay-portfolio-seven-zeta.vercel.app"
  },

  {
    category: "web",
    number: "02",
    title: "Modern Web App",
    description:
      "A responsive web application focused on clean UI, smooth interactions and usability.",
    tech: ["JavaScript", "CSS", "HTML"],
    icon: "💻",
    github: "https://github.com/ajaykumarstm12345677-gif",
    live: "#"
  },

  {
    category: "programming",
    number: "03",
    title: "C++ DSA Project",
    description:
      "A programming project focused on data structures, algorithms and problem solving.",
    tech: ["C++", "DSA"],
    icon: "🧠",
    github: "https://github.com/ajaykumarstm12345677-gif",
    live: "#"
  },

  {
    category: "web",
    number: "04",
    title: "Responsive Landing Page",
    description:
      "A modern landing page designed for desktop, tablet and mobile devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "📱",
    github: "https://github.com/ajaykumarstm12345677-gif",
    live: "#"
  },

  {
    category: "programming",
    number: "05",
    title: "Algorithm Visualizer",
    description:
      "Interactive project for understanding algorithms and programming logic.",
    tech: ["JavaScript", "DSA"],
    icon: "📊",
    github: "https://github.com/ajaykumarstm12345677-gif",
    live: "#"
  },

  {
    category: "web",
    number: "06",
    title: "Student Dashboard",
    description:
      "A clean dashboard interface designed for students and educational applications.",
    tech: ["React", "CSS", "JavaScript"],
    icon: "🎓",
    github: "https://github.com/ajaykumarstm12345677-gif",
    live: "#"
  }

];


const services = [

  {
    icon: "💻",
    title: "Web Development",
    text:
      "Modern, fast and responsive websites using clean and scalable code."
  },

  {
    icon: "📱",
    title: "Responsive Design",
    text:
      "Web experiences that look beautiful on mobile, tablet and desktop."
  },

  {
    icon: "🎨",
    title: "UI Development",
    text:
      "Clean interfaces with modern layouts, animations and smooth interactions."
  },

  {
    icon: "⚡",
    title: "Programming",
    text:
      "C++, DSA and problem solving with strong programming fundamentals."
  }

];


/* =========================
   NAVBAR
========================= */

function Navbar({ theme, setTheme }) {

  const [menu, setMenu] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"]
  ];

  return (

    <nav className="navbar">

      <a
        href="#home"
        className="logo"
      >
        AJ<span>.</span>
      </a>


      <div
        className={
          menu
            ? "nav-links open"
            : "nav-links"
        }
      >

        {links.map(([name, link]) => (

          <a
            key={name}
            href={link}
            onClick={() => setMenu(false)}
          >
            {name}
          </a>

        ))}

      </div>


      <div className="nav-actions">

        <button
          className="theme-btn"
          onClick={() =>
            setTheme(
              theme === "dark"
                ? "light"
                : "dark"
            )
          }
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>


        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "✕" : "☰"}
        </button>

      </div>

    </nav>

  );

}


/* =========================
   HERO
========================= */

function Hero() {

  const [typed, setTyped] = useState("");

  const words = [
    "Web Developer",
    "Frontend Developer",
    "C++ Programmer",
    "CSE Student"
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setTyped(
        words[wordIndex].slice(
          0,
          index
        )
      );

      index++;

      if (
        index >
        words[wordIndex].length
      ) {

        clearInterval(interval);

        setTimeout(() => {

          setWordIndex(
            (prev) =>
              (prev + 1) %
              words.length
          );

        }, 1200);

      }

    }, 80);

    return () =>
      clearInterval(interval);

  }, [wordIndex]);


  return (

    <section
      id="home"
      className="hero"
    >

      <div className="hero-content">

        <div className="availability">

          <span></span>

          Available for opportunities

        </div>


        <p className="hero-small">
          HELLO, I'M
        </p>


        <h1>

          Ajay

          <span>Kumar</span>

        </h1>


        <h2>

          I'm a{" "}

          <strong>
            {typed}
            <i>|</i>
          </strong>

        </h2>


        <p className="hero-description">

          I create modern, responsive and
          interactive digital experiences
          with clean code and creative design.

        </p>


        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn primary"
          >
            Explore My Work
            <span>↗️</span>
          </a>


          <a
            href="ajay-resume.pdf"
            download
            className="btn secondary"
          >
            Download Resume
            <span>↓</span>
          </a>

        </div>


        <div className="hero-socials">

          <a
            href="https://github.com/ajaykumarstm12345677-gif"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ajay-sahu-78a021431/"
            target="_blank"
          >
            LinkedIn
          </a>

          {/* <a href="mailto:ajaykumarstm12345677@gmail.com"
            class="email-btn">
            Email
          </a> */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ajaykumarstm12345677@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-btn"
          >
            Email
          </a>

        </div>

      </div>


      <div className="hero-visual">

        <div className="orbit orbit-1"></div>

        <div className="orbit orbit-2"></div>


        <div className="profile-wrapper">

          <div className="profile-glow"></div>

          <img
            src="ajay.png"
            alt="Ajay Kumar"
            className="profile-image"
          />

        </div>


        <div className="floating floating-1">
          <b>⚡</b>
          <span>Creative</span>
        </div>


        <div className="floating floating-2">
          <b>&lt;/&gt;</b>
          <span>Developer</span>
        </div>


        <div className="floating floating-3">
          <b>🚀</b>
          <span>Learning</span>
        </div>

      </div>


      <a
        href="#about"
        className="scroll-indicator"
      >
        <span>Scroll</span>
        ↓
      </a>

    </section>

  );

}


/* =========================
   ABOUT
========================= */

function About() {

  return (

    <section id="about">

      <div className="container">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2 className="section-title">

          Building ideas into

          <span>
            digital experiences.
          </span>

        </h2>


        <div className="about-grid">

          <div className="about-text glass">

            <div className="about-tag">
              👋 A little about me
            </div>

            <h3>
              Passionate about
              technology & creativity.
            </h3>

            <p>
              I'm Ajay Kumar, a B.Tech Computer
              Science Engineering student and
              passionate developer.
            </p>

            <p>
              I enjoy building websites,
              learning new technologies and
              solving programming problems.
            </p>

            <p>
              My goal is to become a skilled
              software developer and create
              products that are useful,
              beautiful and easy to use.
            </p>

          </div>


          <div className="stats-grid">

            <div className="stat glass">

              <strong>10+</strong>

              <span>
                Projects
              </span>

            </div>


            <div className="stat glass">

              <strong>8+</strong>

              <span>
                Technologies
              </span>

            </div>


            <div className="stat glass">

              <strong>2+</strong>

              <span>
                Years Learning
              </span>

            </div>


            <div className="stat glass">

              <strong>∞</strong>

              <span>
                Curiosity
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}


/* =========================
   SKILLS
========================= */

function Skills() {

  return (

    <section id="skills">

      <div className="container">

        <p className="section-label">
          MY SKILLS
        </p>

        <h2 className="section-title">

          Tools I use to

          <span>
            build things.
          </span>

        </h2>


        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              className="skill glass"
              key={skill.name}
            >

              <div className="skill-heading">

                <div>

                  <span className="skill-icon">
                    {skill.icon}
                  </span>

                  <strong>
                    {skill.name}
                  </strong>

                </div>

                <span>
                  {skill.level}%
                </span>

              </div>


              <div className="skill-bar">

                <div
                  style={{
                    width:
                      `${skill.level}%`
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}


/* =========================
   SERVICES
========================= */

function Services() {

  return (

    <section id="services">

      <div className="container">

        <p className="section-label">
          WHAT I DO
        </p>

        <h2 className="section-title">

          My

          <span>
            expertise.
          </span>

        </h2>


        <div className="services-grid">

          {services.map((service) => (

            <div
              className="service glass"
              key={service.title}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

              <div className="service-arrow">
                →
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}


/* =========================
   PROJECTS
========================= */

function Projects() {

  const [filter, setFilter] =
    useState("all");


  const filtered =
    filter === "all"
      ? projects
      : projects.filter(
        (project) =>
          project.category === filter
      );


  return (

    <section id="projects">

      <div className="container">

        <p className="section-label">
          MY WORK
        </p>

        <h2 className="section-title">

          Selected

          <span>
            projects.
          </span>

        </h2>


        <div className="filters">

          <button
            className={
              filter === "all"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("all")
            }
          >
            All
          </button>


          <button
            className={
              filter === "web"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("web")
            }
          >
            Web
          </button>


          <button
            className={
              filter === "programming"
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter("programming")
            }
          >
            Programming
          </button>

        </div>


        <div className="projects-grid">

          {filtered.map((project) => (

            <article
              className="project glass"
              key={project.number}
            >

              <div className="project-top">

                <span>
                  {project.number}
                </span>

                <div className="project-icon">
                  {project.icon}
                </div>

              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="tech-list">

                {project.tech.map(
                  (tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  )
                )}

              </div>


              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                >
                  GitHub ↗️
                </a>

                <a
                  href={project.live}
                  target="_blank"
                >
                  Live Demo ↗️
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}


/* =========================
   EDUCATION
========================= */

function Education() {

  return (

    <section id="education">

      <div className="container">

        <p className="section-label">
          MY JOURNEY
        </p>

        <h2 className="section-title">

          Education &

          <span>
            learning.
          </span>

        </h2>


        <div className="timeline">

          <div className="timeline-line"></div>


          <div className="timeline-item">

            <div className="timeline-dot">
              01
            </div>

            <div className="timeline-card glass">

              <small>
                2024 — PRESENT
              </small>

              <h3>
                B.Tech — Computer Science Engineering
              </h3>

              <p>
                Currently pursuing Bachelor of
                Technology in Computer Science
                Engineering.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              02
            </div>

            <div className="timeline-card glass">

              <small>
                PRESENT
              </small>

              <h3>
                Web Development
              </h3>

              <p>
                Learning modern frontend
                development, JavaScript,
                React and responsive design.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              03
            </div>

            <div className="timeline-card glass">

              <small>
                PRESENT
              </small>

              <h3>
                Programming & DSA
              </h3>

              <p>
                Practicing C++, data structures,
                algorithms and problem solving.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}


/* =========================
   CONTACT
========================= */

function Contact() {

  const [sent, setSent] =
    useState(false);


  function submitForm(e) {

    e.preventDefault();

    const form =
      e.target;

    const name =
      form.name.value;

    const email =
      form.email.value;

    const message =
      form.message.value;


    const subject =
      encodeURIComponent(
        `Portfolio Contact from ${name}`
      );


    const body =
      encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );


    window.location.href =
      `mailto:ajaykumarstm12345677@gmail.com?subject=${subject}&body=${body}`;


    setSent(true);

  }


  return (

    <section id="contact">

      <div className="container">

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2 className="section-title">

          Let's create

          <span>
            something great.
          </span>

        </h2>


        <div className="contact-grid">

          <div className="contact-info">

            <div className="contact-badge">
              💬 Let's talk
            </div>

            <h3>
              Have an idea?
              <br />
              <span>
                Let's build it.
              </span>
            </h3>

            <p>
              Whether you have a project,
              an opportunity or just want
              to say hello, feel free to
              reach out.
            </p>


            <div className="contact-details">

              <a href="mailto:ajaykumar12345677@gmail.com">

                <span>✉️</span>

                <div>
                  <small>Email</small>
                  <b>
                  yourmail@gmail.com
                  </b>
                </div>

              </a>


              <a
                href="https://github.com/ajaykumarstm12345677-gif"
                target="_blank"
              >

                <span>💻</span>

                <div>
                  <small>GitHub</small>
                  <b>
                    github.com/yourusername
                  </b>
                </div>

              </a>


              <a
                href="https://www.linkedin.com/in/ajay-sahu-78a021431/"
                target="_blank"
              >

                <span>🔗</span>

                <div>
                  <small>LinkedIn</small>
                  <b>
                    LinkedIn Profile
                  </b>
                </div>

              </a>

            </div>

          </div>


          <form
            className="contact-form glass"
            onSubmit={submitForm}
          >

            <label>
              Your Name
            </label>

            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />


            <label>
              Your Email
            </label>

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />


            <label>
              Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>


            <button
              type="submit"
              className="btn primary send-btn"
            >
              {sent
                ? "Opening Email..."
                : "Send Message →"}
            </button>

          </form>

        </div>

      </div>

    </section>

  );

}


/* =========================
   FOOTER
========================= */

function Footer() {

  return (

    <footer>

      <div className="footer-inner">

        <div>

          <div className="logo">
            AJ<span>.</span>
          </div>

          <p>
            Building digital experiences
            with passion.
          </p>

        </div>


        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </div>


      <div className="copyright">

        ©️ {new Date().getFullYear()}
        {" "}Ajay Kumar(Sahu). All rights reserved.

      </div>

    </footer>

  );

}


/* =========================
   APP
========================= */

function App() {

  const [theme, setTheme] =
    useState("dark");


  useEffect(() => {

    document.body.dataset.theme =
      theme;

  }, [theme]);


  useEffect(() => {

    const sections =
      document.querySelectorAll(
        "section"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    sections.forEach(
      (section) =>
        observer.observe(section)
    );


    return () =>
      observer.disconnect();

  }, []);


  return (

    <>

      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <main>

        <Hero />

        <About />

        <Skills />

        <Services />

        <Projects />

        <Education />

        <Contact />

      </main>


      <Footer />

    </>

  );

}


ReactDOM
  .createRoot(
    document.getElementById("root")
  )
  .render(<App />);