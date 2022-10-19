function setup(){
    canvas = createCanvas(600,300)
    canvas.parent('game_console')
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(results){
  if(results.length>0){
      console.log(results)
  }
}

function draw(){
    image(video,0,0,600,300)
}