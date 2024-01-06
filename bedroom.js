status = "";
function goBack() {
    window.location.href = "index.html";
}
function preload() {
    img = loadImage('broom.jpg');
    console.log("Loaded")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(450, 180);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function draw() {
    image(img, 0, 0, 600, 500);
}
function modelLoaded() {
    status = "true";
    console.log("Model Loaded!");
}
function gotResults(error, results) {
    if (error)
        console.log(error);
    else
        console.log(results);
}