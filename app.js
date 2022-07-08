const sounds = [
    'arcade', 'fanfare', 'one', 'two', 'three', 'four', 'five', 'six'
]

// let mediaClip = document.getElementById("mediaClip");
// mediaClip.volume = document.getElementById("volume1").value;

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        volumeSongs()
        
        document.getElementById(sound).play()
    });
    
    document.getElementById('buttonGroup').appendChild(btn)

})

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}

function volumeSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.volume = document.getElementById('volume').value;
    });
}

