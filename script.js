// JavaScript for Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text");
    const words = ["Junior IT Administrator","Backend Developer", "Front-End Developer",  "Tech Enthusiast"];
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS (Use your actual PUBLIC KEY)
    emailjs.init("qMlqtUZMSGajP-RE6"); 

    // Ensure the form exists before adding an event listener
    const form = document.getElementById("contact-form");
    if (!form) {
        console.error("Error: Form not found!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const statusMsg = document.getElementById("form-status");

        // Verify if form fields are empty
        if (!name || !email || !message) {
            statusMsg.textContent = "All fields are required!";
            statusMsg.style.color = "red";
            return;
        }

        // EmailJS Parameters (Ensure correct keys)
        const templateParams = {
            from_name: name,  // ✅ Ensure this matches EmailJS template variables
            from_email: email,
            message: message,
        };

        // Send email using EmailJS
        emailjs.send("service_ltvbnqb", "template_7vzfns7", templateParams)
            .then(function (response) {
                console.log("Success!", response);
                statusMsg.textContent = "Message sent successfully!";
                statusMsg.style.color = "green";
                form.reset();
                showDialog();
            })
            .catch(function (error) {
                console.error("EmailJS Error:", error);
                statusMsg.textContent = "Failed to send message! Check console.";
                statusMsg.style.color = "red";
            });
    });
});

// Show the success dialog box
function showDialog() {
    document.getElementById("success-dialog").style.display = "block";
}

// Close the success dialog box
function closeDialog() {
    document.getElementById("success-dialog").style.display = "none";
}

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.getElementById("nav-toggle");
//     const navMenu = document.getElementById("nav-menu");

//     toggleBtn.addEventListener("click", function () {
//         navMenu.classList.toggle("show");
//     });

//     // Close menu when clicking outside
//     document.addEventListener("click", function (e) {
//         if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
//             navMenu.classList.remove("show");
//         }
//     });

//     // Close menu when a link is clicked
//     document.querySelectorAll("#nav-menu a").forEach(link => {
//         link.addEventListener("click", () => {
//             navMenu.classList.remove("show");
//         });
//     });
// });