const dynamicJob = document.getElementById('dynamic-job');

const jobTitles = ["Software Engineer", "Computer Science Student", "Web Developer"];
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

    // Open projects button event listener
    document.getElementById('open-projects-button').addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
        projectsSection.classList.add('show');
    });
});

// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

function openModal(element) {
    let projectId = element.getAttribute('data-project');
    console.log('Opening modal for project:', projectId); // Debug log
    let projectInfo = getProjectInfo(projectId);
    console.log('Project info:', projectInfo); // Debug log
    if (projectInfo) {
        modalTitle.textContent = projectInfo.title;
        modalDescription.innerHTML = projectInfo.description; // Use innerHTML to support HTML content
        modal.style.display = "block";
    } else {
        console.error('No project info found for:', projectId); // Error log
    }
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
                <ul>
                    <li>Implementing a lexer and parser using Flex and Bison</li>
                    <li>Constructing an Abstract Syntax Tree (AST)</li>
                    <li>Performing semantic analysis</li>
                    <li>Generating intermediate code</li>
                    <li>Optimizing code for performance</li>
                </ul>
            `
        },
        newproject: {
            title: "Personal Website",
            description: `
                <p>Built using HTML, CSS, and JavaScript, it features a responsive design, dynamic content, and smooth animations.</p>
                <ul>
                    <li>Responsive Design</li>
                    <li>Dynamic Job Title Animation</li>
                    <li>Interactive Project Modals</li>
                    <li>Smooth Animations</li>
                </ul>
            `
        },
        contactManager: {
            title: "Full Stack Contact Manager",
            description: `
                <p>Engineered a fully responsive website with a 100% accessibility score, optimized for seamless performance across devices using HTML, CSS, and JavaScript.</p>
                <ul>
                    <li>Implemented dynamic content and smooth animations to enhance user engagement.</li>
                    <li>Developed the full-stack architecture on Digital Ocean using the LAMP stack.</li>
                    <li>Integrated REST API for robust back-end functionality.</li>
                </ul>
            `
        },
        onion: {
            title: "Onion",
            description: `
                <p>A MERN stack website that turns your ingredients into culinary masterpieces.</p>
                <ul>
                    <li>Users can sign up, log in, and recover passwords using the Brevo API.</li>
                    <li>Dynamic recipe suggestions based on ingredients in your pantry.</li>
                    <li>Customizable options based on allergens, food preferences, and dietary needs.</li>
                    <li>Interactive profile page for personalization.</li>
                </ul>
            `
        }
    };

    return projects[projectId];
}

function toggleExperience(element) {
    const card = element.closest('.experience-card');
    card.classList.toggle('open');
}


function toggleDropdown(element) {
    const card = element.closest('.education-card');
    card.classList.toggle('open');
}

