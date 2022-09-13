meters = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0
scoreLeftWrist = 0;
scoreRightWrist = 0 ;


function setup(){
    canvas = createCanvas(600,500);
 

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);

}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
       

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
     
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
          
        
         document.getElementById("meters").innerHTML  = floor(rightWristY);
        
         meters =  document.getElementById("meters").innerHTML;
        }
}
function modelLoaded() {
    console.log("PoseNet is intialized")
}

function draw() {
    image(video, 0, 0, 600 ,500)

    fill("#FF0000");
    stroke('#FF0000')
if(scoreRightWrist > 0.2)
{


    circle(leftWristX,rightWristY,20)
    if( rightWristY <= 100)
    {
        document.getElementById("background_image").style.backgroundImage = "url('1.png')";
        document.getElementById("meters").style.top ="50%"
        
    }
    else if( meters > 100 && meters<= 200)
    {
        document.getElementById("background_image").style.backgroundImage = "url('2.png')";
       
    }
    else if( meters > 200 && meters <= 300)
    {
        document.getElementById("background_image").style.backgroundImage = "url('3.png')";
        
    }
    else if(meters > 300 && meters <= 400)
    {
        document.getElementById("background_image").style.backgroundImage = "url('4.png')";
       
    }
    else if(meters > 400 && meters <= 500)
    {
        document.getElementById("background_image").style.backgroundImage = "url('5.png')";
        
    }
}


}

function reload(){
        document.location.reload();
}