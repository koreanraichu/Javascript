const musicUpload = document.querySelector('#uploader');
const playMusic = document.querySelector('#playmusic');
const playerContainer = document.querySelector('#playercontainer');
const playBtn = document.querySelector('#playBtn');
const audio = document.querySelector('#customAudio');
const progressBar = document.querySelector('#progressBar');
const progressBarContainer = document.querySelector('#progressBarContainer');
const trackName = document.querySelector('#trackName');
const timeDisplay = document.querySelector('#timeDisplay');
const albumArt = document.querySelector('#albumArt');
const repeatBtn = document.getElementById('repeatBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');

let repeatMode = 0; // 0: 없음, 1: 한곡 반복, 2: 전체 반복
let isPlaying = false;
let playlist = [];
let currentTrackIndex = 0;
let shuffleMode = false;
let shuffleQueue = [];
let shuffleHistory = [];

// 파일 여러 개 업로드
uploader.addEventListener('change', () => {
    const files = Array.from(uploader.files);
    playlist = files;
    currentTrackIndex = 0;

    renderPlaylist();
    loadTrack(currentTrackIndex);
    shuffleQueue = [];
    shuffleHistory = [];
});

function updatePlaylistHeader() {
    const header = document.getElementById('playlistHeader');

    if (playlist.length === 0) {
        header.textContent = '총 0곡';
    } else {
        const currentNum = currentTrackIndex + 1;
        const total = playlist.length;
        header.textContent = `총 ${total}곡 중 ${currentNum}번 곡 재생 중`;
    }
}

function updatePlaylistHighlight() {
    const items = document.querySelectorAll('#playlist li');
    items.forEach((item) => {
        if (parseInt(item.dataset.index) === currentTrackIndex) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
}

function playNextTrack() {
    if (playlist.length === 0) return;

    if (shuffleMode) {
        // 모든 곡이 재생된 경우: 셔플 큐 초기화
        if (shuffleQueue.length === 0) {
            shuffleQueue = [...Array(playlist.length).keys()]
                .filter(i => i !== currentTrackIndex); // 현재 곡 제외
            shuffleQueue = shuffleQueue.sort(() => Math.random() - 0.5);
        }

        currentTrackIndex = shuffleQueue.shift();
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    }

    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    updatePlaylistHighlight();
    updatePlaylistHeader();
}

function renderPlaylist() {
    const ul = document.getElementById('playlist');
    ul.innerHTML = '';

    playlist.forEach((file, i) => {
        const li = document.createElement('li');
        li.textContent = file.name;
        li.dataset.index = i;
        li.style.cursor = 'pointer';

        li.addEventListener('click', () => {
            currentTrackIndex = i;
            loadTrack(currentTrackIndex);
            audio.play();
            isPlaying = true;
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
            updatePlaylistHighlight(); // 추가
        });

        ul.appendChild(li);
    });

    updatePlaylistHighlight(); // 리스트 처음 렌더링 후도 호출
}

function loadTrack(index) {
    const file = playlist[index];
    if (!file) return;

    audio.src = URL.createObjectURL(file);
    trackName.textContent = '🎵 ' + file.name;
    isPlaying = false;
    playBtn.textContent = '▶';
    progressBar.style.width = '0%';
    timeDisplay.textContent = '00:00 / 00:00';

    // 앨범 아트/정보 불러오기 (jsmediatags)
    jsmediatags.read(file, {
        onSuccess: (tag) => {
            const tags = tag.tags;
            songTitle.textContent = tags.title || file.name;
            songArtist.textContent = tags.artist || '알 수 없음';
            const pic = tags.picture;
            if (pic) {
                const b64 = btoa(pic.data.map(c => String.fromCharCode(c)).join(''));
                albumArt.src = `data:${pic.format};base64,${b64}`;
                albumArt.style.display = 'block';
            } else {
                albumArt.style.display = 'none';
            }
            metaInfo.style.display = 'block';
        },
        onError: () => {
            songTitle.textContent = file.name;
            songArtist.textContent = '';
            albumArt.style.display = 'none';
            metaInfo.style.display = 'block';
        }
    });
    updatePlaylistHeader();
}
// 음악 로딩하고 플레이리스트 만드는 것까지 

// 이전 곡
prevBtn.addEventListener('click', () => {
    if (playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
});

// 다음 곡
nextBtn.addEventListener('click', () => {
    if (playlist.length === 0) return;
    playNextTrack();
});

function playNextTrack() {
    if (shuffleMode) {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * playlist.length);
        } while (playlist.length > 1 && nextIndex === currentTrackIndex);

        currentTrackIndex = nextIndex;
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    }

    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    updatePlaylistHighlight();
    updatePlaylistHeader();
}

repeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;

    switch (repeatMode) {
        case 0:
            repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i> 없음';;
            repeatBtn.title = '반복 없음';
            break;
        case 1:
            repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i> 한 곡 반복';
            repeatBtn.title = '한 곡 반복';
            break;
        case 2:
            repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i> 전체 반복';
            repeatBtn.title = '전체 반복';
            break;
    }
});

audio.addEventListener('ended', () => {
    if (repeatMode === 1) {
        audio.currentTime = 0;
        audio.play();
    } else if (repeatMode === 2) {
        playNextTrack(); // 직접 정의할 함수
    } else {
        isPlaying = false;
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

playBtn.addEventListener('click', () => {
    if (!audio.src) return;

    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }

    isPlaying = !isPlaying;
});

// 시간 포맷 함수
function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

shuffleBtn.addEventListener('click', () => {
    shuffleMode = !shuffleMode;
    shuffleBtn.classList.toggle('active', shuffleMode);

    if (shuffleMode) {
        shuffleBtn.title = '셔플 켜짐';
        shuffleBtn.innerHTML = '<i class="fa-solid fa-shuffle"></i> 셔플 ON';
    } else {
        shuffleBtn.title = '셔플 꺼짐';
        shuffleBtn.innerHTML = '<i class="fa-solid fa-shuffle"></i> 셔플';
    }
});

// 재생 중일 때 시간과 진행 바 업데이트
audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + '%';

    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration || 0)}`;
});

// 오디오 진행에 따라 프로그레스바 업데이트
audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + '%';
});

// 프로그레스바 클릭으로 이동
progressBarContainer.addEventListener('click', (e) => {
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;
    audio.currentTime = ratio * audio.duration;
});
