'use strict' 

console.log("Welcome to Musica") 

// Initialise the Variables // 

let audioEl = new Audio('_Kenshi_Yonezu_-_KICK_BACK.mp3'); // Audio (the song) to be played // 
let songIndex = 0; // keeps track of song number being played // 
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

// Handle Play or Pause Events on click // 
masterPlay.addEventListener('click', () => {
    if(audioEl.paused || audioEl.currentTime == 0) {
        audioEl.play(); 
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1; 
    } else {
        audioEl.pause(); 
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity = 0; 
    } 
})

// Listen for Events // 
audioEl.addEventListener('timeupdate', () => {
    // console.log('timeupdate'); // To keep track of whether the song time updates // 

// Update seek bar // 
let progress = parseInt((audioEl.currentTime/audioEl.duration)*100); 
// console.log(progress); // To keep track of the song's completion in percentage terms // 
myProgressBar.value = progress; 
}) 
