/**
 * Bio
 **/
var bio = {
    "name": "Anders Riedmeann",
    "role": "Web Developer",
    "contacts": {
        "mobile": "312-124-1486",
        "email": "anders@airideas.net",
        "github": "anders",
        "twitter": "@anders",
        "location": "Chicago, IL"
    },
    "welcomeMessage": "Thanks for looking. Integer mattis ex sit amet erat condimentum semper. Mauris pellentesque sit amet ipsum et bibendum. Aliquam auctor lectus in tellus gravida, sed luctus est accumsan.",
    "biopic": "images/me.jpg",
    "skills": ["Building Websites", "Fixing Servers", "Cooking a Mean Hot Chocolate"], //make a loop for the skills
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
<<<<<<< HEAD
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedLTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        var formattedLGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedLBioPic = HTMLbioPic.replace("%data%",bio.biopic);
        var formattedLWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        var formattedHTMLlocation = HTMLlocation.replace("%data%",bio.contacts.location);


        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedLTwitter);
        $("#topContacts").append(formattedLGithub);
        $("#topContacts").append(formattedHTMLlocation);


        $("#header").append(formattedLBioPic);
        $("#header").append(formattedLWelcomeMsg);

        $("#header").append(HTMLskillsStart);
        // for each https://discussions.udacity.com/t/my-education-section-is-not-appearing/196231
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     for (var i = 0; i < bio.skills.length; i++){
         var formattedHTMLskills = HTMLskills.replace("%data%",bio.skills[i]);
         $("#header:last").append(formattedHTMLskills);
    };
=======
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedLTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedLWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);


        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedLTwitter);
        $("#topContacts").append(formattedLGithub);
        $("#topContacts").append(formattedHTMLlocation);


        $("#header").append(formattedLBioPic);
        $("#header").append(formattedLWelcomeMsg);

        $("#header").append(HTMLskillsStart);
        // for each https://discussions.udacity.com/t/my-education-section-is-not-appearing/196231
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header:last").append(formattedHTMLskills);
        }
>>>>>>> origin/master
    }
};

bio.display();

/**
 * Work
 **/

var work = {
    "jobs": [{
        "employer": "Canned Tech",
        "title": "Sysadmin",
        "location": "Elgin, IL",
        "dates": "2008-2016",
        "description": " Moved servers around elit. Ut a ullamcorper quam, vel aliquet dolor. Morbi fringilla tellus metus, convallis vulputate dui auctor vitae. Ut sagittis turpis varius purus tincidunt, quis blandit justo placerat. Nullam turpis metus, porta sit amet arcu quis, egestas viverra lorem. Nullam volutpat suscipit enim, ac rhoncus tellus pulvinar a. Morbi lobortis, diam molestie lobortis ultricies, quam magna cursus quam, eget facilisis erat leo nec ligula. Sed eu nunc velit. Suspendisse mi arcu, scelerisque nec purus convallis, lobortis semper ante. Nullam lobortis pellentesque sem dictum congue. Nulla quis justo non mi tempus interdum. Donec consectetur vitae nisi a molestie. Aliquam finibus efficitur bibendum. Etiam imperdiet justo nisl, vel vehicula augue scelerisque at."
    }, {
        "employer": "Shure Computer Service",
        "title": "Lvel 1 Tech",
        "location": "Chicago, IL",
        "dates": "2004-2008",
        "description": "Installed computers ut porttitor ex ac ullamcorper suscipit. Aliquam in magna quis quam egestas dignissim. Sed et dolor iaculis, maximus sapien vitae, pellentesque enim. Curabitur eget vulputate quam, id congue ante. Vivamus quis neque sodales, finibus ante sed, congue arcu. Nam venenatis orci in tincidunt ultricies. Ut libero metus, fringilla ac placerat ac, accumsan id erat. Donec ut molestie libero. Nullam non ligula neque. Vestibulum eu velit nec lacus blandit volutpat"
    }],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formatttedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formatttedDescription);
        }
<<<<<<< HEAD
    ],
    "display": function(){
      for (var  i = 0; i < work.jobs.length; i++) {
          $("#workExperience").append(HTMLworkStart);
          var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
          var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;
          $(".work-entry:last").append(formattedEmployerTitle);
          var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
          $(".work-entry:last").append(formattedDates)
          var formatttedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
          $(".work-entry:last").append(formatttedDescription);
    };
  },
}
=======
    },
};
>>>>>>> origin/master
work.display();

/**
 * Projects
 **/

var projects = {
    "projects": [{
        "title": "Install Server",
        "dates": "2009",
        "description": "Install a server to work on. Quisque eget dignissim metus. Aenean eget dictum lorem, at elementum magna. Ut vulputate felis id fringilla tristique. Sed aliquet leo vulputate nisl tincidunt volutpat. Quisque nec ornare purus, sed sagittis eros in.",
        "images": ["images/cat1.jpg", "images/cat3.jpg"]
    }, {
        "title": "Updated Domain",
        "dates": "2013",
        "description": "Setup a new domain. Quisque nec ornare purus, sed sagittis eros in. Quisque eget dignissim metus. Aenean eget dictum lorem, at elementum magna. Quisque nec ornare purus, sed sagittis eros in.",
        "images": ["images/cat2.jpg", "images/cat4.png"]
    }],
    "display": ""
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

//Show projects
projects.display();

/**
 * Education
 **/

var education = {
    "schools": [{
        "name": "Elgin Community College",
        "location": "Elgin, IL",
        "degree": "AS",
        "majors": ["Networking", "System Admistration"],
        "dates": "2004-2006",
        "url": "elgin.edu"
    }, {
        "name": "Northern Illinois University",
        "location": "DeKalb, IL",
        "degree": "BA",
        "majors": ["Network Security", "Infrastructure Admistration"],
        "dates": "2007-2011",
        "url": "niu.edu"
    }],
    "onlineCourses": [{
        "title": "Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }, ],
    "display": function() {
        //school start
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedTitleSchool = formattedschoolName + formattedschoolDegree;
            $(".education-entry:last").append(formattedTitleSchool);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedschoolDates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedschoolLocation);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedschoolMajor);
        }
        //online school start
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var formattedTitleOnlineSchool = formattedonlineTitle + formattedonlineSchool;
            $(".education-entry:last").append(formattedTitleOnlineSchool); // last applies to the "this one" - take the last out and see whats up
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            $(".education-entry:last").append(formattedonlineDates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            $(".education-entry:last").append(formattedonlineURL);
        }
    }
};

// Show education data
education.display();

// Start Google Maps here
$("#mapDiv").append(googleMap);