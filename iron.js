class Iron{
    constructor(x,y,width,height){
        var options = {
            resitution:0.1,
            friction:3,
            density:50
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var ironpos = this.body.position;
        var angle  = this.body.angle;
        push();
        translate(ironpos.x,ironpos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("silver")
        rect(0,0,this.width,this.height)
        pop();

    }
}