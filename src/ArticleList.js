import React from 'react';

const ArticleList = () => {
  const projects = [
    {
      id: 1,
      title: '專案一',
      description: '這是我的第一個程式專案。',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/your-username/project1',
    },
    {
      id: 2,
      title: '專案二',
      description: '這是我的第二個程式專案。',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      githubLink: 'https://github.com/your-username/project2',
    },
    {
      id: 3,
      title: '專案三',
      description: '這是我的第三個程式專案。',
      technologies: ['JavaScript', 'Express', 'MySQL'],
      githubLink: 'https://github.com/your-username/project3',
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
            查看專案
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
