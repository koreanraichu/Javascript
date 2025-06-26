const photoContainer = document.querySelector('.photocontainer');
const photoCount = document.querySelector('#photocount');
const photoButton = document.querySelector('#photobutton');

photoButton.addEventListener('click',(e)=>{
    let countNum = photoCount.value;
    console.log(typeof(countNum));

    photoContainer.innerHTML = ''; //아무것도 없지만 일단 비운다

    if(isNaN(countNum) || countNum <= 0) {
        alert ('유효한 숫자를 입력해주세요!');
    }; 

    let photoRemain = countNum;
    let photoIndex = 1;

    if (photoRemain == 1) {
        const photoInbox = document.createElement('div');
        photoInbox.className = 'grid-row';

        const photosIndiv = document.createElement('div');
        photosIndiv.className = 'photo-row';
        photosIndiv.textContent = photoIndex++;

        photoInbox.appendChild(photosIndiv);
        photoContainer.appendChild(photoInbox);
        return;
    }

    if (photoRemain == 4) {
        // 4장은 2 + 2 고정
        for (let i = 0; i < 2; i++) {
            const photoInbox = document.createElement('div');
            photoInbox.className = 'grid-row';

            for (let j = 0; j < 2; j++) {
                const photosIndiv = document.createElement('div');
                photosIndiv.className = 'photo-row';
                photosIndiv.textContent = photoIndex++;
                photoInbox.appendChild(photosIndiv);
            }

            photoContainer.appendChild(photoInbox);
        }
        return;
    }

    // 여기부터는 일반 배치
    let threeRows = 0;
    let twoRows = 0;

    if (photoRemain % 3 === 1 && photoRemain !== 4) {
        // 3n + 1 → 마지막 2 + 2 필요
        threeRows = Math.floor((photoRemain - 4) / 3);
        twoRows = 2;
    } else if (photoRemain % 3 === 2) {
        // 3n + 2 → 마지막 2 필요
        threeRows = Math.floor((photoRemain - 2) / 3);
        twoRows = 1;
    } else {
        // 3n → 다 3장 줄로 채움
        threeRows = Math.floor(photoRemain / 3);
        twoRows = 0;
    }

    // 3장 줄 배치
    for (let i = 0; i < threeRows; i++) {
        const photoInbox = document.createElement('div');
        photoInbox.className = 'grid-row';

        for (let j = 0; j < 3; j++) {
            const photosIndiv = document.createElement('div');
            photosIndiv.className = 'photo-row';
            photosIndiv.textContent = photoIndex++;
            photoInbox.appendChild(photosIndiv);
        }

        photoContainer.appendChild(photoInbox);
    }

    // 2장 줄 배치
    for (let i = 0; i < twoRows; i++) {
        const photoInbox = document.createElement('div');
        photoInbox.className = 'grid-row';

        for (let j = 0; j < 2; j++) {
            const photosIndiv = document.createElement('div');
            photosIndiv.className = 'photo-row';
            photosIndiv.textContent = photoIndex++;
            photoInbox.appendChild(photosIndiv);
        }

        photoContainer.appendChild(photoInbox);
    }

});