/**
 *
 * Bio
 *
 *
**/

var bio = {
    "name": "Anders Riedmeann",
    "role": "Web Developer",
    "contact": {
        "mobile": "312-124-1486",
        "email": "anders@airideas.net",
        "github": "anders",
        "twitter": "@anders"
    },
    "bio": "I like coffee",
    "pictureurl": "images/me.jpg",
    "welcomemessage": "Thanks for looking. Integer mattis ex sit amet erat condimentum semper. Mauris pellentesque sit amet ipsum et bibendum. Aliquam auctor lectus in tellus gravida, sed luctus est accumsan.",
    "skills": ["driving","walking","eating"],
    "location": "Chicago"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedLEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedLTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
var formattedLGithub = HTMLgithub.replace("%data%",bio.contact.github);
var formattedLBioPic = HTMLbioPic.replace("%data%",bio.pictureurl);
var formattedLWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
var formattedHTMLlocation = HTMLlocation.replace("%data%",bio.location);
var formattedHTMLskillsStart = HTMLwelcomeMsg.replace("%data%",bio.skills[0]);
//var formattedLSkillsStart = HTMLskillsStart


for (skills in bio.skills) {
var formattedLHTMLskills = HTMLskills.replace("%data%",bio.skills[skills]);
}


$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedLEmail);
$("#header").append(formattedLTwitter);
$("#header").append(formattedLGithub);

$("#header").append(formattedHTMLlocation);
$("#header").append(formattedLBioPic);
$("#header").append(formattedLWelcomeMsg);

// $("#header").append(formattedLSkillsStart);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedLHTMLskills);


// $("#main").append(formattedWorkEmployer);
// $("#main").append(formattedWorkPosition);
// $("#main").append(formattedWorkYears);
// $("#main").append(formattedWorkCity);
// $("#main").append(eduaction["years"]);

// $("main").append(eduaction["name"]);

// var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.employer);
// var formattedWorkPosition = HTMLworkEmployer.replace("%data%",work.position);
// var formattedWorkYears = HTMLworkEmployer.replace("%data%",work.years);
// var formattedWorkCity = HTMLworkEmployer.replace("%data%",work.city);

/**
 * Education
 *
 *
**/

var education = {
    "schools": [
        {
            "name": "Elgin Community College",
            "location": "Elgin",
            "degree": "AS",
            "major": ["Network","System Admistration"],
            "dates": "2004"
            
        },
        {
            "name": "northern illinois university",
            "city": "DeKalb",
            "degree": "BA",
            "major":["Network Security"]
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegrees",
            "school": "Udacity",
            "dates": "2016",
            "url": "Udacity.com"
        }
    ]
}

// Work
var work = {
    "jobs": [
        {
            "employer": "Canned Tech",
            "title": "Sysadmin",
            "location": "Burbs",
            "dates": "2008-2016",
            "description": " Moved servers around elit. Ut a ullamcorper quam, vel aliquet dolor. Morbi fringilla tellus metus, convallis vulputate dui auctor vitae. Ut sagittis turpis varius purus tincidunt, quis blandit justo placerat. Nullam turpis metus, porta sit amet arcu quis, egestas viverra lorem. Nullam volutpat suscipit enim, ac rhoncus tellus pulvinar a. Morbi lobortis, diam molestie lobortis ultricies, quam magna cursus quam, eget facilisis erat leo nec ligula. Sed eu nunc velit. Suspendisse mi arcu, scelerisque nec purus convallis, lobortis semper ante. Nullam lobortis pellentesque sem dictum congue. Nulla quis justo non mi tempus interdum. Donec consectetur vitae nisi a molestie. Aliquam finibus efficitur bibendum. Etiam imperdiet justo nisl, vel vehicula augue scelerisque at."
        },
        {
            "employer": "Shure Computer Service",
            "title": "Lvel 1 Tech",
            "location": "Chicago",
            "dates": "2004-2008",
            "description": "Installed computers ut porttitor ex ac ullamcorper suscipit. Aliquam in magna quis quam egestas dignissim. Sed et dolor iaculis, maximus sapien vitae, pellentesque enim. Curabitur eget vulputate quam, id congue ante. Vivamus quis neque sodales, finibus ante sed, congue arcu. Nam venenatis orci in tincidunt ultricies. Ut libero metus, fringilla ac placerat ac, accumsan id erat. Donec ut molestie libero. Nullam non ligula neque. Vestibulum eu velit nec lacus blandit volutpat"
        },
    ]
}
function displaywork (){
    for (job in work.jobs) {
        //console.count();
        $("#workExperience").append(HTMLworkStart);

        // console.log(work.jobs[job].employer);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;   
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates)

        var formatttedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
        $(".work-entry:last").append(formatttedDescription);

    }
};

displaywork();

// Projects 

var projects = {
    "projects": [
        {
        "title": "Install Server",
        "dates": "2009",
        "description": "Install a server to work on. Quisque eget dignissim metus. Aenean eget dictum lorem, at elementum magna. Ut vulputate felis id fringilla tristique. Sed aliquet leo vulputate nisl tincidunt volutpat. Quisque nec ornare purus, sed sagittis eros in.",
        "images": "images/cat2.jpg"
        },
        {
        "title": "Updated Domain",
        "dates": "2013",
        "description": "Setup a new domain .Quisque nec ornare purus, sed sagittis eros in. Quisque eget dignissim metus. Aenean eget dictum lorem, at elementum magna. Quisque nec ornare purus, sed sagittis eros in.",
        "images": "images/cat1.jpg"
        }
    ]    
}

projects.display = function() {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        //  console.count();

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $("projects-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            };
        };
    };

};

projects.display();