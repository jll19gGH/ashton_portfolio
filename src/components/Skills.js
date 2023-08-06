import React from 'react';
import './Skills.css';
import git from '../assets/git.png';
import c from '../assets/c++.png';
import java from '../assets/java.png';
import csharp from '../assets/c-sharp.png';
import sql from '../assets/database.png';
import unity from '../assets/unity.png';
import python from '../assets/python.png';
import jira from '../assets/jira.png';
import vs from '../assets/visual-studio.png';

function Skills() {
	return (
		<div className="skills-wrapper" id="skills">
			<div className="skills-header">
				<h1>My Skills</h1>
			</div>
			<div className="skill-icons">
				<div className="icon">
					<img title="Git"
			            src={git}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="C++"
			            src={c}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="Java"
			            src={java}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="C#"
			            src={csharp}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="SQL"
			            src={sql}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="Unity"
			            src={unity}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="Python"
			            src={python}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="Jira"
			            src={jira}
			            alt="Icon"
					/>
				</div>
				<div className="icon">
					<img title="Visual Studio"
			            src={vs}
			            alt="Icon"
					/>
				</div>
			</div>
		</div>
	);
}

export default Skills;