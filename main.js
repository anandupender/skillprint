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
projectMap.set("100k Challenge App", 'Sketc h,BASES'.split(','));
projectMap.set("Piqo Wallets", 'Lasercutting & 3D Printing,ME'.split(','));
projectMap.set("Stanford LED Fountain", 'Lasercutting & 3D Printing,Stanford'.split(','));
projectMap.set("TEDxChurchillHighSchool", 'Storytelling,Team Lead,TEDx'.split(','));
projectMap.set("Lumy", 'Lasercutting & 3D Printing,Arduino,Stanford Robotics Club'.split(','));
projectMap.set("Diskus", 'Lasercutting & 3D Printing,Ardunio,Stanford'.split(','));
projectMap.set("stanFORD Mobility Project", 'Ethnographic Research,Storytelling,Ford Innovation Center'.split(','));
projectMap.set("Meta", 'Unity,ChucK,C & C++ & Python,CCRMA'.split(','));

//var projects = 'Stanford Robotics Club,stanFORD Mobility Project,Pear,Lean Launchpad TA,malt,Piqo Wallets,TEDxChurchillHighSchool,Chess.,Meta,Flatland,Stanford LED Fountain,Lumy,BASES Brand Book,IDEO CoLab,Cinder'.split(',');

var accessPoint = new Map(); // or var map = {};
accessPoint.set("Leading Teams", 'Stanford Robotics Club,stanFORD Mobility Project'.split(','));
accessPoint.set("Running Lean", 'Pear,Lean Launchpad TA'.split(','));
accessPoint.set("Founding Groups", 'TEDxChurchillHighSchool'.split(','));
accessPoint.set("Building Analog Things", 'malt,Piqo Wallets'.split(','));
accessPoint.set("Connecting Physical and Digital", 'Chess.,Stanford LED Fountain'.split(','));
accessPoint.set("Creating Digital Instruments", 'Meta,Flatland'.split(','));
// accessPoint.set("Hacking Emotional Lights", 'Stanford LED Fountain,Lumy'.split(','));
accessPoint.set("Branding Groups", 'Stanford Robotics Club,BASES Brand Book'.split(','));
accessPoint.set("Work", 'IDEO CoLab,Cinder'.split(','));

var projects = new Map();
projects.set("Stanford Robotics Club",'StanfordRoboticsClub.jpg,Co-President 2017-2018'.split(','));
projects.set("stanFORD Mobility Project",'stanFORDMobilityProject,Team Lead - Ford Innovation Center.jpg'.split(','));
projects.set("Pear",''.split(','));
projects.set("Lean Launchpad TA",'LeanLaunchpad.jpg,2018 TA - Design and Curriculum'.split(','));
projects.set("malt",'Malt.jpg,ME203 Milkshake Machine'.split(','));
projects.set("Piqo Wallets",'PiqoWallets.jpg,20+ prototypes'.split(','));
projects.set("TEDxChurchillHighSchool",'TEDxChurchillHighSchool.jpg,Organizer and Curator'.split(','));
projects.set("Chess.",'Chess..jpg,Digitally Connected Smart Chess Board'.split(','));
projects.set("Meta",'Meta.jpg,Sound Sequencer of a Meta Text Editor'.split(','));
projects.set("Flatland",'Flatland.jpg,Sound Visualizer that Explores the Dimensions'.split(','));
projects.set("Stanford LED Fountain",'StanfordLEDFountain.jpg,7-foot tall Interactive LED Sculpture'.split(','));
projects.set("Lumy",'Lumy.jpg,All-purpose Light'.split(','));
projects.set("BASES Brand Book",'BASESBrandBook.jpg'.split(','));
projects.set("IDEO CoLab",'IDEOCoLab.jpg,Venture Design Fellow'.split(','));
projects.set("Cinder",''.split(','));



function fillCols(){
	colFiller(Array.from( accessPoint.keys() ), "col1");
	colFiller(Array.from( projects.keys() ), "col2");
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
	this.style.color = "#BBBBBB";
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
	    toChange.style.color = "#BBBBBB"
	}
	// var imageToRemove = document.getElementById("createdImage");
	// imageToRemove.parentNode.removeChild(imageToRemove);
}

function onClick(){
	var bothIds = accessPoint.get(this.id);
	console.log(bothIds);
	//change images
	if(bothIds[0] != undefined){
		var newImage1 = document.getElementById('card2');
		var image1 = "url(images/"+projects.get(bothIds[0])[0]+")";
			console.log(image1);

		newImage1.style.backgroundImage = image1;
		document.getElementById('card1-text').innerHTML = bothIds[0];
		document.getElementById('card1-subtext').innerHTML = projects.get(bothIds[0])[1];

	}
	if(bothIds[1] != undefined){
		var newImage2 = document.getElementById('card4');
		var image2 = "url(images/"+projects.get(bothIds[1])[0]+")";
		newImage2.style.backgroundImage = image2;		
		document.getElementById('card3-text').innerHTML = bothIds[1];
		document.getElementById('card3-subtext').innerHTML = projects.get(bothIds[1])[1];

	}
	else{
		var newImage2 = document.getElementById('card4');
		newImage2.style.backgroundImage = "";	
	}

	//remove headshot
	var newImage3 = document.getElementById('card1');

	newImage3.style.backgroundImage = "none";	

}

