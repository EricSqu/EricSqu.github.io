const dynamicJob = document.getElementById('dynamic-job');

const titles = ["Software Engineer", "Computer Science Student", "Creator", "Web Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentTitle = titles[titleIndex];
    console.log('Typing:', currentTitle); // Add this line
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
    console.log('Document loaded'); // Add this line
    setTimeout(type, 1000);

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
