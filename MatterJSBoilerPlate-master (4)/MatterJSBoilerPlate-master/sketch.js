
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options={
	isStatic:false,
	restitution:0
	friction:1,
	density:1.2

}

function preload()
{
	

	this.boy.png = loadImage
	this.mango.png =loadImage
	this.stone.png = loadImage
	this.tree.png = loadImage
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	function detectcollision(Lstone,Lmango){
		mangoBodyPosition=lmango.body.mangoBodyPosition
		stoneBodyPosition=lstone.body.mangoBodyPosition

		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.x,mangoBodyposition.y
	if (distance <-lmango.r+lstone.r
    {
       Matter.Body.setStatic(lmango.body,false);
	}
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  detectollisin(stoneObj1,mango1);
	detectollisin(stoneObj1,mango2);
	detectollisin(stoneObj1,mango3);
	detectollisin(stoneObj1,mango4);
	detectollisin(stoneObj1,mango5);
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	    launcherObject.attach(stoneObj.body);
	}
}
   
	   mouseDragged();
	   if (mouseDragged) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	   }
	   
	   




	   mouseReleased();
	   if(mouseReleased)
	   launcherObject.attach(stoneObj.body);
	


