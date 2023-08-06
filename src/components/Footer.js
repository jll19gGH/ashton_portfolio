import React from 'react';
import './Footer.css';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
	return (
		<footer className="footer-content-wrapper" id="contact">
			<div className="footer-content">
			<div className="footer-content-name">
				<h2>Ashton Frias</h2>
			</div>
			<div className="footer-content-socials">
				<a href="mailto: ashtonfrias11@gmail.com">
				<img className="footer-content-socials-icon" src={email} alt='email'/>
				</a>
				<a href="https://github.com/AshtonFrias" target="_blank">
				<img className="footer-content-socials-icon" src={github} alt='github'/>
				</a>
				<a href="https://www.linkedin.com/in/ashtonfrias/" target="_blank">
				<img className="footer-content-socials-icon" src={linkedin} alt='linkedin'/>
				</a>
			</div>
			</div>
			<hr/>
			<div className="footer-content-copyright">
				<p>Copyright © 2023 Ashton Frias</p>
			</div>
		</footer>
	);
}

export default Footer;