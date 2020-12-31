var log1,log2,log3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	strokeWeight(0);
	log1=new Box(650,630,10,50);
    
	log2=new Box(550,630,10,50);

	log3=new Box(600,655,100,10);

    paper1=new paper(40,640,20);

	ground1=new ground(400,665,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  log1.display();
  log2.display();
  log3.display();
  
  paper1.display();

  ground1.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	}
}



