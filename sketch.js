
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g,r,l,b,ball;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(windowWidth,windowHeight);
	console.log(windowWidth)
	console.log(windowHeight)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	r= new Basket(width*4/5,height-105-(height/6.9),width/40,height/3.45)
	l= new Basket(width*3/5,height-105-(height/6.9),width/40,height/3.45)
  	b= new Basket(width*35/50,height-105-(l.width/2),width/5,width/40)
	
	g= new Ground(width/2,height-100,width,10)
	ball= new Ball(width/5,height-120,10)
	Engine.run(engine);
  //  b.width=width/5
	//b.height=l.width
	//width/2,height-90,width,10
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  Engine.update(engine);
  ball.display();
  g.display();
  r.display();
  l.display();
  b.display();
 
  drawSprites();
  
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:(12*width/1290), y:-(8+23*height/654)})
    }
}
