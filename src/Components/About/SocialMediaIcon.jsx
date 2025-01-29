import React from 'react';
import LinkedinIcon from '../../images/linkedin.svg'
import GmailIcon from '../../images/gmail.svg';
import InstagramIcon from '../../images/instagram.svg';
import './SocialMediaIcon.css';

const SocialMediaIcon = () => {
  const socialLinks = [
    {
      platform: 'katworks05@gmail.com',
      url: 'mailto:https://www.gmail.com',
      icon: GmailIcon,
    },
    {
      platform: 'itis.kattt',
      url: 'https://www.instagram.com/itis.kattt?igsh=MXAyc3Y4ZGNtajFybQ==',
      icon: InstagramIcon,
    },
    {
      platform: 'KATHIR(KAT)',
      url: 'https://www.linkedin.com/in/kathir-k-8a285423b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: LinkedinIcon,
    },
  ];

  return (
    <div className="social-media">
      <h1 className='contact'>Contact Me :</h1>
      {socialLinks.map((link) => (
        <div key={link.platform} className="social-item">
          <img src={link.icon} alt={`${link.platform} Icon`} className="social-icon" />
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-text"
          >
            {link.platform}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcon;
