roverX=50
roverY=50
roverHeight=90
roverWidht=100
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

backgrondImage="mars.jpg"
roverImage="rover.jpg"

function add (){
backgrondCanvas=new Image()
backgrondCanvas.onload=uploadbackgrond
backgrondCanvas.src=backgrondImage
roverSprite=new Image()
roverSprite=uploadrover
roverSprite.src=roverImage
}

function uploadbackgrond(){
ctx.drawImage(backgrondCanvas,0,0,canvas.width,canvas.height)

}
function uploadrover(){
ctx.drawImage(roverSprite,roverX,roverY,roverWidht,roverHeight)}

window.addEventListener("keydown",myKeydown)

function myKeydown (e){
keyPressed=e.keyCode
if (keyPressed=="38"){
    if(roverY >=0){
        roverY=roverY-10;
        uploadbackgrond()
        uploadrover()}
 
}
if (keyPressed=="40"){
    if(roverY <=500){
        roverY=roverY+10;
        uploadbackgrond()
        uploadrover()}
 
}
if (keyPressed=="37"){
    if(roverX >=0){
        roverX=roverX-10;
        uploadbackgrond()
        uploadrover()}
 
}
if (keyPressed=="39"){
    if(roverX <=700){
        roverX=roverX+10;
        uploadbackgrond()
        uploadrover()}
 
}
}
