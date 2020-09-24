class Paper {
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
    
  }
  this.body = Bodies.rectangle(x,y,50,50,options);
  this.widht = 50;
  this.height = 50;

  World.add(world, this.body);
}

display(){
    var pos=this.body.position;
    var angle = this.body.angle;
}
  
}
