/*
This is empty on purpose! Your code to build the resume will go here.
 */
var Bio = {
    name : "Sonali Homkar",
    role : "Full stack web developer",
    contacts : {
        mobile: "9850540724",
        email: "sonali.hirve@gmail.com" ,
        github: "https://github.com/SonaliHomkar",
        linkedin: "sonali.hirve@gmail.com",
        location: "Pune"
    },


welcomeMessage: "Welcome to my porfolio", 
skills: ["Python","javascript","Jquery","Linux web services"],
biopic: "",
};

var Work = {
    workStart: "July 23 2007",
    workEmployer: "Infosys",
    workTitle: "Programmer Analyst",
    workDates: "July 23 2007 -- Dec 1 2011",
    workLocation: "Pune",
    workDescription: "Worked as Team Lead and Business Analyst"

};


/*========= Octopus ==========*/
var octopus = {
    init: function () {
        // set our current cat to the first one in the list


        // tell our views to initialize
        ResumeView.init();

    },
    getBiodetails: function () {
        return Bio;
    },
    getWorkDetails: function () {
        return Work;
    }
};

/*======== View ==============*/
var ResumeView = {
    init: function () {
        // store pointers to our DOM elements for easy access later
        this.headerele = document.getElementById("header");
        this.workele = document.getElementById("workExperience");
        
        this.render();
    },
    render: function () {
        var Bio = octopus.getBiodetails();
        this.headerele.innerHTML = HTMLheaderName.replace('%data%', Bio.name);
        this.headerele.innerHTML += HTMLheaderRole.replace('%data%', Bio.role);
        this.headerele.innerHTML += HTMLmobile.replace('%data%', Bio.contacts.mobile);
        this.headerele.innerHTML += HTMLemail.replace('%data%', Bio.contacts.email);
        this.headerele.innerHTML += HTMLtwitter.replace('%data%', Bio.contacts.linkedin);
        this.headerele.innerHTML += HTMLgithub.replace('%data%', Bio.contacts.github);
        this.headerele.innerHTML += HTMLlocation.replace('%data%', Bio.contacts.location);
        this.headerele.innerHTML += HTMLwelcomeMsg.replace('%data%', Bio.welcomeMessage);
        this.headerele.innerHTML += HTMLskillsStart
        this.headerele.innerHTML += HTMLskills.replace('%data%', Bio.skills.join(','));
        
        var work = octopus.getWorkDetails();
        this.workele.innerHTML = HTMLworkStart
        this.workele.innerHTML += HTMLworkEmployer.replace('%data%', work.workEmployer);
        this.workele.innerHTML += HTMLworkTitle.replace('%data%', work.workTitle);
        this.workele.innerHTML += HTMLworkDates.replace('%data%', work.workDates);
        this.workele.innerHTML += HTMLworkLocation.replace('%data%', work.workLocation);
        this.workele.innerHTML += HTMLworkDescription.replace('%data%', work.workDescription);


        
        
    }
};
octopus.init();



