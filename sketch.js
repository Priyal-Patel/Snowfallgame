var bachgroundImg;
var boy;
var snowman, boy2, snowman2;
var snowflakes;

function preload ()
{
    backgroundImg = loadImage("snow1.jpg");
    snowman = loadImage("mansnow.jpg");
    snowman2 = loadImage("snowman2.jpg");
    snowflakes = loadImage("snow4.webp");
}

function setup() {
  createCanvas(1400,800);
  boy = createSprite(450, 600, 50, 50);
  boy.addImage(snowman);
  boy.scale = 0.7;

  boy2 = createSprite(300, 600, 50, 50);
  boy2.addImage(snowman2);
  boy2.scale = 0.7;

  edge = createEdgeSprites();

  snowGroup = new Group();

}

function draw() {
  background(backgroundImg);  
  if(keyDown("space")){
    boy.velocityY = -3  
  }
  boy.bounceOff(edge);

  if(keyDown("up")){
    boy2.velocityY = -3;
  }
  boy2.bounceOff(edge);

  snowfall();
  drawSprites();
}

function snowfall()
{
    if(frameCount%80==0){
      snow = createSprite(random(500,800),random(10,200),50,50);
      snow.addImage(snowflakes);
      snow.velocityY = 2;
      snow.scale = 0.2
    }
}