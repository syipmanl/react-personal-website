import React from "react"
import {Link}  from 'react-router-dom'

function NavBar() {
	return (
		<ul class="container"> 
			<div  class = "pad row fade-in-fast NavBarItems"> 
				<li id="NavBar1" onClick = {() => AnimatedLine(1)} class="col NavStart"><Link to="/"><h1 class="NavFont">Home</h1></Link></li>
				<li id="NavBar2" onClick = {() => AnimatedLine(2)} class="col"><Link to="/project"><h1 class="NavFont">My Work</h1></Link></li>
				<li id="NavBar4" onClick = {() => AnimatedLine(4)} class="col"><Link to="/about"><h1 class="NavFont">About Me</h1></Link></li>
			</div>
		</ul>
	)
}

// 	<li id="NavBar3" onClick = {() => AnimatedLine(3)} class="col"><Link to="/contact">Contact</Link></li>

// For now
function AnimatedLine(k) {
	var NavNum = k.toString();
	var i;
	for (i = 1; i < 5; i++) {
		if (i == k) {
			var NavigationBar = document.getElementById('NavBar' + NavNum);
			NavigationBar.classList.add("AnimateLine");
		}
		else if (i == 3) {
			continue;
		}
		else {
			var NavigationBar = document.getElementById('NavBar' + i.toString());
			NavigationBar.classList.remove("AnimateLine");
			NavigationBar.classList.remove("NavStart");
		}
	}
}

export default NavBar;
