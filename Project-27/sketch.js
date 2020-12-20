
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	log = createSprite(300,100,300,10);

	ball = new Ball(200,200);
	ball1 = new Ball(250,200)

	

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ball1.display();
  drawSprites();
 
}



