/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    "jobs": [
        {
            "employer": "IT Stability",
            "title": "Sysadmin",
            "location": "Elgin",
            "dates": "2008-2016",
            "description": " Moved servers around elit. Ut a ullamcorper quam, vel aliquet dolor. Morbi fringilla tellus metus, convallis vulputate dui auctor vitae. Ut sagittis turpis varius purus tincidunt, quis blandit justo placerat. Nullam turpis metus, porta sit amet arcu quis, egestas viverra lorem. Nullam volutpat suscipit enim, ac rhoncus tellus pulvinar a. Morbi lobortis, diam molestie lobortis ultricies, quam magna cursus quam, eget facilisis erat leo nec ligula. Sed eu nunc velit. Suspendisse mi arcu, scelerisque nec purus convallis, lobortis semper ante. Nullam lobortis pellentesque sem dictum congue. Nulla quis justo non mi tempus interdum. Donec consectetur vitae nisi a molestie. Aliquam finibus efficitur bibendum. Etiam imperdiet justo nisl, vel vehicula augue scelerisque at."
        },
        {
            "employer": "AdNET",
            "title": "Lvel 1 Tech",
            "location": "Elgin",
            "dates": "2004-2008",
            "description": "Installed computers ut porttitor ex ac ullamcorper suscipit. Aliquam in magna quis quam egestas dignissim. Sed et dolor iaculis, maximus sapien vitae, pellentesque enim. Curabitur eget vulputate quam, id congue ante. Vivamus quis neque sodales, finibus ante sed, congue arcu. Nam venenatis orci in tincidunt ultricies. Ut libero metus, fringilla ac placerat ac, accumsan id erat. Donec ut molestie libero. Nullam non ligula neque. Vestibulum eu velit nec lacus blandit volutpat"
        },
    ]
}

var projects = {
    "projects": [
        {
        "title": "Install Server",
        "date": "2009",
        "description": "Install a server to work on. Quisque eget dignissim metus. Aenean eget dictum lorem, at elementum magna. Ut vulputate felis id fringilla tristique. Sed aliquet leo vulputate nisl tincidunt volutpat. Quisque nec ornare purus, sed sagittis eros in."
        }
    ]    
}

var bio = {
    "name": "Anders Riedemann",
    "role": "Roleing",
    "welcomemessage": "Thanks for looking at my resume",
    "biopic": "images/me.jpg",
    "contacts":{
        "mobile": "115-337-4164",
        "email": "anders@airideas.net",
        "github": "airiedemann",
        "twitter": "@airiedemann",
        "location": "Chicago"
    }
}



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

for (job in work.jobs) {
    $("WorkExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data$",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployerTitle + formattedTitle;
    
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data$", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates)

    var formatttedDescription = HTMLworkDescription.replace("%data$", work.jobs[job].description);

    $(".work-entry:last").append(formatttedDescription);

}