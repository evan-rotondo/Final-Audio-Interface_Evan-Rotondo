
//calling all necessary elements into the DOM and naming them in order to run the audio scripts
let audio = document.querySelector(`audio`);

let album = document.querySelector(`#art`);

let tracks = document.querySelector(`#songname`);

let playBtn = document.querySelector(`#begin`);

let backBtn = document.querySelector(`#previous`);

let nextBtn = document.querySelector(`#next`);

let cover = document.querySelector(`#cover`);


//setting up an index and a tracking system for the index
let tracklist = [`bensound-allthat`, `bensound-endlessmotion`, `bensound-house`, `bensound-memories`]

let tracklistIndex = 0;


//first function to house the songs and index of songs

loadSong(tracklist[tracklistIndex]);

//function to use the array and dynamically change album cover and track name
function loadSong (tracklist) {
    tracks.innerText = `${tracklist}`
    audio.src = `audio/${tracklist}.mp3`
    cover.src =` img/${tracklist}.jpg`
}

// checking to see if class 'spin' is added to the album div. if it does, it will pause if it doesnt it will play
let start = function () {
    let check = album.classList.contains(`spin`)

    if (check) {
        pauseSong ()
        
        } else {
            playSong()
        }
    }

//creating the pause and play functions that will run inside the start function
function playSong() {
    album.classList.add(`spin`)
    playBtn.querySelector('i.fas').classList.remove('fa-play-circle')
    playBtn.querySelector('i.fas').classList.add('fa-pause-circle')
    audio.play()
}


function pauseSong() {
    album.classList.remove(`spin`)
    playBtn.querySelector('i.fas').classList.add('fa-play-circle')
    audio.pause()
}

//setting up the forward and back buttons
function forward () {
    tracklistIndex++

    if(tracklistIndex > tracklist.length - 1) {
        tracklistIndex = 0
    }

    loadSong(tracklist[tracklistIndex])
    playSong()
}

function backwards () {
    tracklistIndex--

    if(tracklistIndex < 0){
        tracklistIndex = tracklist.length - 1
    }
    loadSong(tracklist[tracklistIndex])
    playSong()
}



//event listener for play button
playBtn.addEventListener(`click`, start)

//event listener for next track
nextBtn.addEventListener(`click`, forward)

//event listener for previous track
backBtn.addEventListener(`click`, backwards)

//event listener to start next song after current song finishes if audio is playing
audio.addEventListener(`ended`, forward)





