import React from 'react';
import LinkedinIcon from '../../images/linkedin.svg';
import GmailIcon from '../../images/gmail.svg';
import InstagramIcon from '../../images/instagram.svg';
import './SocialMediaIcon.css';

const SocialMediaIcon = () => {
  const socialLinks = [
    {
      platform: 'katworks05@gmail.com',
      url: 'mailto:katworks05@gmail.com',
      icon: GmailIcon,
    },
    {
      platform: 'itis.kattt',
      url: 'https://www.instagram.com/itis.kattt',
      icon: InstagramIcon,
    },
    {
      platform: 'KATHIR(KAT)',
      url: 'https://www.linkedin.com/in/kathir-k-8a285423b',
      icon: LinkedinIcon,
    },
  ];

  return (
    <div className="social-media">
      <h1 className="contact">Contact Me:</h1>
      <div className="social-container">
        {socialLinks.map((link) => (
          <div key={link.platform} className="social-item">
            <img src={link.icon} alt={`${link.platform} Icon`} className="social-icon" />
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-text">
              {link.platform}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaIcon;
