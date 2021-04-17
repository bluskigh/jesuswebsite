// on load of the page, wait .5s and fade the nav into existence
setTimeout(() => {
    document.querySelector("nav").classList.remove("hidden-opacity");
}, 500);
setTimeout(() => {
    document.querySelector("#header-information").classList.remove("hidden-opacity");
}, 800)

const WINDOW_WIDTH = window.innerWidth;

// Universal (changes backgorund color of the header once passed the header section (Hi I'm Jesus Callejas section)
const projects = document.querySelectorAll(".project-item");
const header = document.querySelector("header");
const mainNavigation = document.querySelector("header ul");
const endOfHeader = header.offsetHeight;

window.addEventListener("scroll", function() {
if (this.scrollY > endOfHeader-100) {
    if (!mainNavigation.classList.contains("dark")) {
        // turn on dark mode, past the main section of the page
        mainNavigation.classList.toggle("dark");
    }
} else {
    if (mainNavigation.classList.contains("dark")) {
        // turn of dark mode, back on the main section "Hi I'm Jesus Callejas" section
        mainNavigation.classList.toggle("dark");
    }
}
});

function projectItemActive(item) {
    // hide the face
    item.querySelector(".project-face").classList.toggle("hidden");
    // unhide the back
    item.querySelector(".project-back").classList.toggle("hidden");

    // for PHONE: removes inactive class from project
    item.classList.remove("inactive");

    // make others appear disabled
    for (const project of projects) {
        // if project is not the currently active one (clicked by user)
        if (project != item) {
            /*Mostly for phones*/
            project.classList.add("inactive");
            project.querySelector(".project-back").classList.add("hidden");
            project.querySelector(".project-face").classList.remove("hidden");
        }
    }
}

function projectItemInactive(item) {
    // remove inactive class from project item that was active
    projects.forEach(item => item.classList.remove("inactive"));
    // unhide the face
    item.querySelector(".project-face").classList.remove("hidden");
    // unhide the back
    item.querySelector(".project-back").classList.add("hidden");
}

// Desktop
if (WINDOW_WIDTH > 500) {
    projects.forEach(item => {
        item.addEventListener("mouseover", () => { projectItemActive(item) });
        item.addEventListener("mouseout", () => { projectItemInactive(item) });
    });
    projects.forEach(item => {
        item.addEventListener("click", function() {
            window.open(this.getAttribute("name"));
        });
    });

}

// Phones / Tablets
if (WINDOW_WIDTH < 500) {
    const hamburgerInput = document.querySelector("#hamburger");
    const hamburgerItems = document.querySelector(".hamburger-items");

    // add the hidden class to the items
    hamburgerItems.classList.toggle("hidden");

    // add dark class to the links in the hamburger
    for (const link of hamburgerItems.querySelectorAll('a')) {
        link.classList.toggle("dark-items");
    }

    // event listener for toggling items in / out of hamburger 
    hamburgerInput.addEventListener("click", function() {
        hamburgerItems.classList.toggle("hidden");
    });

    projects.forEach(item => {
        item.addEventListener("click", function(e) {
            // flip the card
            projectItemActive(this);
        });
    });

    const hoverme = document.querySelector(".hover-over-me");
    // changin "hover over me" image to "click me" image
    hoverme.setAttribute("src", "./static/images/click-me.svg");
    hoverme.classList.toggle("hover-over-me-phone");
}
