console.log("welcome to js")
//intialization the variable
let songindex = 0;
let audioelement = new Audio("songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let songitemplay = document.getElementsByClassName('songitemplay');

// let masterSongname = document.getElementById('masterSongname');


let songs = [
    { songname: "sambh", filepath: "songs/1.mp3", coverpath: "items/a1.jpg" },
    { songname: "soalace", filepath: "songs/2.mp3", coverpath: "items/a2.jpg" },
    { songname: "aag", filepath: "songs/3.mp3", coverpath: "items/67223.jpg" },
    { songname: "to the star", filepath: "songs/4.mp3", coverpath: "items/a5.jpg" },
    { songname: "khamoshiyan", filepath: "songs/5.mp3", coverpath: "items/a5.jpg" },
    { songname: "mashup", filepath: "songs/6.mp3", coverpath: "items/a6.jpg" },
]



//play pause click

masterplay.addEventListener('click', ()=>{
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})

// list to event
audioelement.addEventListener('timeupdate', () => {
    console.log('tomeupdate')
    progess = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    progressbar.value = progess;
})
progressbar.addEventListener('change', () => {
    audioelement.currentTime = progressbar.value * audioelement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

songitemplay.addEventListener('click', ()=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = `songs/${songIndex+1}.mp3`;
        masterSongname.innerText = songs[songIndex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    masterSongname.innerText = songs[songIndex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    masterSongname.innerText = songs[songIndex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
