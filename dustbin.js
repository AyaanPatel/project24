class dustbin{
    constructor(x,y){
     var options = {
         restitution:0.5,
         friction:1.5,
         density:2.0,
       }
       this.body = Bodies.rectangle(x,y,50,100,options);
       this.wigth = 50;
       this.height = 100;

       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
    }
}