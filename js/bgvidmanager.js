// Get the video element
const video = document.getElementById('bgvid');

// Store the playback position in localStorage when the video is about to change or the page is about to unload
window.addEventListener('beforeunload', () => {
  localStorage.setItem('videoPlaybackPosition', video.currentTime);
});

// Update the playback position in localStorage on every timeupdate event
video.addEventListener('timeupdate', () => {
  localStorage.setItem('videoPlaybackPosition', video.currentTime);
});

// Retrieve the playback position from localStorage and set it in the video element
video.addEventListener('loadedmetadata', () => {
  const playbackPosition = localStorage.getItem('videoPlaybackPosition');
  if (playbackPosition) {
    video.currentTime = playbackPosition;
  }
});