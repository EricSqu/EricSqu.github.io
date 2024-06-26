const dynamicJob = document.getElementById('dynamic-job');

const jobTitles = ["Software Engineer", "Computer Science Student", "Creator", "Web Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentTitle = jobTitles[titleIndex];
    if (isDeleting) {
        dynamicJob.textContent = currentTitle.substring(0, charIndex - 1);
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
            setTimeout(type, 1000); // Pause before deleting (shortened pause time)
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100); // Faster typing and deleting speed
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500); // Start typing sooner

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
