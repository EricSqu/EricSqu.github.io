const dynamicText = document.getElementById('dynamic-text');
const dynamicJob = document.getElementById('dynamic-job');

const texts = ["Your Name", "Aspiring Professional", "Tech Enthusiast"];
const jobs = ["Software Engineer", "Developer", "Tech Enthusiast"];

let textIndex = 0;
let jobIndex = 0;

function changeText() {
    dynamicText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
}

function changeJob() {
    dynamicJob.textContent = jobs[jobIndex];
    jobIndex = (jobIndex + 1) % jobs.length;
}

setInterval(changeText, 3000);
setInterval(changeJob, 3000);
