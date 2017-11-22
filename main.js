document.addEventListener("DOMContentLoaded", function() {
  fillCols();
});

var skills = 'Ethnographic Research,Storytelling,Lathe & Mill,Lasercutting & 3D Printing,C & C++ & Python,HTML5 & CSS3 & JS,ChucK,Arduino,Unity,Sketch,AI,Team Lead'.split(',');
var projectsOld = 'malt,Chess.,Brand Book,100k Challenge App,Piqo Wallets,Stanford LED Fountain,TEDxChurchillHighSchool,Lumy,stanFORD Mobility Project,Meta'.split(',');
var groups = 'IDEO CoLab,Ford Innovation Center,Stanford d.school,Stanford,Stanford Robotics Club,BASES,TEDx,CCRMA'.split(',');

// var skillMap = new Map(); // or var map = {};
// skillMap.set("Ethnographic Research", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab,Stanford d.school'.split(','));
// skillMap.set("Storytelling", 'stanFORD Mobility Project,Brand Book,Ford Innovation Center,IDEO CoLab,Stanford d.school,BASES'.split(','));
// skillMap.set("Lathe & Mill", 'malt,Stanford'.split(','));
// skillMap.set("Lasercutting & 3D Printing", 'Chess.,Piqo Wallets,Lumy,Diskus,IDEO CoLab,Stanford'.split(','));
// skillMap.set("C & C++ & Python", 'Chess.,IDEO CoLab,Stanford'.split(','));
// skillMap.set("HTML5 & CSS3 & JS", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab'.split(','));
// skillMap.set("Unity", 'Meta,CCRMA'.split(','));
// skillMap.set("Sketch", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab,Stanford d.school'.split(','));
// skillMap.set("AI - Tensorflow & K-Means)", 'stanFORD Mobility Project, Ford Innovation Center, IDEO CoLab, Stanford d.school'.split(','));
// skillMap.set("Team Lead", 'stanFORD Mobility Project,Ford Innovation Center,Stanford Robotics Club'.split(','));

var projectMap = new Map(); // or var map = {};
projectMap.set("malt", 'Lathe & Mill,Stanford'.split(','));
projectMap.set("Chess.", 'Lasercutting & 3D Printing,C & C++ & Python,Stanford'.split(','));
projectMap.set("Brand Book", 'Storytelling,Sketch,BASES'.split(','));
projectMap.set("100k Challenge App", 'Sketch,BASES'.split(','));
projectMap.set("Piqo Wallets", 'Lasercutting & 3D Printing,ME'.split(','));
projectMap.set("Stanford LED Fountain", 'Lasercutting & 3D Printing,Stanford'.split(','));
projectMap.set("TEDxChurchillHighSchool", 'Storytelling,Team Lead,TEDx'.split(','));
projectMap.set("Lumy", 'Lasercutting & 3D Printing,Arduino,Stanford Robotics Club'.split(','));
projectMap.set("Diskus", 'Lasercutting & 3D Printing,Ardunio,Stanford'.split(','));
projectMap.set("stanFORD Mobility Project", 'Ethnographic Research,Storytelling,Ford Innovation Center'.split(','));
projectMap.set("Meta", 'Unity,ChucK,C & C++ & Python,CCRMA'.split(','));

var projects = 'Stanford Robotics Club,stanFORD Mobility Project,Pear,ENGR245,malt,Piqo Wallets,TEDxChurchillHighSchool,Chess.,Meta,Flatland,Stanford LED Fountain,Lumy,BASES Brand Book,IDEO CoLab,Cinder'.split(',');



var accessPoint = new Map(); // or var map = {};
accessPoint.set("Leading Teams", 'Stanford Robotics Club,stanFORD Mobility Project'.split(','));
accessPoint.set("Running Lean", 'Pear,ENGR245'.split(','));
accessPoint.set("Founding Groups", 'TEDxChurchillHighSchool'.split(','));
accessPoint.set("Building Analog Things", 'malt,Piqo Wallets'.split(','));
accessPoint.set("Connecting Physical and Digital", 'Chess.,Stanford LED Fountain'.split(','));
accessPoint.set("Creating Digital Instruments", 'Meta,Flatland'.split(','));
// accessPoint.set("Hacking Emotional Lights", 'Stanford LED Fountain,Lumy'.split(','));
accessPoint.set("Branding Groups", 'Stanford Robotics Club,BASES Brand Book'.split(','));
accessPoint.set("Work", 'IDEO CoLab,Cinder'.split(','));

function fillCols(){
	colFiller(Array.from( accessPoint.keys() ), "col1");
	colFiller(projects, "col2");
	// colFiller(groups, "col3");
}

function colFiller(array, string){
	var col = document.getElementById(string);
	for (var s in array) {
	    var newElement = document.createElement('p');
	    newElement.id = array[s]; 
	    newElement.innerHTML = array[s];
	    if(string == "col1"){
			newElement.addEventListener("mouseover", mouseOver, false);
			newElement.addEventListener("click", onClick, false);

			newElement.addEventListener("mouseout", mouseOut, false);
		}
	    col.appendChild(newElement);
	}
}

var currentId = "";

function mouseOver(){

	this.style.color = "black";

	console.log(this.parentElement);
	if(this.parentElement.id == "col1"){
		var toHighlight = accessPoint.get(this.id);
	}
	else if(this.parentElement.id == "col2"){
		var toHighlight = projectMap.get(this.id);
	}

	console.log(toHighlight);
	for (var newElementId in toHighlight) {
		console.log(toHighlight[newElementId]);
	    var toChange = document.getElementById(toHighlight[newElementId]);
	    console.log(toChange);
	    toChange.style.color = "black"
	}

}

function mouseOut(){
	this.style.color = "white";
	this.style.textShadow= "none";

	if(this.parentElement.id == "col1"){
		var toHighlight = accessPoint.get(this.id);
		console.log(toHighlight);
	}
	else if(this.parentElement.id == "col2"){
		var toHighlight = projectMap.get(this.id);
	}
	for (var newElementId in toHighlight) {
		console.log(toHighlight[newElementId]);
	    var toChange = document.getElementById(toHighlight[newElementId]);
	    console.log(toChange);
	    toChange.style.color = "white"
	}
	// var imageToRemove = document.getElementById("createdImage");
	// imageToRemove.parentNode.removeChild(imageToRemove);
}

function onClick(){
	var bothIds = accessPoint.get(this.id);

	//change images
	if(bothIds[0] != undefined){
		var newImage1 = document.getElementById('image-1');
		newImage1.setAttribute("src", "images/"+bothIds[0]+".jpg");
		document.getElementById('title-1').innerHTML = bothIds[0];

	}
	if(bothIds[1] != undefined){
		var newImage2 = document.getElementById('image-2');
		newImage2.setAttribute("src", "images/"+bothIds[1]+".jpg");
		document.getElementById('title-2').innerHTML = bothIds[1];
	}
	else{
		var newImage2 = document.getElementById('image-2');
		newImage2.setAttribute("src", "");
		document.getElementById('title-2').innerHTML = "";
	}

}

