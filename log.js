class Log{
    constructor(x,y,angle){
    var options = 
        {
        'restitution' : 0.8,
        'friction' : 1.0,
        'density' : 1.0
        }
    //body
    this.body = Bodies.rectangle(x,y,230,50,options);
    this.width = 230;
    this.height= 50;
    Matter.Body.setAngle(this.body,angle)
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
    stroke("brown");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);

    pop();
}

}