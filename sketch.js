
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var piso
var cestaE //E = esquerda
var cestaD // D - direita
var bolinha
var paredeC //C = cima
var paredeE
var paredeD
var paredeC2
var paredeD2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();

	world = engine.world;

	var options = {
		isStatic: true
	}

	piso = Bodies.rectangle(400,690,800,70,options);

	World.add (world,piso);

	cestaD = Bodies.rectangle(400,580,40,150,options);

    World.add (world,cestaD);

	cestaE = Bodies.rectangle(250,580,40,150,options);

	World.add (world,cestaE);

	bolinha = Bodies.circle(100,300,40);
 
	World.add (world,bolinha);

	paredeD = Bodies.rectangle(200,455,10,400,options);

	World.add (world,paredeD);

	paredeE = Bodies.rectangle(5,355,10,700,options);

	World.add (world,paredeE);

	paredeC = Bodies.rectangle(230,250,70,10,options);

	World.add (world,paredeC);

	paredeC2 = Bodies.rectangle(400,5,799,10,options);

	World.add (world,paredeC2);

	paredeD2 = Bodies.rectangle(794,305,10,700,options);

	World.add (world,paredeD2);

	Engine.run(engine);
  
}


function draw() {

  if(keyDown("SPACE")){

  Matter.Body.applyForce(bolinha,{
	x: 0,
	y: 0
  },{
	x: 0.01,
	y: -0.03  
  })

  }
	
  rectMode(CENTER);

  ellipseMode(RADIUS);

  background(0);

  rect(piso.position.x,piso.position.y,800,70);

  rect(cestaD.position.x,cestaD.position.y,40,150);

  rect(cestaE.position.x,cestaE.position.y,40,150);

  ellipse(bolinha.position.x,bolinha.position.y,40);

  rect(paredeD.position.x,paredeD.position.y,10,400);

  rect(paredeE.position.x,paredeE.position.y,10,700);

  rect(paredeC.position.x,paredeC.position.y,70,10);

  rect(paredeC2.position.x,paredeC2.position.y,799,10);

  rect(paredeD2.position.x,paredeD2.position.y,10,700);

  drawSprites();
 
}



