const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,210,10);
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  
  blockt1 = new Block(640,180,30,40);
  blockt2 = new Block(670,180,30,40);
  blockt3 = new Block(700,180,30,40);
  blockt4 = new Block(730,180,30,40);
  blockt5 = new Block(760,180,30,40);

  blockt6 = new Block(655,150,30,40);
  blockt7 = new Block(685,150,30,40);
  blockt8 = new Block(715,150,30,40);
  blockt9 = new Block(745,150,30,40);
  
  blockt10 = new Block(670,120,30,40);
  blockt11 = new Block(700,120,30,40);
  blockt12 = new Block(730,120,30,40);
  
  blockt13 = new Block(685,90,30,40);
  blockt14 = new Block(715,90,30,40);

  blockt15 = new Block(700,60,30,40);

  polygon=Bodies.circle(50,200,50)
  World.add(world,polygon);

  chain1=new Slingshot(this.polygon,{x:100,y:200});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("lightgreen");
  blockt1.display();
  blockt2.display();
  blockt3.display();
  blockt4.display();
  blockt5.display();
  fill("skyblue");
  blockt6.display();
  blockt7.display();
  blockt8.display();
  blockt9.display();
  fill("lime");
  blockt10.display();
  blockt11.display();
  blockt12.display();
  fill("turquoise");
  blockt13.display();
  blockt14.display();
  fill("pink");
  blockt15.display();

  chain1.display();

  

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,30,30)
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain1.fly();
}