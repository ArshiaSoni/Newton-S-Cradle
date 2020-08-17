
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof (400, 100, 250, 20);
	
	bob1 = new Bob(320, 250);
	rope1 = new Rope ({x: 320, y: 100}, bob1.body);

	bob2 = new Bob(360, 250);
	rope2 = new Rope ({x: 360, y: 100}, bob2.body);

	bob3 = new Bob(400, 250);
	rope3 = new Rope ({x: 400, y: 100}, bob3.body);

	bob4 = new Bob(440, 250);
	rope4 = new Rope ({x: 440, y: 100}, bob4.body);
	
	bob5 = new Bob(480, 250);
	rope5 = new Rope ({x: 480, y: 100}, bob5.body);

	Engine.run(engine);
  
}


function draw() {
 
  background("grey");
  
  roof.display();

  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();
  
  bob5.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -0.02, y:0.01});
	}
	if(keyCode == RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x: 0.02, y:-0.01});
	}
}
