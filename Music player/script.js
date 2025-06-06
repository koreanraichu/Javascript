const musicUpload = document.querySelector('#uploader');
const playMusic = document.querySelector('#playmusic');
const playerContainer = document.querySelector('#playercontainer');


playMusic.addEventListener('click', () => {
    const file = uploader.files[0];
    if (!file) {
        alert("오디오 파일을 업로드해주세요.");
        return;
    }

    playerContainer.innerHTML = '';

    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = URL.createObjectURL(file);
    playerContainer.appendChild(audioElement);
});
