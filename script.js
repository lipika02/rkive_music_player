let button1 = document.getElementById("button1");
let masterPlay = document.getElementById("button2");
let songIndex = 0;
let audioElement = new Audio('songs/audio0.mp3');
let masterSongName = document.getElementById('songName');
let masterArtistName = document.getElementById('artistName');
let masterAlbumName = document.getElementById('albumName');

// song list
let songs = [
    {songName: "Hold me tight", filePath: "songs/audio0.mp3", coverPath: "images/img0.jpg", artistName: "Artist: BTS", albumName: "Album: The Most Beautiful Moment in Life, Part 1"},
    {songName: "Autum leaves", filePath: "songs/audio1.mp3", coverPath: "images/img1.jpg", artistName: "Artist: BTS", albumName: "Album: The Most Beautiful Moment in Life, Part 2"},
    {songName: "If you", filePath: "songs/audio2.mp3", coverPath: "images/img2.jpg", artistName: "Artist: G-Dragon", albumName: "Album: M.A.D.E"},
    {songName: "Still with you", filePath: "songs/audio3.mp3", coverPath: "images/img3.jpg", artistName: "Artist: Jungkook", albumName: "Album: Still With You"},
  ]

// master play
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("playing...", );
        document.querySelector("#mainPlay").setAttribute("class", "fa fa-pause");        
    }
    else{
        audioElement.pause();
        console.log("paused...")
        document.querySelector("#mainPlay").setAttribute("class", "fa fa-play");

    }
});

// forward
document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=3){
        songIndex=0;
    }
    else{
        songIndex++;
    }
    console.log("playing...", songs[songIndex].songName);
    // audioElement.src = `songs/audio${songIndex}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    document.querySelector("img").setAttribute("src", songs[songIndex].coverPath);
    masterSongName.innerText = songs[songIndex].songName;
    masterArtistName.innerText = songs[songIndex].artistName;
    masterAlbumName.innerText = songs[songIndex].albumName;
    // console.log(masterSongName.innerText);
    audioElement.play();
    document.querySelector("#mainPlay").setAttribute("class", "fa fa-pause");        
});

// backward
document.getElementById('prev').addEventListener('click', ()=>{
    if (songIndex<=0){
        songIndex=songs.length-1;
    }
    else{
        songIndex--;
    }
    console.log("playing...", songs[songIndex].songName);
    // audioElement.src = `audio${songIndex}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    document.querySelector("img").setAttribute("src", songs[songIndex].coverPath);
    masterSongName.innerText = songs[songIndex].songName;
    masterArtistName.innerText = songs[songIndex].artistName;
    masterAlbumName.innerText = songs[songIndex].albumName;
    audioElement.play();
    document.querySelector("#mainPlay").setAttribute("class", "fa fa-pause");        
});

let mode = document.querySelector('#mode');
let color = document.querySelector('body');
mode.addEventListener('click', () => {
    if (color.style.backgroundColor == 'black'){
        color.style.backgroundColor = '#323b61';
        mode.setAttribute("class", "fa fa-moon-o");
    }
    else{
        color.style.backgroundColor = 'black';
        mode.setAttribute("class", "fa fa-sun-o");
    }
})

// WORK IN PROGRESS // 

// let animation = document.querySelector('.loader');
// let flag = false;

// masterPlay.addEventListener('click',()=>{
//     if (flag){
//         // animation.classList.add('play');
//         // animation.classList.remove('paused');
//         flag = true;
//         document.getElementsByClassName('stoke').style.animationPlayState = 'running';
//     }
//     else{
//         // animation.classList.add('paused');
//         // animation.classList.remove('play');
//         flag = false;
//         document.getElementsByClassName('stoke').style.animationPlayState = 'paused';

//     }
// });

// button2.addEventListener("click", () => {
//     animation.div.classList.add('.paused');
// })

// let j=0;

// function myFunction(j) {
//     if ((button1 || button2) && flag===false){
//         if (j>songs.length-1){
//             j=0;
//         }
//         console.log("play");
//         document.querySelector("#mainPlay").setAttribute("class", "fa fa-pause");
//         songs[j].play();
//         flag=true;
//         // document.querySelector("section").style.visibility = 'visible';
//     }
//     else{
//         document.querySelector("#mainPlay").setAttribute("class", "fa fa-play");
//         sond[j].pause();
//         console.log("paused");
//         flag = false;
//         // document.querySelector("section").style.visibility = "hidden";
//     }
// }

// function myNextSong() {
//     document.querySelector("img").setAttribute("src", "img3.jpg");
//     j = j+1;
//     myFunction(j);
// }

// function myPrevSong() {
//     document.querySelector("img").setAttribute("src", "gold.jpg");
// }