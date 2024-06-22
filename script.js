const dynamicJob = document.getElementById('dynamic-job');

const titles = ["Software Engineer", "Computer Science Student", "Creator", "Web Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentTitle = titles[titleIndex];
    if (isDeleting) {
        dynamicJob.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    } else {
        dynamicJob.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before deleting
            return;
        }
    }
    setTimeout(type, isDeleting ? 100 : 200);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});
