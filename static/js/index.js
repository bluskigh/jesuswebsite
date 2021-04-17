// Desktop
if (window.innerWidth > 500) {
    const projects = document.querySelectorAll(".project-item");
    projects.forEach(item => {
        item.addEventListener("mouseover", function(e) {
            // hide the face
            this.querySelector(".project-face").classList.toggle("hidden");
            // unhide the back
            this.querySelector(".project-back").classList.toggle("hidden");
            // display none on the project face (500ms takes .5s  to ease the front face out of view, so after its out, display to none)
            // make others appear disabled
            for (const project of projects) {
                if (project != this) {
                    project.classList.toggle("inactive");
                }
            }
        });
        item.addEventListener("mouseout", function(e) {
            // remove inactive class
            for (const project of projects) {
                if (project.classList.contains("inactive")) {
                    project.classList.toggle("inactive");
                }
            }
            this.querySelector(".project-face").classList.toggle("hidden");
            // unhide the back
            this.querySelector(".project-back").classList.toggle("hidden");
        })
    });
}

// Universal (changes backgorund color of the header once passed the header section (Hi I'm Jesus Callejas section)
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

// Phones / Tablets
if (window.innerWidth < 500) {
    const hamburgerInput = document.querySelector("#hamburger");
    const hamburgerItems = document.querySelector(".hamburger-items");
    if (window.innerWidth < 500) {
    // add the hidden class to the items
    hamburgerItems.classList.toggle("hidden");
    // add dark class to the links in the hamburger
    for (const link of hamburgerItems.querySelectorAll('a')) {
        link.classList.toggle("dark");
    }
    // event listener for toggling items in / out of hamburger 
    hamburgerInput.addEventListener("click", function() {
        hamburgerItems.classList.toggle("hidden");
    });
    }
}
