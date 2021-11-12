function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video.hide();
    tint_colour="";
}
function draw(){
    rect(30, 20, 55, 55);
    ellipse(56, 46, 55, 55);
    tint(tint_colour);
}
function take_snapshot(){
    save("student_name.png");
}
function filter_tint(){
  tint_colour=document.getElementById("color_name").value;
}