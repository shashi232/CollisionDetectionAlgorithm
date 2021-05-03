var fixRect,movRect;


function setup() {
  createCanvas(800,400);
 fixRect = createSprite(400, 200, 50, 80);
 fixRect.shapeColor = "red";

 movRect = createSprite(100,100,80,50);
 movRect.shapeColor = "yellow";

}

function draw() {
  background(255,255,255);
  movRect.x = mouseX ;
  movRect.y = mouseY; 
  
  if(movRect.x - fixRect.x < movRect.width/2+fixRect.width/2 && 
    fixRect.x - movRect.x  < movRect.width/2+fixRect.width/2 &&
    movRect.y - fixRect.y < movRect.height/2+fixRect.height/2  && 
    fixRect.y - movRect.y  < movRect.height/2+fixRect.height/2 ){
    fixRect.shapeColor = "orange";
    movRect.shapeColor = "orange";
  }
  else {
    fixRect.shapeColor = "red";
    movRect.shapeColor = "yellow";
  }
  drawSprites();
}