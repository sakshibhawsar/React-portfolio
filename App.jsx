import React, { useState } from 'react';
import './index.css';
import Profile from './assets/young_women-removebg-preview.png';    

export default function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header className="bg-grey">
        <nav className="navbar">
          <div className="logo">SB.</div>
          <ul className={`navlist ${isNavActive ? 'navlist-active' : ''}`} id="navlist">
            <li>
              <a href="#home" className="active navlinks">Home</a>
            </li>
            <li>
              <a href="#about" className="navlinks">About</a>
            </li>
            <li>
              <a href="#project" className="navlinks">Projects</a>
            </li>
            <li>
              <a href="#task" className="navlinks">Task</a>
            </li>
            <li>
              <a href="#contact" className="navlinks">Contact Me</a>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>

      {/* Other sections remain unchanged */}
  
      <main>
        <section className="hero-section bg-grey" id="home">
          <div className="container">
            <div className="row-container">
              <div className="content">
                <h3>Hello!</h3>
                <h1>I'm Sakshi Bhawsar</h1>
                <h2>Web Designer</h2>
                <p>B.Tech student and Web Designer. Currently Learning MERN Stack</p>
                <div className="actions">
                  <a href="#" className="primary-btn">Download CV</a>
                  <a href="#" className="primary-btn" data-type="inverted-btn">Contact Me</a>
                </div>
              </div>
              <div className="image-container">
                <img src={Profile} alt="profile" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section bg-light-pink about">
          <div className="container">
            <div className="column-container">
              <div className="content">
                <h3>Why Choose Me</h3>
                <h1>My skills</h1>
              </div>
              <div className="skill-container">
                <div className="skill-bar-container">
                  <div className="info">
                    <small>HTML</small>
                    <small>80%</small>
                  </div>
                  <div className="skill-level">
                    <div className="skill-bar html"></div>
                  </div>
                </div>
                <div className="skill-bar-container">
                  <div className="info">
                    <small>CSS</small>
                    <small>75%</small>
                  </div>
                  <div className="skill-level">
                    <div className="skill-bar css"></div>
                  </div>
                </div>
                <div className="skill-bar-container">
                  <div className="info">
                    <small>Tailwind CSS</small>
                    <small>65%</small>
                  </div>
                  <div className="skill-level">
                    <div className="skill-bar tailwindcss"></div>
                  </div>
                </div>
                <div className="skill-bar-container">
                  <div className="info">
                    <small>C/C++</small>
                    <small>80%</small>
                  </div>
                  <div className="skill-level">
                    <div className="skill-bar c"></div>
                  </div>
                </div>
                <div className="skill-bar-container">
                  <div className="info">
                    <small>MS Office</small>
                    <small>90%</small>
                  </div>
                  <div className="skill-level">
                    <div className="skill-bar msoffice"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="section bg-white" id="about">
          <div className="container">
            <div className="row-container">
              <div className="image-container" data-type="inverted-img">
                <img src={Profile} alt="profile" />
              </div>
              <div className="content">
                <h3>My Intro</h3>
                <h1>About Me</h1>
                <p>
                  I'm Sakshi<br />
                  Currently pursuing B.Tech Degree from SDITS.
                  Currently I live in Khandwa.<br />
                  I am very passionate and hardworking.
                  Always interested in learning new things.
                </p>
                <ul className="information">
                  <li className="detail">
                    <i className="fa-solid fa-user fill-pink"></i>
                    Name &nbsp; &nbsp;:&nbsp; &nbsp; Sakshi Bhawsar
                  </li>
                  <li className="detail">
                    <i className="fa-solid fa-phone fill-pink"></i>
                    Phone &nbsp; &nbsp;:&nbsp; &nbsp; +91 913*****97
                  </li>
                  <li className="detail">
                    <i className="fa-solid fa-envelope fill-pink"></i>
                    Email &nbsp; &nbsp;:&nbsp; &nbsp; Sakshibhawsar@gmail.com
                  </li>
                </ul>
                <h4>My Interest</h4>
                <ul className="interest">
                  <li>
                    <i className="fa-solid fa-kitchen-set fill-pink"></i>
                    Cooking
                  </li>
                  <li>
                    <i className="fa-solid fa-map fill-pink"></i>
                    Travel
                  </li>
                  <li>
                    <i className="fa-solid fa-book-open fill-pink"></i>
                    Reading
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section bg-grey" id="project">
          <div className="container">
            <div className="column-container">
              <div className="content">
                <h3>Projects</h3>
                <h1>What I Made</h1>
              </div>
              <div className="grid-card-container">
                <div className="card">
                  <i className="fa-solid fa-lightbulb fill-white" data-type="card-icons"></i>
                  <h4>Project 1</h4>
                  <p className="para">Description of Project 1</p>
                </div>
                <div className="card">
                  <i className="fa-solid fa-lightbulb fill-white" data-type="card-icons"></i>
                  <h4>Project 2</h4>
                  <p className="para">Description of Project 2</p>
                </div>
                <div className="card">
                  <i className="fa-solid fa-lightbulb fill-white" data-type="card-icons"></i>
                  <h4>Project 3</h4>
                  <p className="para">Description of Project 3</p>
                </div>
                <div className="card">
                  <i className="fa-solid fa-lightbulb fill-white" data-type="card-icons"></i>
                  <h4>Project 4</h4>
                  <p className="para">Description of Project 4</p>
                </div>
                <div className="card">
                  <i className="fa-solid fa-lightbulb fill-white" data-type="card-icons"></i>
                  <h4>Project 5</h4>
                  <p className="para">Description of Project 5</p>
                </div>
                <div className="card">
                  <i className="fa-solid fa-lightbulb fill-white" data-type="card-icons"></i>
                  <h4>Project 6</h4>
                  <p className="para">Description of Project 6</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Tasks Section */}
        <section className="section bg-white" id="task">
          <div className="container">
            <div className="column-container">
              <div className="content">
                <h3>Internship Task</h3>
                <h1>All Tasks</h1>
              </div>
              <div className="grid-card-container">
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/banner" className="primary-btn demo">View Task</a>
                </div>
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/portfolio" className="primary-btn demo">View Task</a>
                </div>
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/pralee" className="primary-btn demo">View Task</a>
                </div>
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/calculator" className="primary-btn demo">View Task</a>
                </div>
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/quiz/login" className="primary-btn demo">View Task</a>
                </div>
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/quiz/Registeration" className="primary-btn demo">View Task</a>
                </div>
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/quiz/quiz" className="primary-btn demo">View Task</a>
                </div>
                <div className="task-card">
                  <a href="https://sakshibhawsar.netlify.app/quiz/question" className="primary-btn demo">View Task</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-grey" id="contact">
          <div className="container">
            <div className="column-container">
              <div className="content">
                <h3>Contact Me</h3>
                <h1>Get In Touch</h1>
              </div>
              <form action="#" className="form">
                <input type="text" placeholder="Username" required />
                <input type="text" placeholder="Phone Number" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Type your message here" rows="6" required></textarea>
                <input type="submit" value="Send Message" className="primary-btn" />
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer-section bg-light-pink">
        <div className="container">
          <a href="">
            <i className="fa-brands fa-linkedin fill-pink social"></i>
          </a> &nbsp; &nbsp;
          <a href="">
            <i className="fa-brands fa-github fill-pink social"></i>
          </a> &nbsp; &nbsp;
          <a href="">
            <i className="fa-brands fa-instagram fill-pink social"></i>
          </a> &nbsp;
        </div>
      </footer>
    </>
  );
}
