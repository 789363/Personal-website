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
        <motion.div className="intro-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="intro-heading">
            Hi, I'm <span className="highlight">育葦</span>
          </h1>
          <Typist className="intro-typed" avgTypingDelay={40}>
            <span style={{ fontSize: '2rem', color: 'red' }}>專精JavaScript、Python、PHP、Java、Rust、Go、C++</span>
            <Typist.Backspace count={35} delay={1000} />
            <span style={{ fontSize: '2rem', color: 'red' }}>熟悉Linux、Docker、Azure、Aws、Mysql、Mongose</span>
            <Typist.Backspace count={40} delay={1000} />
            <span style={{ fontSize: '2rem', color: 'red' }}>您能信任的後端及AI工程師</span>
          </Typist>
        </motion.div>

       <motion.div className="intro-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

          <p className="profile-desc">
            現在就讀國立高雄科技大學智慧商務系，非常喜歡後端開發、深度學習、IOT相關等程式撰寫<br/>
            有多個前端、後端、資料分析、物聯網、區塊鏈智能合約專案<br/>
            並且熟悉Linux環境，雲端機器部屬、Docker、Github版本控管，能適應各類工作與環境
          </p>
        </motion.div>

        <motion.div className="skills-tree" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <motion.div className="tree-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <i className="fa fa-code"></i>
          </motion.div>
          <div className="skills-container">
            <h2 className="section-heading">Skills</h2>
            <ul className="skills-list">
              {skillsData.map((skill, index) => (
                <li key={index} className="skill-item">
                  <div className="skill-connector"></div>
                  <div className="skill-icon">
                    <skill.icon />
                  </div>
                  <div className="skill-details">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo elit.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="right-panel">
        <motion.div className="section-container" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">Projects</h2>
          <div className="project-container">
            <div className="project-card">
              <h3 className="project-title">Project 1</h3>
              <p className="project-date">2022 - Present</p>
              <p className="project-role">Front-end Developer</p>
              <p className="project-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo elit. Nulla eget tellus
                at turpis viverra rhoncus a eget turpis. Donec rutrum justo non purus vulputate aliquet.
              </p>
              <p className="project-achievements">
                <strong>Achievements:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                vitae justo elit. Nulla eget tellus at turpis viverra rhoncus a eget turpis.
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Project 2</h3>
              <p className="project-date">2020 - 2022</p>
              <p className="project-role">Full-stack Developer</p>
              <p className="project-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo elit. Nulla eget tellus
                at turpis viverra rhoncus a eget turpis. Donec rutrum justo non purus vulputate aliquet.
              </p>
              <p className="project-achievements">
                <strong>Achievements:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                vitae justo elit. Nulla eget tellus at turpis viverra rhoncus a eget turpis.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="section-container" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">Experience</h2>
          <div className="experience-container">
            <div className="experience-card">
              <h3 className="experience-title">Experience 1</h3>
              <p className="experience-date">2018 - 2020</p>
              <p className="experience-role">Software Engineer</p>
              <p className="experience-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo elit. Nulla eget tellus
                at turpis viverra rhoncus a eget turpis. Donec rutrum justo non purus vulputate aliquet.
              </p>
              <p className="experience-achievements">
                <strong>Achievements:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                vitae justo elit. Nulla eget tellus at turpis viverra rhoncus a eget turpis.
              </p>
            </div>
            <div className="experience-card">
              <h3 className="experience-title">Experience 2</h3>
              <p className="experience-date">2016 - 2018</p>
              <p className="experience-role">Web Developer</p>
              <p className="experience-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo elit. Nulla eget tellus
                at turpis viverra rhoncus a eget turpis. Donec rutrum justo non purus vulputate aliquet.
              </p>
              <p className="experience-achievements">
                <strong>Achievements:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                vitae justo elit. Nulla eget tellus at turpis viverra rhoncus a eget turpis.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="section-container" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">Contact</h2>
          <div className="contact-container">
            <p className="contact-desc">Feel free to contact me:</p>
            <div className="social-links">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:youremail@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
