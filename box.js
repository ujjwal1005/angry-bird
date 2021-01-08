class Box{
    constructor(x,y,w,h){
    var options = 
        {
        'restitution' : 0.8,
        'friction' : 1.0,
        'density' : 1.0
        }
    //body
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height= h;
    World.add(world,this.body);
    }
    
display(){
    //namespace/nick name
    var position = this.body.position;
    var angle = this.body.angle;

    push();
    translate(position.x,position.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);

    pop();
}

}