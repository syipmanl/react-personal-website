import React from 'react'
import HomePicture from "./img/Home Page/WebPic2.png"
import './Home.css'


function Home(){
	return(
		<div class="container"> 
			<div class="row">
				<div class="col home-picture-margin">
					<img class="fade-in home-picture" alt="Picture in Japan" src={HomePicture}>
					</img>
				</div>
				<div class="col margin">
					<h2 class="fade-in about-text">
					<div class="hey-there">
						Hey there :)
					</div>
					<div class="intro">
						<p >
						My name is Stanley Yip. I am currently studying at the&nbsp;
						<a target="_blank" rel="noopener noreferrer" href="https://uwaterloo.ca/statistics-and-actuarial-science/">
						University of Waterloo
						</a>
						.
						</p>
					</div>

					<br></br>
					<div class="home-third">
						My interests varies from data science and 
						software development.
					</div>
					<br></br>
					<div class="home-fourth">
						I am a self learner, and I like to 
						build exciting projects.
					</div>

					</h2>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<h2 class="fade-in home-text-bottom">
					<br></br>
					Contact me at syipmanl@uwaterloo.ca.
					</h2>
				</div>
			</div>			


			<div class="row">
				<p class="home-text-bottom center margin">
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





export default Home;