import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typist from 'react-typist';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-container">
        <h1 className="intro-heading">
          Hi, I'm <span className="highlight">John Doe</span>
        </h1>
        <Typist className="intro-typed" avgTypingDelay={40}>
          <span>Passionate Software Engineer</span>
          <Typist.Backspace count={27} delay={1000} />
          <span>Web Developer</span>
          <Typist.Backspace count={13} delay={1000} />
          <span>Tech Enthusiast</span>
        </Typist>
      </div>

      <div className="section-container">
        <h2 className="section-heading">Skills</h2>
        <ul className="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <div className="project-container">
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Project 1</h3>
            <p>A web application built with React.js and Node.js for managing tasks and deadlines.</p>
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Project 2</h3>
            <p>An e-commerce website developed using React.js, Redux, and MongoDB.</p>
            <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.div>
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-heading">Experience</h2>
        <div className="experience-container">
          <motion.div
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Software Engineer</h3>
            <p>ABC Company | June 2018 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React.js and Node.js.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Participated in code reviews and provided constructive feedback to team members.</li>
            </ul>
          </motion.div>

          <motion.div
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Intern</h3>
            <p>XYZ Inc. | January 2017 - May 2017</p>
            <ul>
              <li>Assisted in developing frontend components for a customer management system.</li>
              <li>Conducted unit testing and resolved bugs to improve application performance.</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="contact-container">
        <h2 className="section-heading">Contact Me</h2>
        <p className="contact-desc">Feel free to reach out to me. Let's connect!</p>
        <div className="social-links">
          <a href="mailto:john.doe@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
