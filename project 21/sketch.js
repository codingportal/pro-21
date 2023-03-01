var ball
var wall_1
var wall_2
var wall_3,groundOBJ,rightSideOBJ,leftSideOBJ
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	
}

function setup() {
	createCanvas(1100, 1000);
	wall_1=createSprite(10,100,700,500)

	engine = Engine.create();
	world = engine.world;
    World.add(world,wall_1)
	//Create the Bodies Here.
	
  
	
	Engine.run(engine);
  ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2
	
  }
  ball= Bodies.circle(400,300,30,ball_options)
	World.add(world,ball)	
  groundOBJ= new ground(width/2670,width,20)
  leftSideOBJ= new ground(1100,600,20,120)
 rightSideOBJ= new ground (1100,600,120,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundOBJ.display()
  leftSideOBJ.display()
  rightSideOBJ.display()
  if(keyIsDown(UP_ARROW)){
	ball.velocityY= -5
	ball.velocityX=4
  }
  drawSprites();
 
}



