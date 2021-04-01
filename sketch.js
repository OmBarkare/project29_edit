const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall, wall2, platform1, box;
var balls = [];
var smallPlatform1, smallplatform2;
var leftTower = [];
var rightTower = [];
var smallTower = [];
var smallTower2 = [];
var middleTower = [];
//var hanging1, hanging2, rope1, rope2;

var hex, slingshot;

function setup() {
  createCanvas(1100,600);

  engine = Engine.create();
  world = engine.world;

  wall = new Ground(690,450,8,100);
  wall2 = new Ground(1050,359,8,350);
  platform1 = new Ground(850,550,300,8);
  smallPlatform1 = new Ground(800,380,50,8)
  smallplatform2 = new Ground(900,420,50,8)
  box = new Box1(1050,100,20,30)

  var yVal = 240;
  for(var i = 0; i <= 5; i = i + 1){
    leftTower[i] = new Box1(690,yVal,20,30);
    rightTower[i] = new Box1(965,yVal,20,30);
    yVal = yVal - 30;
  }
  
  var yVal2 = 500
  for(var i = 0; i <= 7; i = i + 1){
    middleTower[i] = new Box1(840 ,yVal2,20,30);
    yVal2 = yVal2 - 30;
  }

  var yValST = 330
  for(var i  = 0; i<= 3; i = i + 1){
    smallTower[i] = new Box1(800,yValST,20,30);
    smallTower2[i] = new Box1(900,yValST,20,30);
    yValST = yValST - 30
  }

  var om = 720;
  for(var i = 0; i <= 12; i = i + 1){
    balls[i] = new Hex(om,530,5,6);
    om = om + 8;
  }

  hex = new Hex(230,230,25,6);
  slingshot = new SlingShot(hex.body, {x: 230, y: 180});

//  hanging1 = new Hex(745, 330, 20, 5);
//  rope1 = new SlingShot(hanging1.body, {x: 745, y: 200});
}

function draw() {
  background(0);  

  stroke("black");
  strokeWeight(1);

  wall.display();
  platform1.display();
  smallPlatform1.display();
  smallplatform2.display();
  wall2.display();
  hex.display();
//  hanging1.display();
//  rope1.display();

  for(var i = 0; i <= 5; i = i + 1){
    leftTower[i].display();
    rightTower[i].display();
  }

  for(var i = 0; i <= 7; i = i + 1){
    middleTower[i].display();
  }
  for(var i = 0; i <= 3; i = i + 1){
    smallTower[i].display();
    smallTower2[i].display();
  }
  for(var i = 0; i <= 12; i = i + 1){
    balls[i].display();
  }

  box.display();
//  slingshot.display();
  slingshot.display();

  Engine.update(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}