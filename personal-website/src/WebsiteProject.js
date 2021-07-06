import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WebsiteProject.css';
import {Link} from "react-router-dom";



import DemoMock from "./img/Projects/CCC Website/DemoPageMock.png"
import BlogMock from "./img/Projects/CCC Website/DifferentStyles.png"
import FeatMock from "./img/Projects/CCC Website/FeatureLandMock.png"
import CarouselVideo from "./img/Projects/CCC Website/FeatureLandVideo.mp4"

import SiteMap from "./img/Projects/CCC Website/Site Map.JPG"
import Plan from "./img/Projects/CCC Website/Planning.png"
import About from "./img/Projects/CCC Website/WF|About.jpg"
import Blog from "./img/Projects/CCC Website/WF|Blog.JPG"
import BlogIndiv from "./img/Projects/CCC Website/WF|BlogIndiv.JPG"
import Career from "./img/Projects/CCC Website/WF|Career.JPG"
import FeatIndiv from "./img/Projects/CCC Website/WF|FeatIndiv.png"
import FeatLand from "./img/Projects/CCC Website/WF|FeatLand.png"


import HomeOld from "./img/Projects/CCC Website/CCC old.png"
import HomeNew from "./img/Projects/CCC Website/CCC new.png"
import RightArrow from "./img/Projects/CCC Website/RightArrow.png"



import CCCNewVideo from "./img/Projects/CCC Website/CCC New Video.mp4"
import CCCOldVideo from "./img/Projects/CCC Website/CCC Old Video.mp4"

