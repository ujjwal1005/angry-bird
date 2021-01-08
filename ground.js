class Ground{
    constructor(x,y){
    var options = {
        isStatic : true 

    }
    //body
    this.body = Bodies.rectangle(x,y,1200,50,options);
   
    World.add(world,this.body);
    }
    
display(){
    //namespace/nick name
    var position = this.body.position

    fill("brown");
    rectMode(CENTER);
    rect(position.x,position.y,1200,50);
}

}
