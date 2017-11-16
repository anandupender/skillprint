document.addEventListener("DOMContentLoaded", function() {
  fillCols();
});

var skills = 'Ethnographic Research,Storytelling,Lathe & Mill,Lasercutting & 3D Printing,C & C++ & Python,HTML5 & CSS3 & JS,Unity,Sketch,AI,Leadership - President'.split(',');
var projects = 'MALT,Chess.,Brand Book,100k Challenge App,Piqo Wallets,Stanford LED Fountain,TEDxChurchillHighSchool,Lumy,Diskus,stanFORD Mobility Project,Meta'.split(',');
var groups = 'ME,IDEO CoLab,Cinder,StreetSense,Ford Innovation Center,Stanford d.school,Stanford,Stanford Robotics Club,BASES,TEDx,CCRMA'.split(',');



var skillMap = new Map(); // or var map = {};
skillMap.set("Ethnographic Research", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab,Stanford d.school'.split(','));
skillMap.set("Storytelling", 'stanFORD Mobility Project,Brand Book,Ford Innovation Center,IDEO CoLab,Stanford d.school,BASES'.split(','));
skillMap.set("Lathe & Mill", 'MALT,Stanford'.split(','));
skillMap.set("Lasercutting & 3D Printing", 'Chess.,Piqo Wallets,Lumy,Diskus,IDEO CoLab,Stanford'.split(','));
skillMap.set("C & C++ & Python", 'Chess.,IDEO CoLab,Stanford'.split(','));
skillMap.set("HTML5 & CSS3 & JS", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab'.split(','));
skillMap.set("Unity", 'Meta,CCRMA'.split(','));
skillMap.set("Sketch", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab,Stanford d.school'.split(','));
skillMap.set("AI - Tensorflow & K-Means)", 'stanFORD Mobility Project, Ford Innovation Center, IDEO CoLab, Stanford d.school'.split(','));
skillMap.set("Leadership - President", 'stanFORD Mobility Project, Ford Innovation Center, IDEO CoLab, Stanford d.school'.split(','));


function fillCols(){
	colFiller(skills, "col1");
	colFiller(projects, "col2");
	colFiller(groups, "col3");
}

function colFiller(array, string){
	var col = document.getElementById(string);
	for (var s in array) {
	    var newElement = document.createElement('p');
	    newElement.id = array[s]; 
	    //newElement.className = "skill";
	    newElement.innerHTML = array[s];
		newElement.addEventListener("mouseover", mouseOver, false);
		newElement.addEventListener("mouseout", mouseOut, false);

	    col.appendChild(newElement);
	}
}


function mouseOver(){
	this.style.color = "#00F38C";
	console.log(this.parentElement);
	if(this.parentElement.id == "col1"){
		var toHighlight = skillMap.get(this.id);
		console.log(toHighlight);
		for (var newElementId in toHighlight) {
			console.log(toHighlight[newElementId]);
		    var toChange = document.getElementById(toHighlight[newElementId]);
		    console.log(toChange);
		    toChange.style.color = "#00F38C"
		}
	}
}

function mouseOut(){
	this.style.color = "#F5F5F5";
		if(this.parentElement.id == "col1"){
		var toHighlight = skillMap.get(this.id);
		console.log(toHighlight);
		for (var newElementId in toHighlight) {
			console.log(toHighlight[newElementId]);
		    var toChange = document.getElementById(toHighlight[newElementId]);
		    console.log(toChange);
		    toChange.style.color = "#F5F5F5"
		}
	}
}