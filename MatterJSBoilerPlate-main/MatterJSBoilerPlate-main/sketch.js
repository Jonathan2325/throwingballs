
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,leftSide,rightSide,wall,wall2,roof;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	 world = engine.world;
	 rectMode(CENTER);
	 ellipseMode(RADIUS);
	 var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	 ball = Bodies.circle(200,50,20,ball_options);

	 World.add(world,ball);
	 ground = new Ground(300,580,600,50);
	 rightSide = new Ground(500,530,10,50);
	 leftSide = new Ground(380,530,10,50);
	 wall = new Ground(580,300,50,600);
	 wall2 = new Ground(20,300,50,600);
	 roof = new Ground(300,20,600,50);
	Engine.run(engine);
    
}


function draw() {
  background(51);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  rightSide.show();
  leftSide.show();
  wall2.show();
  wall.show();
  roof.show();
  keyPressed();
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     hForce();
	 
	}
}
function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:0});
}





