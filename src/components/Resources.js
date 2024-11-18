// Resources.js
import React from 'react';

const Resources = () => {
  const resources = [
    { name: 'LeetCode', link: 'https://leetcode.com' },
    { name: 'GeeksforGeeks', link: 'https://geeksforgeeks.org' },
    { name: 'Mock Interviews', link: 'https://pramp.com' },
  ];

  return (
    <div className="resources">
      <h1>Resources</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource.name}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
