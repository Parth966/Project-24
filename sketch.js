const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,stone,iron,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(200,500,50,50);
    iron = new Iron(500,500,75,75);
    rubber = new Rubber(50,50,10)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    
 
}