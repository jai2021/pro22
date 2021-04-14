var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyBody,fsImg,fs;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyImg = loadImage("images/fairyImage2.png");
	fsImg = loadImage("fr.png");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,600);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;
   

	fairyBody = Bodies.circle(100 , 600 , 100);
	//World.add(Matter.World, fairyBody);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.lifetime=150;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.isTouching(fairy)){
	fairy.velocityX=0;
	fairy.addImage(fsImg)
	fairy.changeImage(fsImg);
	fairy.scale=0.4;
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
		fairy.velocityX=-5;
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.velocityX=5;
	}
	
}
