function preload(){
   
    }
    function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modeloader());
     poseNet.on('pose',gotposes());
    }
    function draw(){
        image(video,0,0,300,300);
        
    }
    function button(){
    save('photo.png');
    }
    function modeloader(){
        console.log("posenet is working");
    }
    function gotposes(results){
        if(results.length>0)
    console.log(results);
    }