
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(400,100,500,20)

	bob1=new Bob(100,600)
	bob2=new Bob(200,600)
	bob3=new Bob(300,600)
	bob4=new Bob(400,600)
	bob5=new Bob(500,600)

	rope1 = new rope(bob1.body,roof1.body,-100,0)
	rope2 = new rope(bob2.body,roof1.body,-50,0)
	rope3 = new rope(bob3.body,roof1.body,0,0)
	rope4 = new rope(bob4.body,roof1.body,50,0)
	rope5 = new rope(bob5.body,roof1.body,100,0)
  
}


function draw() {
  background(255,255,255);
  Engine.update(engine)

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof1.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  

  drawSprites();
 
}
function keyPressed(){ 
if (keyCode === UP_ARROW) { 
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
  } 
}