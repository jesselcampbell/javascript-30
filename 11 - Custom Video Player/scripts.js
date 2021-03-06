/* Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Functions */
function togglePlay() {
  /* Short */
  video[video.paused ? 'play' : 'pause']();

  /* Medium */
  /*
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  /*

  /* Long */
  /*
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  */
}

function updateToggleButton() {
  /* Short */
  toggle.textContent = this.paused ? '►' : '❚ ❚';

  /* Medium */
  /*
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  */
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

/* Events */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
