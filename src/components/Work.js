import React from 'react';
import './Work.css';
import p1 from '../assets/research-paper.png';
import p2 from '../assets/scheduler.png';

function Work() {
	return (
		<div className="work-wrapper" id="work">
			<div className="work-header">
				<h1>My Work</h1>
			</div>
			<div className="work-cards">
				<div className="card">
					<div className="card-img">
					<img
			            src={p1}
			            alt="card"
					/>
					</div>
					<div className="card-text">
					<h2>Machine Learning for Glioma Grading</h2>
					<p>Developed a novel three-stage methodology for glioma grading using hierarchical voting-based feature selection, automated tuning, and family-based model selection, combined with ensemble learning. Implemented hyperparameter tuning to optimize performance and expand the range of potential model sets.</p>
					<a href="https://glioma_grading_paper.tiiny.site/" target="_blank">
					<button>See Work</button>
					</a>
					</div>
				</div>
				<div className="card">
					<div className="card-img">
					<img
			            src={p2}
			            alt="card"
					/>
					</div>
					<div className="card-text">
					<h2>Elevator Scheduling</h2>
					<p>Developed a C program, which used kernel system calls and multi-threading. The elevator picked up randomly generated passengers from 10 different floors and were loaded/unloaded using FIFO and SCAN algorithms.</p>
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default Work;