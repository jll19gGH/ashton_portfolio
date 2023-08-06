import React from 'react';
import './Navigation.css';

function Navigation() {
	return (
		<div className="nav-wrapper">
			<nav className="topnav">
				<div className="nav-list">
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#work">Work</a>
					<a href="#contact">Contact</a>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;