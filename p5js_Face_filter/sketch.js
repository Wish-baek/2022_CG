let faceapi;
let video;
let detections;
let ears, nose;

const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}
function preload() {
  ears = loadImage('ears.png');
  nose = loadImage('nose.png');
  mouse = loadImage('mouse.png');
}
function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide(); // Hide the video element, and just show the canvas
    faceapi = ml5.faceApi(video, detection_options, modelReady)
    textAlign(RIGHT);
}

function modelReady() {
    console.log('ready!')
    console.log(faceapi)
    faceapi.detect(gotResults)
}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }
    detections = result;
    background(255);
    image(video, 0,0, width, height)
    if (detections) {
        if (detections.length > 0) {
            // console.log(detections)
            drawBox(detections)
            drawLandmarks(detections)
        }
    }
    faceapi.detect(gotResults)
}

function drawBox(detections){
    for(let i = 0; i < detections.length; i++){
        const alignedRect = detections[i].alignedRect;
        const x = alignedRect._box._x
        const y = alignedRect._box._y
        const boxWidth = alignedRect._box._width
        const boxHeight  = alignedRect._box._height
        
        image(ears, x-30, y-110, boxWidth+50,boxHeight-60);
        image(nose, x+20, y+50,boxWidth-50,boxHeight-120 );
        image(mouse, x+20, y+110, boxWidth-50,boxHeight-100);
    }
}

function drawLandmarks(detections){
    noFill();
    stroke(161, 95, 251)
    strokeWeight(2)
    for(let i = 0; i < detections.length; i++){
        const mouth = detections[i].parts.mouth; 
        const nose = detections[i].parts.nose;
        const leftEye = detections[i].parts.leftEye;
        const rightEye = detections[i].parts.rightEye;
        const rightEyeBrow = detections[i].parts.rightEyeBrow;
        const leftEyeBrow = detections[i].parts.leftEyeBrow;
        
    }
}

function drawPart(feature, closed){
    beginShape();
    for(let i = 0; i < feature.length; i++){
        const x = feature[i]._x
        const y = feature[i]._y
        vertex(x, y)

    }
  
    if(closed === true){
        endShape(CLOSE);
    } else {
        endShape();
    }
}