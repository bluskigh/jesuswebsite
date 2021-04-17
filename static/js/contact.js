const contactForm = document.querySelector("#contact-container form");
const nameInput = contactForm.querySelector("input#name");
const emailInput = contactForm.querySelector("input#email");
const messageInput = contactForm.querySelector("textarea#message");

function validateInput(who) {
    if (who.value.length == 0) {
        who.previousElementSibling.classList.add("contact-invalid");
        return false;
    } else {
        who.previousElementSibling.classList.remove("contact-invalid");
        who.previousElementSibling.classList.add("contact-valid");
        return true;
    }
}

function serialize(input) {
    // basic serialization 
    input = input.replaceAll('<', '&lt;');
    input = input.replaceAll('>', '&gt;');
    return input; 
}

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // check inputs were given
    if (!validateInput(nameInput)) { return; }
    if (!validateInput(emailInput)) { return; }
    if (!validateInput(messageInput)) { return; }

    // serialize
    const ni = serialize(nameInput.value);
    const ei = serialize(emailInput.value);
    const mi = serialize(messageInput.value);

    fetch("#", {
        method: "POST",
        body: JSON.stringify({}),
        headers: new Headers({"Content-Type": "application/json"})
    })
    .then(async r => await r.json())
    .then((r) => {
        if (r.recieved) {
            // TODO: add some type of header where can show recieved message
        } else {
            // TODO: ^ but error message "Did not recieve email, try again please."
        }
    })
    .catch((e) => console.error(e))
});
