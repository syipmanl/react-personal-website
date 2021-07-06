import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CatPic from "./img/About Me/catprofpic.jpg"
import TFTPic from "./img/About Me/TFT2.jpg"


function About(){
	return(
		<div class="container"> 
			<div class="row">

				<div class="col">
					<img class="fade-in about-picture" alt="Me and two cats" src={CatPic} >
					</img>
				</div>

				<div class="col margin">
						<h2 class="fade-in about-text">
						<div class="about-degree">
							I am currently finishing my STAT degree with a minor in CS at&nbsp;
							<a target="_blank" rel="noopener noreferrer" href="https://uwaterloo.ca/statistics-and-actuarial-science/"> 
							UW.
							</a>
						</div>
						<br></br>
						<p>
							<div class="home-third-block-test">
								Here's me on the&nbsp;
								<a target="_blank" rel="noopener noreferrer" href="https://toronto.ctvnews.ca/struggling-students-want-rent-relief-during-covid-19-pandemic-1.4907814?cache=kcfnyoei%3FclipId%3D104066"> 
								news
								</a>
								, a&nbsp;
								<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=a9brINpzdAE&ab_channel=BillChen">
								video,
								</a>
								&nbsp;and a&nbsp;
								<a target="_blank" rel="noopener noreferrer" href="./static/media/TFT2.37e1a895.jpg">
								game
								</a>
								.
							</div>
						</p>

						<p>
						<div class="home-third-block-test">
							I also run a&nbsp;
							<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/StanleyYip011">
							youtube 
							</a>
							&nbsp;channel to teach programming.
						</div>
						</p>

						</h2>
				</div>




			</div>

			<div class="row">
				<p class="check-out fade-in home-text-bottom center margin">
				Check me out:
				</p>
			</div>

			<div class="fade-in-medium social-media row">
				<div class="col">
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/stanleyyipca/" title="Linkedin Link"> 
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

export default About;