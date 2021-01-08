const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world,ground,ball



function setup() {
  var canvas = createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 var options_ground={
   isStatic:true
 }
 ground = Bodies.rectangle(200,390,800,20,options_ground);
 World.add(world,ground);
 var options_ball={
  restitution:1.2
}
 ball = Bodies.circle(200,100,20,options_ball);
 World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}