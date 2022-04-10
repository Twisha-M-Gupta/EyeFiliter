REyeX = 0;
REyeY = 0;
LEyeX = 0;
LEyeY = 0;

function preload() {
    blueEye = loadImage('https://i.postimg.cc/QM4wxFmr/Final-Blue.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(570, 250)

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(blueEye, REyeX, REyeY, 25, 25);
    image(blueEye, LEyeX, LEyeY, 25, 25);
}

function takePhoto() {
    save('MySnap.png');
}

function modelLoaded() {
    console.log('PoseNet Loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        REyeX = results[0].pose.rightEye.x - 10;
        REyeY = results[0].pose.rightEye.y - 10;
        LEyeX = results[0].pose.leftEye.x - 10;
        LEyeY = results[0].pose.leftEye.y - 10;
        console.log("REye x = " + results[0].pose.rightEye.x);
        console.log("REye y = " + results[0].pose.rightEye.y);
        console.log("LEye x = " + results[0].pose.leftEye.x);
        console.log("LEye y = " + results[0].pose.leftEye.y);
    }
}