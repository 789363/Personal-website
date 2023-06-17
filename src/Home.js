import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typist from 'react-typist';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const data = [
  { name: 'JavaScript (ES6+)', value: 90 },
  { name: 'React.js', value: 85 },
  { name: 'HTML5', value: 95 },
  { name: 'CSS3', value: 90 },
  { name: 'Node.js', value: 80 },
  { name: 'Express.js', value: 75 },
  { name: 'SQL', value: 70 },
];

const skillsData = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3 },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Database', icon: FaDatabase },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-panel">
        <div className="intro-container">
          <h1 className="intro-heading">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <Typist className="intro-typed" avgTypingDelay={40}>
            <span style={{ fontSize: '1.5rem', color: 'red' }}>Passionate Software Engineer</span>
            <Typist.Backspace count={27} delay={1000} />
            <span style={{ fontSize: '1.5rem', color: 'red' }}>Web Developer</span>
            <Typist.Backspace count={13} delay={1000} />
            <span style={{ fontSize: '1.5rem', color: 'red' }}>Tech Enthusiast</span>
          </Typist>
        </div>

        <div className="profile-container">
          <img src="your-profile-image.jpg" alt="Profile" className="profile-image" />
          <p className="profile-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo elit. Nulla eget tellus at
            turpis viverra rhoncus a eget turpis. Donec rutrum justo non purus vulputate aliquet. Sed tincidunt mi
            mauris, nec facilisis erat eleifend eu.
          </p>
        </div>
        <div className="skills-tree">
            <motion.div className="tree-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <i className="fa fa-code"></i>
            </motion.div>
            <div className="skills-chart">
              <BarChart width={400} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
            <ul className="skills-list">
              {skillsData.map((skill, index) => (
                <motion.li
                  key={index}
                  className="skill-item"
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="skill-connector"></div>
                  <div className="skill-icon">{React.createElement(skill.icon)}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  {/* <p className="skill-desc">{`Advanced knowledge: ${skill.value}%`}</p> */}
                </motion.li>
              ))}
            </ul>
          </div>
      </div>

      <div className="right-panel">
        <div className="skills-section">
          <h2 className="section-heading">Skills</h2>

        </div>

        <div className="section-container">
          <h2 className="section-heading">Projects</h2>
          <div className="project-container">
            <motion.div className="project-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <h3>Project 1</h3>
              <p>A web application built with React.js and Node.js for managing tasks and deadlines.</p>
              <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
            <motion.div className="project-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <h3>Project 2</h3>
              <p>An e-commerce website developed using React.js, Redux, and MongoDB.</p>
              <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          </div>
        </div>

        <div className="section-container">
          <h2 className="section-heading">Experience</h2>
          <div className="experience-container">
            <motion.div className="experience-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <h3>Software Engineer</h3>
              <p>ABC Company | June 2018 - Present</p>
              <ul>
                <li>Developed and maintained web applications using React.js and Node.js.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                <li>Participated in code reviews and provided constructive feedback to team members.</li>
              </ul>
            </motion.div>

            <motion.div className="experience-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
    </div>
  );
};

export default Home;
