const Engine = Matter.Engine ;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world ;
var pig1,pig2;
var box1,box2,ground;
var log;
var bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world ;
  //creating object for box class
  box1= new Box(700,320,70,70);
  box2 = new Box(900,320,70,70);
  
  pig1 = new Pig(800,320);
  log = new Log(810,320,PI/2);
  bird = new Bird(100,100);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810, 220);
  ground = new Ground(600,380);
 /* ball_options = 
  {
restitution : 1.00
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);*/
}

function draw() {
  background(0);
  
  
Engine.update(engine);

/* ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y, 20, 20);*/

 box1.display();
 box2.display();
 pig1.display();
 log.display();
 bird.display();
 box3.display();
 box4.display();
 pig2.display();
 ground.display();
}