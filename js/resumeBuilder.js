
var bio = {
    "name": "Sarah A Clements",
    "role": "Web Developer",
    "contacts": {
        "mobile": "415-306-6792",
        "email": "sclements313@gmail.com",
        "github": "sarah-clements",
        "linkedIn": "saclements1",
        "location": "San Francisco"
    },
    "welcomeMessage": "\"Character - the willingness to accept responsibility for one's own life - is the source from which self-respect springs.\" - Joan Didion",
    "skills": ["html5", "CSS", "Javascript", "Adobe CreativeSuite"],
    "bioPic": "images/Professionalpic1.jpg",

    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedNameRole = formattedName + formattedRole;
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").prepend(formattedNameRole).append(formattedbioPic, formattedwelcomeMsg, HTMLskillsStart);
        $("#topContacts").append(formattedLocation, formattedLinkedIn, formattedGithub, formattedEmail, formattedMobile);

        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#header").append(formattedSkills);
        });
        $("#footerContacts").append(formattedGithub, formattedEmail, formattedLinkedIn);
    }
};
bio.display();

var work = {
    "jobs": [{
        "employer": "Ada Initiative",
        "title": "Executive Assistant",
        "dates": "January 2015 - October 2015",
        "location": "San Francisco, CA",
        "description": "Coordinated workshops, managed wordPress website and blog posts, created grant reports, managed non-profit operational needs, provided executive, accounting and bookkeeping support."
    }, {
        "employer": "Williams-Sonoma, Inc - Pottery Barn brand",
        "title": "Production and Visual Coordinator",
        "dates": "October 2012 - August 2014",
        "location": "San Francisco, CA",
        "description": "Coordinated the production of deadline-driven retail print collateral touching all aspects from design, pre-production through to post-press, including liaising with vendors and various departments; assisted other departments with design projects."
    }, {
        "employer": "Spafax Canada",
        "title": "Sales Services and Media Coordinator",
        "dates": "July 2008 - October 2011",
        "location": "Toronto, ON, Canada",
        "description": "Provided administrative support to the Director of Sales and Sales and Marketing team; assisted with client presentations and proposals, market research data for various media platforms."
    }, {
        "employer": "Dubwear, Inc",
        "title": "Production Assistant",
        "dates": "December 2006 - January 2008",
        "location": "Toronto, ON, Canada",
        "description": "Provided administrative and design support to the Creative Director and coordinated the design approval process."
    }],

    display: function() {
        // for(item in work.jobs) {
        work.jobs.forEach(function(item) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", item.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", item.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", item.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", item.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", item.description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
        });
    }
};
work.display();

var projects = {
    "projectsArray": [{
        "title": "Portfolio",
        "date": "May 2016",
        "description": "Portfolio of Udacity projects",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }],

    display: function() {
        projects.projectsArray.forEach(function(item) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", item.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", item.date);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", item.description);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

            if (item.images.length > 0) {
                item.images.forEach(function(img) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", img);
                    $(".project-entry:last").append(formattedProjectImage);
                });
            }
        });

    }
};
projects.display();

var education = {
    "schools": [{
        "name": "Seneca College of Applied Arts and Technology",
        "degree": "Fashion Arts, 3 year degree",
        "dates": "2002-2005",
        "location": "Toronto, ON, Canada",
        "major": "Fashion Design"
    }, {
        "name": "Robert E. Lee Highschool",
        "degree": "Diploma",
        "dates": "1998-2001",
        "location": "Springfield, VA, US",
        "major": "n/a"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "May 2016 - July 2016",
        "online_url": "www.udacity.com/"
    }],

    display: function() {
        education.schools.forEach(function(item) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", item.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", item.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", item.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", item.location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", item.major);
            $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
        });

        education.onlineCourses.forEach(function(item) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", item.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", item.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", item.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", item.online_url);
            $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
        });
    }
};
education.display();

// JQuery effects

// Internationalize name
function inName(newName) {
    newName = bio.name.replace(/Clements/, "CLEMENTS");
    return newName;
}
$("#main").append(internationalizeButton);

// Display the map
$("#mapDiv").append(googleMap);