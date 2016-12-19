// Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build out functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateToggleIcon() {
  const icon = video.paused ? '►' : '⎮⎮';
  toggle.innerHTML = icon;
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;  
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function updateProgress(evt) {
  video.currentTime = (evt.offsetX/progress.offsetWidth)*video.duration;
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateToggleIcon);
video.addEventListener('pause', updateToggleIcon);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(btn => {
  btn.addEventListener("click", skip);
});

ranges.forEach(range => {
  range.addEventListener("change", handleRangeUpdate);
});

let mouseDown = false;
progress.addEventListener("click", updateProgress);
progress.addEventListener("mousemove", (evt) => mouseDown && updateProgress(evt));
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false);