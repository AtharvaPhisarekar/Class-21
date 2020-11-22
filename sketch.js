var fixedrect,movingrect;
var rect1,rect2;
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor = "green";
 movingrect = createSprite(100,100,50,50);
 movingrect.shapeColor = "green";
 rect1=createSprite(100,100,50,50);
 rect1.shapeColor="green";
 rect2=createSprite(150,150,50,50);
 rect2.shapeColor="green";
 fixedrect.debug = true;
 movingrect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
 
  if(isTouching(rect1,movingrect)){
    rect1.shapeColor="blue";
    movingrect.shapeColor="blue";
  }else{
    rect1.shapeColor="green";
    movingrect.shapeColor="green";
  }

  drawSprites();
}

