function setup() {
  createCanvas(1200,800);
}

function preload(){
  snowImg = loadImage("snow.png");
  shivaImage = loadImage("Img.png");
  snowmanImg = loadImage("snowman.png");
  bgImage = loadImage("snow1.jpg");
 
}

function draw() {
  background(bgImage);  

Shiva =  createSprite(400, 600, 50, 50);
Shiva.addImage(shivaImage);
Shiva.scale = 0.8;

snow = createSprite(100, -5, 50, 50);
snow.addImage(snowImg);
snow.scale = 0.8;
snow.y = snow.y+12;

snow1 = createSprite(300, -4, 50, 50);
snow1.addImage(snowImg);
snow1.scale = 0.8;

snow2 = createSprite(400, -6, 50, 50);
snow2.addImage(snowImg);
snow2.scale = 0.8;

snow3 = createSprite(500, -10, 50, 50);
snow3.addImage(snowImg);
snow3.scale = 0.8;

snow4 = createSprite(800, -8, 50, 50);
snow4.addImage(snowImg);
snow4.scale = 0.8;

snow5 = createSprite(1000, -9, 50, 50);
snow5.addImage(snowImg);
snow5.scale = 0.8;

snow6 = createSprite(200, -11, 50, 50);
snow6.addImage(snowImg);
snow6.scale = 0.8;

snow7 = createSprite(1100, -10, 50, 50);
snow7.addImage(snowImg);
snow7.scale = 0.8;

snow8 = createSprite(900, -13, 50, 50);
snow8.addImage(snowImg);
snow8.scale = 0.8;


snowman =  createSprite(700, 400, 50, 50);
snowman.addImage(snowmanImg);
snowman.scale = 4;

if(keyDown(RIGHT_ARROW)){
	Shiva.x = Shiva.x +8; 
 
   }

   if(keyDown(LEFT_ARROW)){
	Shiva.x = Shiva.x -8;

 
   }
   
   if(keyDown(DOWN_ARROW)){
    snow.velocityY = 4;
    snow1.velocityY = 5;
    snow2.velocityY = 6;
    snow3.velocityY = 7;
    snow4.velocityY = 8;
    snow5.velocityY = 9;
    snow6.velocityY = 2;
    snow7.velocityY = 4;
    snow8.velocityY = 3;
       }


  drawSprites();
}