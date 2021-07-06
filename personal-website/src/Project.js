import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'



import CCCVideo from "./img/Projects/CCC Website/CCC New Video.mp4"


import AIPackagePreview from "./img/Projects/AI Scanner/AI 1.png"


import {Route, BrowserRouter as Router, Link} from "react-router-dom"
import WebsiteProject from "./WebsiteProject"

// autoPlay loop
function Project(){
	return(

		<div class="container fadeInUp animated animatedFadeInUp"> 

				<div class="container project-container">
					<div class="row a-project website-project">
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 Website-Heading">
							<h1>
							Web Development
							</h1>
							<h6>
							Rebuilt a company's website from scratch.
							</h6>
							<h6>
							Now averaging 250,000 monthly visitors.
							</h6>
							<h6>
							<br></br>
							<a class="CCClink" 
								href="https://www.condocontrolcentral.com" 
								target="_blank" rel="noopener noreferrer" >
							www.condocontrolcentral.com
							</a>
							</h6>
							<button class="Website-button">
								<Link to={'/webproject'}>
									Learn More &nbsp; 
								</Link>
							</button>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 project-picture">
							<video alt="Video of Home Page" class="project-picture-edit" autoPlay>
								<source src={CCCVideo} type="video/mp4"></source>
							</video>
						</div>
					</div>	
				</div>

				<div class="container project-container">
					<div class="row AI-project">
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 AI-Heading">
							<h1>
							AI Package Scanner
							</h1>
	
							<h6>
							Prototyped with GCP's&nbsp;  
							<a target="_blank" rel="noopener noreferrer" href="https://cloud.google.com/vision"> 
							OCR&nbsp;
							</a>
							and&nbsp;
							<a target="_blank" rel="noopener noreferrer" href="https://cloud.google.com/natural-language">
							Entity Recognition. 
							</a>
							</h6>

							<h6>
							Now in full production, with +1m yearly transactions. 
							</h6>

							<br></br>
							<h5>
								<a class="CCClink" 
								href="https://www.condocontrolcentral.com/feature/ai-package-tracking-scanning/" 
								target="_blank" rel="noopener noreferrer" >
									Here's a demo.
								</a>
							</h5>
							<button class="Website-button AI-button" >
								<Link to={'/packagescanner'}>
									Learn More &nbsp; 
								</Link>
							</button>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 AI-Picture">
							<img alt="AI Scanner Picture" class="project-picture-edit" src={AIPackagePreview} >
							</img>
						</div>
					</div>	
				</div>

			<div class="row">
				<p class="fade-in check-out home-text-bottom center margin">
				Check me out:
				</p>
			</div>

			<div class="fade-in-medium social-media row">
				<div class="col">
					<a target="_blank " rel="noopener noreferrer" href="https://www.linkedin.com/in/stanleyyipca/" title="Linkedin Link"> 
						<div class="icon linkedin"></div>
					</a>
				</div>
				<div class="col">
					<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/StanleyYip011" title="Youtube Link"> 
						<div class="icon youtube"></div>
					</a>
				</div>
				<div class="col">
					<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/stanleyyipp/" title="Instagram Link"> 
						<div class="icon instagram"></div>
					</a>
				</div>
			</div>
		</div>
	)

}


export default Project;


