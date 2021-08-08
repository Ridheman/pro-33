  const Engine = Matter.Engine
  const World = Matter.World
  const Events = Matter.Events
  const Bodies = Matter.Bodies;

var snow1;
var particles = [];
var engine,world;

function preload(){
snow1 = loadImage("snow3.jpg")
}


function setup() {
  engine = Engine.create()
  world = engine.world;
  createCanvas(1500,700);
  createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine)
  background(snow1);  
  drawSprites();

  if(frameCount % 50 === 0){
    particles.push(new particle(random(100,1200),0))
  }
   

  //display the paricles 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

}