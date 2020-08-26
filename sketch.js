
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
	roof1 = new roof(400,200,500,20)

	bob1=new Bob(100,300)
	bob2=new Bob(200,300)
	bob3=new Bob(300,300)
	bob4=new Bob(400,300)
	bob5=new Bob(500,300)

	rope1 = new rope(bob1.body,roof1.body)
	rope2 = new rope(bob2.body,roof1.body)
	rope3 = new rope(bob3.body,roof1.body)
	rope4 = new rope(bob4.body,roof1.body)
	rope5 = new rope(bob5.body,roof1.body)
  
}


function draw() {
  background(0);
  Engine.update(engine)

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof1.display()

  /*rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  */

  drawSprites();
 
}