import CCCFullOld from "./img/Projects/CCC Website/CCC Old FullImg.png"
import CCCFullNew from "./img/Projects/CCC Website/CCC New FullImg.png"
function WebsiteProject() {
	return (

		<div class="fadeInUp animated animatedFadeInUp container">

			<div class="row BackButtonRow">
				<Link to={'/project'}>
					<button  class="BackButton">
						<p class="ArrowLeft BackButtonText">
							&#8592;  &nbsp; 
						</p>
						<p class="BackButtonText">
							Back
						</p>
					</button>
				</Link>
			</div>

			<div class ="row BlockText ">
				<h1 class="Heading"> 
					Introduction
				</h1>

				<p class="Body">
					It's not a surprise for many small companies to have outdated and dysfunctional marketing websites. 
					My job was to completely rebuild an old and broken-ish website into a working modernized one.
				<br></br>
				<br></br>
					This was one of the biggest projects I worked on. As I was the sole person this project, 
					I went through all phases of creating a website, from all that UI/UX stuff to development.
					I had little to none of these skills prior to on working on this, so most of my work was from Googling
					and intuition. 
					That's why I'm very happy with how it turned out. 
				<br></br>
				<br></br>
					Due to the specs of the project, I was unable to use any modern frameworks. 
					I used mostly raw HTML/CSS, JS and Bootstrap.
				</p>
			</div>

			<div class = "row BlockImg">

				<div class = "Row1-Img1 col-12 col-md-5">
						<img class="shadow" src={CCCFullOld}>
						</img>
					
					<p class = "Caption">
						Old Website
					</p>
				</div>
				<div class = "Row1-Img2 col-12 col-md-2">
					<img src={RightArrow}></img>
				</div>
				<div class = "HoverPop Row1-Img3 col-12 col-md-5">
					<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/"> 
						<img class="shadow" src={CCCFullNew}>
						</img>
					</a>
					<p class = "Caption">
						New Website
					</p>
				</div>

			</div>

			<div class = "row BlockText">
				<h2 class="Heading ">
				Goals
				</h2>
				<ul class="Goals">
				  <li>Make a comprehensive plan to update and modernize their website</li>
				  <li>Bring it up to current standards for SaaS platforms</li>
				  <li>Research and understand what makes a good website</li>
				  <li>Document my code and designs for future team members</li>
				</ul>
			</div>

			<div class = "row BlockText">
				<h2 class="Heading ">
					First Steps
				</h2>
				<p class="Body">
					Being handed a 15 page website guideline, it was time to get started. Time to draw some diagrams,
					over time I realized these were called site maps and wireframes.
				</p>
			</div>

			<div class = "row BlockImg">

				<div class = "SiteMap Row1-Img1 col-5 col-md-5">
						<img class="shadow" src={SiteMap}>
						</img>
					
					<p class = "Caption">
						Site Map
					</p>
				</div>
				<div class = "Plan Row1-Img1 col-7 col-md-7">
						<img class="shadow" src={Plan}>
						</img>
					
					<p class = "Caption">
						Plan
						<br></br>
					<div class = "Explaination">
						(New Ideas + Old Website) -> Better Ideas -> Requirements -> WireFrame -> E-Wireframe(Sketch Software)
					</div>
					</p>

				</div>
			</div>

			<div class = "row">
				<p class="Title">
					WireFrames
				</p>
			</div>
			<div class = "row BlockImg">
				<div class = "HoverPop Row1-Img3 col-12 col-md-4">
						<p class = "SectionTitle">
							Feature Landing Page
						</p>
						<img class="shadow" src={FeatLand}>
						</img>
						<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/features/" title="Feature Landing Page">
							<p class = "Link">
								Link to Production
							</p>
						</a>
				</div>

				<div class = "HoverPop Row1-Img3 col-12 col-md-4">
						<p class = "SectionTitle">
							About Me Page
						</p>
						<img class="shadow" src={About}>
						</img>
						<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/about-us/" title="About Us Page">
							<p class = "Link">
								Link to Production
							</p>
						</a>
				</div>

				<div class = "HoverPop Row1-Img3 col-12 col-md-4">
						<p class = "SectionTitle">
							Feature Indiv. Page
						</p>
						<img class="shadow" src={FeatIndiv}>
						</img>
						<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/feature/File-Library/" title="Feature Indiv. Page">
							<p class = "Link">
								Link to Production
							</p>
						</a>
				</div>

			</div>


			<div class ="row BlockText ">
				<h1 class="Heading"> 
					More Planning
				</h1>

				<p class="Body">
					The templates I've created above gave me a the direction that I needed for the project.
					However, it wasn't enough. So I created even more mock ups with combination of ideas from
					various modern SaaS websites. 
				<br></br>
				<br></br>
					Here are some examples:
				</p>
			</div>


			<div class = "row BlockImg">
				<div class = "HoverPop Row1-Img3 col-12 col-md-4 mock">
						<p class = "SectionTitle">
							Feature Landing Mock
						</p>
						<img class="shadow mock" src={FeatMock}>
						</img>
						<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/features/" title="Feature Landing Page">
							<p class = "Link">
								Link to Production
							</p>
						</a>
				</div>

				<div class = "HoverPop Row1-Img3 col-12 col-md-4 mock">
						<p class = "SectionTitle">
							Demo Page Mock Up
						</p>
						<img class="shadow" src={DemoMock}>
						</img>
						<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/watch-demo/" title="About Us Page">
							<p class = "Link">
								Link to Production
							</p>
						</a>
				</div>

				<div class = "HoverPop Row1-Img3 col-12 col-md-4 mock">
						<p class = "SectionTitle">
							Blog Page Mock Ups
						</p>
						<img class="shadow" src={BlogMock}>
						</img>
						<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/blog/" title="Feature Indiv. Page">
							<p class = "Link">
								Link to Production
							</p>
						</a>
				</div>

			</div>


			<div class ="row BlockText ">
				<h1 class="Heading"> 
					Development: Challenges Ahead
				</h1>

				<p class="Body">
					The journey after planning was a very tough one. I had a lot of issues with time management.
					I was not meeting my targets despite doing a providing good results.
				<br></br>
				<br></br>
					Even to this day, it's something that I worked hard to get better at. As the journey was very long,
					here I will only provide a highlight. One of the biggest challenge that I had to overcome was to solve
					the a long lasting problem on the company's website. On the surface, it was to create a customizable carousel.
					We had over 8 categories of services we provided, and another 3-10+ sub-services within each. 
				<br></br>
				<br></br>

					After looking into other popular SasS company's marketing websites, there were very intesting solutions. However,
					none of these came close to what my company wanted. We wanted a non-scrollable, UI/UX friendly, functional carousel
					that showcased all the features/services we had to offer. The emphasis is on UI/UX friendly, a carousel that provided
					just enough information as a preview, and also friendly to the user to navigate in any of the 8+ categories. And take
					a second to imagine the amount of information I had to condense, and it had to be non scrollable. To top it all off,
					I was working in WordPress, a platform that is very unfriendly to developers.

				<br></br>
				<br></br>
					Sparing some details, after going to the office every day for 2 weeks(including weekends), here's the result!

				</p>
			</div>


			<div class="HoverPop col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 carousel-video">
				<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/features/" title="Feature Landing Page">
					<video alt="Video of Home Page" class="shadow project-picture-edit" autoPlay loop>
						<source src={CarouselVideo} type="video/mp4"></source>
					</video>
				</a>
			</div>	

			<div class ="row BlockText Concluding">
				<h1 class="Heading"> 
					Closing Remarks
				</h1>

				<p class="Body">
					I really enjoyed working on this project. It allowed me to see what I want capable of, I think that's
					what I wanted out of a work term. In total this project took 2 months to work on, and I check the site
					occasionally after leaving the company. Big thanks to my friends and management in the company! 

				<br></br> 
				<br></br> 
				If you like what you see, I am open to contract work. 
				<br></br>Feel free to contact me at syipmanl@uwaterloo.ca.
				</p>
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




export default WebsiteProject;