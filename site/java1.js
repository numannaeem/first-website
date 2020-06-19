var headerTexts = ["hello, world.","welcome","to","my","website.","enjoy","your",
					"stay!","okay,","you","may","stop","clicking","now.","seriously?",
					"you're","still","doing","this?","wow.","-_-","stop!","stop!!",
					"stop!!!","alright.","i'm done.","bye.","~"];
var hdrCounter = 1;
var imgCounter = 1;

function updtHeader() {	
	document.getElementById("mainHeader").innerHTML = headerTexts[hdrCounter];
	hdrCounter++;
	if(hdrCounter == headerTexts.length) {
		hdrCounter = 0;
	}
}

function checkDark() {
	if (parseInt(localStorage.dm) == 1) {
		document.getElementById("darkmode").click();	
	}
		 
}


function darkMode() {
	var headings = document.getElementsByClassName('headings');
	var content_elements = document.getElementsByClassName('boxdiv');
	var header = document.getElementById('header');
	var closure = document.getElementById('closure');

	if (document.getElementById("darkmode").checked == true) {
		localStorage.dm ="1";
		for(var i = 0; i < content_elements.length; i++) {
			content_elements[i].style.backgroundColor = "#201e19";
			content_elements[i].style.color = "#d9d9d9";
			content_elements[i].style.borderColor = "gray";
			headings[i].style.color = "#e60000";
		}
		closure.style.backgroundColor = "#333333";
		closure.style.color = "#f5f5f5";
		header.style.backgroundImage = "url('./images/bgimgblack.jpg')";
		header.style.color = "#f0c371";
		document.getElementById('me').style.color = "#c1c1c1";
	}

	else {
		localStorage.dm = "0";
		for(var i = 0; i < content_elements.length; i++) {
			content_elements[i].style.backgroundColor = "#fffff1";
			content_elements[i].style.color = "black";	
			content_elements[i].style.borderColor = "black";
			headings[i].style.color = "brown";
		}
		closure.style.backgroundColor = "#ffffff";
		closure.style.color = "black";
		header.style.backgroundImage = "url('./images/bgimgwhite.jpg')";
		header.style.color = "#996b17";
		document.getElementById('me').style.color = "#4f4f4f";
	}
}

//---------------PRINT FAMILY IMAGES-------------------------------------------------------------------

function chgImg(x) {
	var famimg = document.getElementById("famimg");
	famimg.style.opacity = "0";
	
	if (x == -1) {
		if (imgCounter == 1) {
			imgCounter = 5;
		}
		else {
			imgCounter--;
		}
	}
	if (x == 1) {
		if (imgCounter == 5) {
			imgCounter = 1;
		}
		else {
			imgCounter++;
		}
	}

	setTimeout(function(){ switch(imgCounter) {
		case 1: famimg.src = "./images/dad.jpeg";
				famimg.title = "the Dad!";
				break;
		case 2: famimg.src = "./images/mom.jpg";
				famimg.title = "the Mom!";
				break;
		case 3: famimg.src = "./images/bbro.jpeg";
				famimg.title = "the Big Bro!";
				break;
		case 4: famimg.src = "./images/sbro.JPG";
				famimg.title = "the Broski!";
				break;
		case 5: famimg.src = "./images/fam.jpg";
				famimg.title = "the Fam!";
				break;
	}},170);
	
	setTimeout(function() {famimg.style.opacity = "1"} , 200);
}
