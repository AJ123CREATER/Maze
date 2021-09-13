var wall1img,wall2img,wall3img,wall4img,wall5img,wall6img,wall7img,wall8img,wall9img,wall10img,wall11img;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11;

var obstacleimg,obstacle;

var characterimg,character;

var boximg,box;

var support,support2,supportimg,support2img;

var cactus,cactus1,cactus2;

var cactusimg,cactus1img,cactus2img;

var price,priceimg;

var teleporter1,teleporter2;

var teleporter1img,teleporter2img;

var mazetext,mazetextimg;

function preload(){
  //walls
  wall1img = loadImage("Images/Wall1.png");
  wall2img = loadImage("Images/Wall2.png");
  wall3img = loadImage("Images/Wall3.png");
  wall4img = loadImage("Images/Wall4.png");
  wall5img = loadImage("Images/Wall5.png");
  wall6img = loadImage("Images/Wall6.png");
  wall7img = loadImage("Images/Wall7.png");
  wall8img = loadImage("Images/Wall8.png");
  wall9img = loadImage("Images/Wall9.png");
  wall10img = loadImage("Images/Wall10.png");
  wall11img = loadImage("Images/Wall11.png");

  //Obstacle
  obstacleimg = loadImage("Images/OBSTACLE.png");

  //character
  characterimg = loadImage("Images/Character.png");

  //box
  boximg = loadImage("Images/Box.png");

  //support
  supportimg = loadImage("Images/Support.png")
  support2img = loadImage("Images/Support2.png")

  //cactus
  cactusimg = loadImage("Images/Cactus.png")
  cactus1img = loadImage("Images/Cactus - 1.png")
  cactus2img =loadImage("Images/Cactus - 2.png")

  //price
  priceimg =loadImage("Images/Price.png")

  //Teleporters
  teleporter1img = loadImage("Images/Teleporter1.png")
  teleporter2img = loadImage("Images/Teleporter2.png")

  //Maze Text
  mazetextimg = loadImage("Images/Maze Text.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //wall1 
  wall1=createSprite(155,58)
  wall1.addImage("WALL1",wall1img);
  wall1.scale=0.15;

  //wall2 
  wall2=createSprite(288,223)
  wall2.addImage("WALL2",wall2img);
  wall2.scale=0.15;

  //wall3
  wall3=createSprite(340,387)
  wall3.addImage("WALL3",wall3img);
  wall3.scale=0.15;

  //wall4
  wall4=createSprite(397,258)
  wall4.addImage("WALL4",wall4img);
  wall4.scale=0.15;
  
   //wall5
   wall5=createSprite(510,120)
   wall5.addImage("WALL5",wall5img);
   wall5.scale=0.15;

  //wall6
  wall6=createSprite(633,165)
  wall6.addImage("WALL6",wall6img);
  wall6.scale=0.15;

   //wall7
   wall7=createSprite(554,203)
   wall7.addImage("WALL7",wall7img);
   wall7.scale=0.15;

  //wall8
  wall8=createSprite(465,309)
  wall8.addImage("WALL8",wall8img);
  wall8.scale=0.15;

  //wall9
  wall9=createSprite(344,436)
  wall9.addImage("WALL9",wall9img);
  wall9.scale=0.15;

  //wall10
  wall10=createSprite(221,286)
  wall10.addImage("WALL10",wall10img);
  wall10.scale=0.15;

  //wall11
  wall11=createSprite(118,125)
  wall11.addImage("WALL11",wall11img);
  wall11.scale=0.15;

  //OBSTACLE
  obstacle=createSprite(13,91.7)
  obstacle.addImage("Obstale",obstacleimg);
  obstacle.scale=0.22;

  //character
  character=createSprite(50,100)
  character.addImage("Character",characterimg)
  character.scale=0.2;

  //box
  box=createSprite(100,110)
  box.addImage("Box",boximg)
  box.scale=0.2;

  //support
  support=createSprite(240,255)
  support.addImage("Support",supportimg);
  support.scale=0.15;

  support2=createSprite(425,160)
  support2.addImage("Support2",support2img);
  support2.scale=0.15;

  //cactus
  cactus=createSprite(530,167)
  cactus.addImage("Cactus",cactusimg);
  cactus.scale=0.013;

  cactus1=createSprite(233,238)
  cactus1.addImage("Cactus1",cactus1img);
  cactus1.scale=0.015;

  cactus2=createSprite(435,415)
  cactus2.addImage("Cactus1",cactus2img);
  cactus2.scale=0.020;

  //price
  price=createSprite(612,198)
  price.addImage("Price",priceimg);
  price.scale=0.08;

  //Teleporters
  teleporter1=createSprite(420,395)
  teleporter1.addImage("Teleporter1",teleporter1img);
  teleporter1.scale=0.16;

  teleporter2=createSprite(425,140)
  teleporter2.addImage("Teleporter2",teleporter2img);
  teleporter2.scale=0.16;

  //mazetext
  mazetext=createSprite(850,280)
  mazetext.addImage("MazeText",mazetextimg);
  mazetext.scale=0.1;

}

function draw() {
  background("CYAN");
  text(mouseX+":"+mouseY,mouseX,mouseY)
  drawSprites();
}



