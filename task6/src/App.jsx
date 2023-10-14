import React from "react";
import "./App.css";

function App() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <div className="App">
      <nav id="desktop-nav">
        <div className="logo">Divyansh Vashist</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Divyansh Vashist</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src="src/assets/profile-pic.png"
            alt="Divyansh Vashist profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Divyansh Vashist</h1>
          <p className="section__text__p2">
            <span className="type">
              <span>
                <span>A Web Developer</span>
                <span>An App Developer</span>
                <span>A Programmer</span>
              </span>
            </span>
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() =>
                (window.location.href =
                  "//drive.google.com/drive/folders/1Vp9PbxUCtcjgck2CiVHu1wUVReGp-yGx?usp=sharing")
              }
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="src/assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/divyansh-vashist-57b788216/")
              }
            />
            <img
              src="src/assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/divyansh1406")
              }
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="src/assets/about-pic.jpg"
              alt="About pic"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="src/assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  Part of Development Team of Open Source Club <br />
                  Exploring APP & WEB Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src="src/assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  B.Tech CSE CORE
                  <br />
                  VIT, Chennai
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello there! I'm a third-year student pursuing a degree in
                Computer Science and Engineering (CSE). As an enthusiast of app
                and web development, I have been honing my coding skills by
                creating various projects in this domain. What started as a
                hobby has now become a significant part of my life, as I
                thoroughly enjoy the process of bringing ideas to life through
                programming.
              </p>
            </div>
          </div>
        </div>
        <img
          src="src/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Technologies</h2>
              <div className="article-container">
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Dart</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Flutter</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>ReactJS</h3>
                    <p>New/Beginner</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">
                Backend Technologies and Languages
              </h2>
              <div className="article-container">
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>FireBase</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Python</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Java</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>C/C++</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="src/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git/GitHub</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="src/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#projects")}
        />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="src/assets/we-talk.jpeg"
                  alt="We Talk Image"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">We Talk</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/Divyansh1406/We-Talk.git")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://drive.google.com/file/d/1eHSreJiqIrByWYagUyhxkAkPLYm_3Cva/view?usp=sharing")
                  }
                >
                  Test APK
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="src/assets/tetris.jpg"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Tetris</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/Divyansh1406/tetris.git")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://drive.google.com/file/d/1rDUfHU1eRP54fs42FbBbePR7yLjJ6cf3/view?usp=sharing")
                  }
                >
                  Test APK
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="src/assets/to-do-list.jpeg"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Notes</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/Divyansh1406/to_do_list.git")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://drive.google.com/file/d/11Sk_qyNSjGDwIFOpKc9x0OuwK6cXdRrE/view?usp=sharing")
                  }
                >
                  Test APK
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="src/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#projects")}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="src/assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:divyanshvashist01@gmail.com">
                divyanshvashist01@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="src/assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/divyansh-vashist-57b788216/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Divyansh Vashist. All Rights Reserved.</p>
      </footer>
      <script src="script.js"></script>
    </div>
  );
}

export default App;
