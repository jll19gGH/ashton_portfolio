import React from 'react';
import './Hero.css';
import ashton_hero_img from '../assets/ashton-hero-img.jpg';

function Hero() {
	return (
		<div className="hero-wrapper">
			<div className="hero-cols">
				<div className="hero-column1">
					<div className="hero-img">
						<img
			                src={ashton_hero_img}
			                alt="Profile Image"
						/>
					</div>
				</div>
				<div className="hero-column2">
						<div className="hero-text">
						<div className="hero-text-title">
							<h2>Hello,</h2>
							<h1>I'm Ashton</h1>
						</div>
						<div className="hero-text-subtitle">
							<h3>Software Engineer, Full-stack Developer, Master's Student</h3>
						</div>
						<br/>
						<div className="hero-text-bttn">
						<a href="#about">
							<button>Learn More</button>
						</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;