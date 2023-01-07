const pageSections = [
    {
        sectionButtonId: "section-education-button", 
        sectionElementId: "education"
    },
    {
        sectionButtonId: "section-experience-button", 
        sectionElementId: "work-experience"
    },
    {
        sectionButtonId: "section-skills-button", 
        sectionElementId: "skills"
    },
    {
        sectionButtonId: "section-hobbies-button", 
        sectionElementId: "hobbies"
    },
    {
        sectionButtonId: "section-resume-button", 
        sectionElementId: "resume"
    },
];

pageSections.forEach(function(section) {
    const sectionButton = document.getElementById(section["sectionButtonId"]);
    const sectionElement = document.getElementById(section["sectionElementId"]);

    sectionButton.addEventListener("click", function(event) {
        sectionElement.scrollIntoView({
            behavior: "smooth"
        });
    })
});