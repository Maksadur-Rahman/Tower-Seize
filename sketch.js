const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.constraint;


var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var ball;
var string;




function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

 //making ball
  ball=new Ball(55,250,40);

  //making ground
  ground=new Ground(400,50,800,20);

  //making string
  string=new Strung(ball.body,{x:50,x:350});

  b1=new Box(400,300,50,50);
  b2=new Box(400,300,50,50);
  b3=new Box(400,300,50,50);
  b4=new Box(400,300,50,50);
  b5=new Box(400,300,50,50);
  b6=new Box(400,300,50,50);
  b7=new Box(400,300,50,50);
  b8=new Box(400,300,50,50);
  b9=new Box(400,300,50,50);
  
}

function draw() {
   
  Engine.update(engine);
  textSize(30);
  fill("cyan");
  text("score "+score,800,50);

  ground.display();
  ball.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  ball.display();
  string.display();
  

  
}



function mouseDragged(){

  Matter.body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseRellised(){

  string.fly();
}
function keyPressed(){

  if(keyCode===32){

    ball.attack(this.string);
  }

}

async function getBg()
{
    var request= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var response= await request.json();
    var hour=response.datetime.slice(11,13);
    console.log(hour);
    if(hour>=6 && hour<=18){
        background(235,24,264);
    }
    else{background(0)};
}