import React from 'react';
import './About.css';
import aboutme_img from '../assets/aboutme-img.jpg';
import resume from '../assets/Ashton_s_Resume.pdf';


function About() {
	return (
		<div className="about-wrapper" id="about">
			<div className="about-cols">
				<div className="about-column1">
						<div className="about-text">
						<div className="about-text-title">
							<h1>About Me</h1>
						</div>
						<div className="about-text-body">
							<p>
								I am a Software Engineer dedicated to improving my skills through hands-on learning and quality development. I am adept at C/C++, C#, Java, and more. I am a quick learner and collaborative team player with strong communication and analytical abilities. I am currently pursuing my Master's in Computer Science, with a concentration on Machine Learning and Computer Vision.
							</p>
						</div>
						<br/>
						<div className="about-text-bttn">
							<a href={resume} target="_blank">
							<button>View My Resume</button>
							</a>
						</div>
					</div>
				</div>
				<div className="about-column2">
					<div className="about-img">
						<img
			                src={aboutme_img}
			                alt="About Me Image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;