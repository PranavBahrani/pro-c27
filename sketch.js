
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,rope

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rope = createSprite(550,200,200,10)
	bobObject1 = createSprite(550,350,10,10)
	bobObject2 = createSprite(560,350,10,10)
	bobObject3 = createSprite(570,350,10,10)
	bobObject4 = createSprite(580,350,10,10)
	bobObject5 = createSprite(590,350,10,10)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
}



