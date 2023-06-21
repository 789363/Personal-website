import React from 'react';
import './About.css';
import profileImage from './profile-image.jpg';
import certificateImage from './certificate.jpg';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Web Developer</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo elit. Nulla eget tellus at turpis
        viverra rhoncus a eget turpis. Donec rutrum justo non purus vulputate aliquet. Sed tincidunt mi mauris, nec
        facilisis erat eleifend eu.
      </p>
      <div className="certificates">
        <h2>Certificates</h2>
        <div className="certificate">
          <img src={certificateImage} alt="Certificate" className="certificate-image" />
          <div className="certificate-details">
            <h3>Web Development Certificate</h3>
            <p>Issued by XYZ Academy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
