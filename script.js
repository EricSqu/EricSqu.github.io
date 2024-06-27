const dynamicJob = document.getElementById('dynamic-job');

const jobTitles = ["Software Engineer", "Computer Science Student", "Creator", "Web Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentTitle = jobTitles[titleIndex];
    if (isDeleting) {
        dynamicJob.textContent = currentTitle.substring(0, charIndex - 1) || '\u200B';
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % jobTitles.length;
        }
    } else {
        dynamicJob.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

function openModal(element) {
    let projectId = element.getAttribute('data-project');
    let projectInfo = getProjectInfo(projectId);
    modalTitle.textContent = projectInfo.title;
    modalDescription.innerHTML = projectInfo.description; // Use innerHTML to support HTML content
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getProjectInfo(projectId) {
    const projects = {
        simplec: {
            title: "SimpleC",
            description: `
                <p>My very own (simple) C compiler I built that can handle complex pointers, loops, and much more!</p>
                <p>This project was a significant undertaking and involved creating a compiler that could parse and understand various C constructs. It involved:</p>
                <ul>
                    <li>Implementing a lexer and parser using Flex and Bison</li>
                    <li>Constructing an Abstract Syntax Tree (AST)</li>
                    <li>Performing semantic analysis</li>
                    <li>Generating intermediate code</li>
                    <li>Optimizing code for performance</li>
                </ul>
                <p>The project taught me a great deal about compiler construction and deepened my understanding of the C language and its intricacies.</p>
            `
        },
        // Add more projects here with detailed descriptions
    };
    return projects[projectId];
}
