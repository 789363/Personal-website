// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  // Mock data
  const blogPosts = [
    { id: 1, title: 'First Blog Post' },
    { id: 2, title: 'Second Blog Post' },
    { id: 3, title: 'Third Blog Post' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
