
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, ball1, binimage, binL,binR
var world;

function preload(){
  binimage = loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	
	ball1 = new ball(200, 600, 50)
    binL = new bin(1100, 580, 10, 180)
	binR = new bin(1300, 580, 10, 180)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

  groundObject.display();
  binL.display()
  binR.display()
  ball1.display();
  image(binimage,1070, 470,250,200)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
       Matter.Body.applyForce(ball1.body, ball1.body.position,{x:55,y:-58})
	}
}

