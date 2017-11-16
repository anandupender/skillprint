document.addEventListener("DOMContentLoaded", function() {
  fillCols();
});

var skills = 'Ethnographic Research,Storytelling,Lathe & Mill,Lasercutting & 3D Printing,C & C++ & Python,HTML5 & CSS3 & JS,ChucK,Arduino,Unity,Sketch,AI,Team Lead'.split(',');
var projects = 'malt,Chess.,Brand Book,100k Challenge App,Piqo Wallets,Stanford LED Fountain,TEDxChurchillHighSchool,Lumy,stanFORD Mobility Project,Meta'.split(',');
var groups = 'ME,IDEO CoLab,Cinder,StreetSense,Ford Innovation Center,Stanford d.school,Stanford,Stanford Robotics Club,BASES,TEDx,CCRMA'.split(',');

var skillMap = new Map(); // or var map = {};
skillMap.set("Ethnographic Research", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab,Stanford d.school'.split(','));
skillMap.set("Storytelling", 'stanFORD Mobility Project,Brand Book,Ford Innovation Center,IDEO CoLab,Stanford d.school,BASES'.split(','));
skillMap.set("Lathe & Mill", 'malt,Stanford'.split(','));
skillMap.set("Lasercutting & 3D Printing", 'Chess.,Piqo Wallets,Lumy,Diskus,IDEO CoLab,Stanford'.split(','));
skillMap.set("C & C++ & Python", 'Chess.,IDEO CoLab,Stanford'.split(','));
skillMap.set("HTML5 & CSS3 & JS", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab'.split(','));
skillMap.set("Unity", 'Meta,CCRMA'.split(','));
skillMap.set("Sketch", 'stanFORD Mobility Project,Ford Innovation Center,IDEO CoLab,Stanford d.school'.split(','));
skillMap.set("AI - Tensorflow & K-Means)", 'stanFORD Mobility Project, Ford Innovation Center, IDEO CoLab, Stanford d.school'.split(','));
skillMap.set("Team Lead", 'stanFORD Mobility Project,Ford Innovation Center,Stanford Robotics Club'.split(','));

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
	    newElement.innerHTML = array[s];
	    if(string == "col2"){
			newElement.addEventListener("mouseover", mouseOver, false);
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
		var toHighlight = skillMap.get(this.id);
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
	var newImage = document.createElement('img');
	newImage.setAttribute("src", "images/"+this.id+".jpg");

	//take care of first image input
	if(currentId == ""){
		this.parentNode.insertBefore(newImage, this.nextSibling);
		currentId = this.id;
	}

	if(currentId != this.id){
		//delete last image
		var imageToRemove = document.getElementById("createdImage");
		if(imageToRemove.className != this.id){
			console.log("am deleting it!", this.id);
			imageToRemove.parentNode.removeChild(imageToRemove);
		}
		//insert new image
		this.parentNode.insertBefore(newImage, this.nextSibling);
		currentId = this.id;
	}
	newImage.id = "createdImage";
	newImage.className = this.id;

}

function mouseOut(){
	this.style.color = "white";
	this.style.textShadow= "none";

	if(this.parentElement.id == "col1"){
		var toHighlight = skillMap.get(this.id);
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

