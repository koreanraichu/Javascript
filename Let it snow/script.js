const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

const getRandomRadius = () => Math.random() * 2 + 0.5;
const getRandomspeed = () => Math.random() * 0.3 + 0.5;
const getRandomDir = () => [-1, 1][Math.floor(Math.random() * 2)];

const Snow = {
    data: [],
    canvasWidth: $canvas.clientWidth,
    canvasHeight: $canvas.clientHeight,

    init() {
        Snow.make();
        Snow.loop();
    },

    loop() {
        Snow.move();
        Snow.draw();

        window.requestAnimationFrame(Snow.loop);
        //얘를 이용해서 재귀를 돌린다
    },

    make() {
        //눈 데이터를 만드는 함수
        const data = [];

        for (let i = 0; i < 250; i++) {
            const x = Math.random() * Snow.canvasWidth;
            const y = Math.random() * Snow.canvasHeight;

            const size = getRandomRadius();
            const speed = getRandomspeed();
            const dir = getRandomDir();

            data.push({ x, y, size, speed, dir });
        }

        Snow.data = data;
    },
    move() {
        //방향에 맞게 이동
        Snow.data = Snow.data.map((item) => {
            item.x += item.dir * item.speed;
            item.y += item.speed;

            //캔버스를 벗어났나요?
            const isMinOverPositionX = -item.size > item.x;
            const isMaxOverPositionX = item.x > Snow.canvasWidth;
            const isOverPositionY = item.y > Snow.canvasHeight;

            //벗어났다면 반대방향, 맨 위로
            if (isMinOverPositionX || isMaxOverPositionX) {
                item.dir *= -1;
            }
            if (isOverPositionY) {
                item.y = -item.size;
            }

            return item;
        });
    },
    draw() {
        //CSS에 배경색 설정이 따로 안됐던게 이것때문이었고만? 
        ctx.clearRect(0, 0, Snow.canvasWidth, Snow.canvasHeight);
        ctx.fillStyle = '#010101';
        ctx.fillRect(0, 0, Snow.canvasWidth, Snow.canvasHeight);

        Snow.data.forEach((item) => {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255,255,255,.6)';
            ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2); //눈을 원형으로 만들어준다. 없으면 네모눈이 내리나? 
            ctx.fill();
            ctx.closePath();
        });
    },
};

Snow.init();

window.onresize = () => {
    Snow.canvasWidth = $canvas.clientWidth;
    Snow.canvasHeight = $canvas.clientHeight;

    Snow.make();
};