// Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="profile">
      <h1>Profile Management</h1>
      <form>
        <label>Upload Resume:</label>
        <input type="file" onChange={handleResumeUpload} />
        {resume && <p>Uploaded: {resume.name}</p>}
        <label>LinkedIn:</label>
        <input type="url" placeholder="https://linkedin.com/in/username" />
        <label>GitHub:</label>
        <input type="url" placeholder="https://github.com/username" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
