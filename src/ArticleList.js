import React from 'react';

const ArticleList = () => {
  const projects = [
    {
      id: 1,
      title: 'Chain-Hub區塊鏈論壇',
      description: '基於Iota協議的區塊鏈論壇，並使用Rust作為後端框架，希望帶給大家真實的評論環境',
      technologies: ['Rust', 'Node.js', 'Solidity'],
      githubLink: 'https://github.com/Kiwi-Go/digital-record-backend',
    },
    {
      id: 2,
      title: 'IfujiForm問卷系統',
      description: '協助Fuji按摩椅設計問卷系統，讓員工可以回報購買心得以便做統合',
      technologies: ['Mysql', 'Express.js', 'Docker'],
      githubLink: 'https://github.com/789363/ifuji-form-api',
    },
    {
      id: 3,
      title: '看見海洋烏托邦',
      description: '參加海委會舉辦國際青年論壇-決賽第六名',
      technologies: ['MySQL', 'React-Native', 'Express.js'],
      githubLink: 'https://github.com/789363/utopia-Sea-app',
    },
    {
      id: 4,
      title: '智慧商務系-專題上傳系統',
      description: '協助系上設計畢業專題上傳系統',
      technologies: ['GoogleDriver', 'React', 'Express.js'],
      githubLink: 'https://github.com/789363/TopicSystem-frontend',
    },
    {
      id: 5,
      title: '中油景深辨識案',
      description: '協助中油景深辨識案-Docker環境架設',
      technologies: ['Docker', 'Debian'],
      githubLink: 'https://github.com/789363/fche',
    },
    {
      id: 6,
      title: '國防科技案-艦艇船舶系統',
      description: '協助國防部建立艦艇相關零件資料庫系統',
      technologies: ['MySQL', 'React', 'Express.js'],
      githubLink: 'https://agry88.github.io/naval_ships-new/',
    },
  ];

  return (
    <div>
      <h1>我的程式作品集</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>使用技術：{project.technologies.join(', ')}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            Github上查看專案
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
