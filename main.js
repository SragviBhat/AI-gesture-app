noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
canvas = createCanvas(500, 500);
video = createCapture(VIDEO);
canvas.position(600, 180);
video.size(550, 550);
video.position(10, 180);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Ready");
    }

function gotPoses(results){
if(results.length > 0){
console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX + "noseY = " + noseY);

leftWrist = results[0].pose.leftWrist.x;
rightWrist = results[0].pose.rightWrist.x;
difference = floor(leftWrist - rightWrist);
console.log("leftWrist = " + leftWrist + "rightWrist = " + rightWrist + "difference = " + difference);
}
}


function draw(){
background("grey");
fill("#FF0000");
stroke("#FF0000");
square(noseX, noseY, difference);
document.getElementById("w_h"). innerHTML = difference + "px";
}

