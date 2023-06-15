// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams();

  // Mock data
  const blogPosts = [
    { id: 1, title: 'First Blog Post', content: 'Content of the first blog post' },
    { id: 2, title: 'Second Blog Post', content: 'Content of the second blog post' },
    { id: 3, title: 'Third Blog Post', content: 'Content of the third blog post' },
  ];

  const post = blogPosts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Article;
