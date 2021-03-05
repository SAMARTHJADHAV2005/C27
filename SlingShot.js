class SlingShot{
    constructor(bodya , bodyb) {
        var options = {
            bodyA : bodya , 
            bodyB : bodyb ,
            stiffness : 0.2 ,
            length : 30
  
        }
        this.sling = Constraint.create(options)
        World.add (world,this.sling)
        
    } 
    display() {
        var pa = this.sling.bodyA.position ;
        var pb = this.sling.bodyB.position ;
        strokeWeight(3);
        line(pa.x,pa.y,pb.x,pb.y);
    }
    
}