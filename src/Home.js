import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typist from 'react-typist';
import { motion } from 'framer-motion';

import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiRust,SiDocker} from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: FaHtml5  },
  { name: 'CSS3', icon: FaCss3 },
  { name: 'React', icon: FaReact  },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Python', icon: FaPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Rust', icon: SiRust  },
  { name: 'Docker', icon: SiDocker },
  { name: 'MySQL', icon: FaDatabase },
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
            <Typist.Backspace count={40} delay={1000} />
            <span style={{ fontSize: '2rem', color: 'red' }}>熟悉Linux、Docker、Azure、Aws、Mysql、Mongose</span>
            <Typist.Backspace count={40} delay={1000} />
            <span style={{ fontSize: '2rem', color: 'red' }}>您能信任的後端及AI工程師</span>
          </Typist>
        </motion.div>

       <motion.div className="intro-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

          <p className="profile-desc">
            現在就讀國立高雄科技大學智慧商務系，非常喜歡後端開發、深度學習、IOT相關等程式撰寫<br/>
            有多個前端、後端、資料分析、深度學習、物聯網、區塊鏈智能合約專案<br/>
            並且熟悉Linux環境，雲端機器部屬、Docker、Github版本控管，能適應各類工作與環境使用
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
          <h2 className="section-heading">Recently-Projects</h2>
          <div className="project-container">
            <div className="project-card">
              <h3 className="project-title">Chan-Hub區塊鏈論壇</h3>
              <p className="project-date">2023 - Present</p>
              <p className="project-role">Back-end Developer</p>
              <p className="project-desc">
               使用Rust及Node.js DockerFile撰寫
              </p>
              <p className="project-achievements">
                <strong>內容:</strong> 擔任後端及系統維運部份，協助開發論壇之後端Api，並進行Docker的部屬以及雲端機器使用
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Fuji問卷系統後端開發</h3>
              <p className="project-date">2022 - 2023</p>
              <p className="project-role">Back-end Developer</p>
              <p className="project-desc">
                使用Node.js DockerFile撰寫
              </p>
              <p className="project-achievements">
                <strong>內容:</strong> 擔任後端及系統維運部份，協助開發系統之後端Api以資料庫規劃，並進行Docker的部屬將環境架設到公司機房使用
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="section-container" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">Experience</h2>
          <div className="experience-container">
            <div className="experience-card">
              <h3 className="experience-title">Fuji公司後端工程師</h3>
              <p className="experience-date">2022 - 2023</p>
              <p className="experience-role">Software Engineer</p>
              <p className="experience-desc">
                使用Node.js
              </p>
              <p className="experience-achievements">
                <strong>工作:</strong> 開發問卷系統並設計資料庫，協助工程師理解系統及操作，並偵查Bug與系統優化
              </p>
            </div>
            <div className="experience-card">
              <h3 className="experience-title">博相科技助理工程師</h3>
              <p className="experience-date">2023 - Present</p>
              <p className="experience-role">Ai Developer</p>
              <p className="experience-desc">
                使用Python
              </p>
              <p className="experience-achievements">
                <strong>工作:</strong> Lable資料，並協助工程師進行影像辨識系統開發
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="section-container" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-heading">Contact</h2>
          <div className="contact-container">
            <p className="contact-desc">Feel free to contact me:</p>
            <div className="social-links">
              <a href="https://github.com/789363" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/%E6%9E%97%E8%82%B2%E8%91%A6-%E6%99%BA%E6%85%A7%E5%95%86%E5%8B%99%E7%B3%BB-193325280/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:C109156118@nkust.edu.tw">
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
