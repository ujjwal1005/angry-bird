class Pig{
    constructor(x,y){
    var options = 
    {
    'restitution' : 0.8,
    'friction' : 1.0,
    'density' : 1.0
    }
    //body
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height= 50;
    World.add(world,this.body);
    }
    
display(){
    //namespace/nick name
    var position = this.body.position;
    var angle = this.body.angle;

    push();

    translate(position.x,position.y);
    rotate(angle);
    fill("green");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);

    pop();
}

}