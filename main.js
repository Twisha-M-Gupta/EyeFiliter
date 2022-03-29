function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center;

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
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
        console.log("REye x = " + results[0].pose.rightEye.x);
        console.log("REye y = " + results[0].pose.rightEye.y);
        console.log("LEye x = " + results[0].pose.leftEye.x);
        console.log("LEye y = " + results[0].pose.leftEye.y);
    }
}