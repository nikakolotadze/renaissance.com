$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#socicon").toggleClass("open-socicon");
  })
  
  
const audio = document.getElementById('audio');

// თუ არსებობდა მდგომარეობა, დატვირთე
window.onload = () => {
  const currentTime = localStorage.getItem('audioCurrentTime');
  if (currentTime) {
    audio.currentTime = currentTime;
  }
  audio.play();
};

// შეინახე პოზიცია
audio.addEventListener('timeupdate', () => {
  localStorage.setItem('audioCurrentTime', audio.currentTime);
});