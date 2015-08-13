var bio={
	"name" : "Piellia Vasyl",
	"role" : "UI Developer Trainee (HTML5, CSS3, JavaScript) (IRC32647)",
	"contacts": {
		"type": ["mobile",	"email", "github", "location"],
		"value": ["123-456-789", "pellia@ukr.net", "PielliaVasyl", "Kiev"]
	},
	"welcomeMessage": "",
	"skills" : ["knowledge of Python (1 year)", "frontend technologies stack: JavaScript, JSON, Bootstrap, jQuery", 
"experience with PostgreSQL, OOP", "background in algorithms and data structures",
"Git, GitHub, HTML, CSS, ORM as an alternative to SQL", "Descriptive & Inferential Statistics",
"https://github.com/PielliaVasyl/", "Technical English"
    ],
	"bioPic" : "images/avatar.jpg"	
};

var work = {
	"jobs": [
	{
		"position": "Entrepreneur",
		"employer": "White Rose Consulting",
		"years": "2013-2014",
		"description": "launch project 'White Rose' (http://white-ro.se/)",

	}]
};

var education = {
	"schools": [
	{
		"name": "Kyiv National University of Construction and Architecture",
		"location": "Kiev",
		"degree": "Masters",
		"majors": "Construction engineer",
		"dates": "2008 - 2013"
	}],
	"onlineCourses": [
	{
		"title": "Intro to Computer Science",
		"school": "Udacity",
		"dates": "2014",
		"url":"https://www.udacity.com/course/intro-to-computer-science--cs101"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2014",
		"url":"https://www.udacity.com/course/javascript-basics--ud804"
	},
	{
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"dates": "2014",
		"url":"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
	},
	{
		"title": "Full Stack Foundations",
		"school": "Udacity",
		"dates": "2015",
		"url":"https://www.udacity.com/course/full-stack-foundations--ud088"
	},
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2015",
		"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
	}]
};

var projects = {
	"projects": [
	{
		"title": "White Rose",
		"dates": "2013-2014",
		"description": "CMS, SEO, copywriter, HTML, CSS, JS, Marketing",
		"images": [
		"http://white-ro.se/wp-content/themes/squares/images/logo.png",
		"http://white-ro.se/wp-content/uploads/2014/11/freetaxi1-300x225.jpg"
		]
	}
	]
};

if(bio.role) {
	$('#header').prepend(HTMLheaderRole.replace("%data%",bio.role))
}
if(bio.name) {
	$('#header').prepend(HTMLheaderName.replace("%data%",bio.name))
}
if(bio.contacts) {
	for(var contact in bio.contacts.type) {
		$("#topContacts").append(HTMLcontactGeneric.replace("%contact%",bio.contacts.type[contact]).
		replace("%data%",bio.contacts.value[contact]))
	}
}

if(bio.bioPic){
	$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
}

if(bio.welcomeMessage){
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
}
if(bio.skills) {
	$("#header").append(HTMLskillsStart);
	for(var skill in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]))
	}
}
function displayWork() {
	if(work.jobs){
		for(var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
		
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].years);
			$(".work-entry:last").append(formattedDates);
		
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

function inName(name){
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice[1].toLowerCase();
	return name[0] + " " + name[1];
};

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		for (image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}	
	}
};

function displayEducation(){
	$("#education").append(HTMLschoolStart);
		
	for(school in education.schools){
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree
		$(".education-entry:last").append(formattedNameDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	};
	if(education.onlineCourses){
		$(".education-entry:last").append(HTMLonlineClasses);
		for(course in education.onlineCourses){
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			
			
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedDates);
			
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
	}
	};
};

displayWork();
displayProjects();
displayEducation();
$("#mapDiv").append(googleMap);