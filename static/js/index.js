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
            // if inactive project does not contain the inactive class, add it
            if (!project.classList.contains("inactive")) {
                project.classList.toggle("inactive");
            }
            // if the inactives projects back is showing, hide it
            if (!project.querySelector(".project-back").classList.contains("hidden")) {
                project.querySelector(".project-back").classList.toggle("hidden");
            }
            // if the inactive projects face is hidden, show it
            if (project.querySelector(".project-face").classList.contains("hidden")) {
                project.querySelector(".project-face").classList.toggle("hidden");
            }
        }
    }
}

function projectItemInactive(item) {
    // remove inactive class
    for (const project of projects) {
        if (project.classList.contains("inactive")) {
            project.classList.toggle("inactive");
        }
    }
    item.querySelector(".project-face").classList.toggle("hidden");
    // unhide the back
    item.querySelector(".project-back").classList.toggle("hidden");
}

// Desktop
if (window.innerWidth > 500) {
    projects.forEach(item => {
        item.addEventListener("mouseover", () => { projectItemActive(item) });
        item.addEventListener("mouseout", () => { projectItemInactive(item) });
    });
}

// Phones / Tablets
if (window.innerWidth < 500) {
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
}


