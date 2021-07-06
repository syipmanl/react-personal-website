import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PackageScanner.css';
import {Link} from "react-router-dom";

import DataTrend from "./img/Projects/AI Scanner/DataScienceTrend.png"
import LabelSample from "./img/Projects/AI Scanner/LabelSample.jpg"
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
function PackageScanner() {
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
					For past decade or so years, the field of data science has blown up! What used to be called
					business intelligence or business analysts, are now being called a new roll data analysts and such.
					Companys are competing every day to break into the boom of this industry. Here in this project I had
					the opportunity to work on such a project. While I did not actually use much of any statistical methods
					or build any of my own models, I was able to get my hands on something that is related to this industry.
					Something that I prototyped, and now is in full production using mostly of not all of my original ideas.
				</p>

				<br></br>
				<br></br>
			</div>

			<div class = "row BlockImg">

				<div class = "Row1-Img1 col-12 col-md-12">
						<img class="shadow" src={DataTrend}>
						</img>
					
					<p class = "Caption">
						The boom on Google Trend with "Data Science"
					</p>
				</div>

			</div>

			<div class ="row BlockText">
				<h2 class="Heading">
				 Motivation
				</h2>

				<p class="Body">
					That's enough talking! So what's the project? Well, if you live in a condominum, did you know that
					most security guards have to manually input each package's information in? Your first name, last name,
					unit number and date. This will take probably 15 seconds to do.
					Now imagine if the security guard can just a take a picture, and this information
					is automatically updated into the system. Probably less than 5 seconds. Multiply that by the number of packages
					you think an average condominum will receive... You get the point. This is the motivation for the feature.
				</p>
			</div>
			<div class = "row BlockText">
				<h2 class="Heading ">
				Goals
				</h2>
				<ul class="Goals">
				  <li>Take a picture of a package label</li>
				  <li>Extract the first name, last name, and unit number</li>
				  <li>Match this information with the database in the condominum</li>
				  <li>Accuracy goal for this feature is 95%</li>
				</ul>
			</div>

			<div class = "row BlockText">
				<h2 class="Heading ">
					The Data
				</h2>
				<article class="Body">
					There's a lot of data processing involved in here, but its important to understand the data first.
					I know they are just a bunch of photos, but I have to ask a lot of questions such as:
				</article>
				<ul class="Goals">
				  <li>What's the quality of these photos?</li>
				  <li>What if the name or unit number is not in the database?</li>
				  <li>How do I handle packages that's delivered to the wrong building?</li>
				  <li>How can I create a customizable solution to this problem?</li>
				  <li>How can I tell the difference between what I need(Names and Unit Number) and other garbage?</li>
				</ul>
			</div>

			<div class = "row BlockImg">

				<div class = "SiteMap Row1-Img1 col-6 col-md-6">
					<p class = "Example Caption">
						Example Package Label
					</p>
						<img class="shadow" src={LabelSample}>
						</img>
					<p class = "Caption">
						First Name: Forage
						<br></br>
						Last Name: Labs
						<br></br>
						Unit Number: None
					</p>
				</div>

			</div>



			<div class ="row BlockText ">
				<h1 class="Heading"> 
					Closing Remarks
				</h1>

				<p class="Body">
					Unfortunately, I can't disclose too much on the details of the project. What I can say is that,
					shortly after I left, the project was able to go into full production with a 90% accuracy rates and used
					in numerous of condominums. If you wish to know more, the best I can provide is the link to the real deal&nbsp;
					<a target="_blank" rel="noopener noreferrer" href="https://www.condocontrolcentral.com/feature/ai-package-tracking-scanning/" 
					title="AI Pacakge Tracking">
						 here 
					</a>
					.
					<br></br> 
					<br></br> 
					If you like what you see, I am open to contract work. 
					<br></br>
					Feel free to contact me at syipmanl@uwaterloo.ca.
				<br></br>
				<br></br>

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




export default PackageScanner;