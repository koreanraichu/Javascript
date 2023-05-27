// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

function getRandomColor() {
    const r = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
    const g = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
    const b = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
    return "#" + r + g + b;
}

// The Dot object used to scaffold the dots
var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
        var n = document.createElement("div");
        var random_content = ['<i class="fa-solid fa-lemon"></i>','<i class="fa-solid fa-star-half-stroke"></i>','<i class="fa-solid fa-star"></i>','<i class="fa-solid fa-thumbs-up"></i>','<i class="fa-solid fa-meteor"></i>','<i class="fa-solid fa-heart"></i>','<i class="fa-solid fa-star-of-life"></i>','<i class="fa-solid fa-moon"></i>']
        n.innerHTML= random_content[Math.floor(Math.random() * random_content.length)];
        n.className = "follower";
        document.body.appendChild(n);
        return n;
    }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
    this.node.style.color = getRandomColor();
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 20; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
        y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function (event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
