class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetYz
    
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope = Constraint.create(options)
    World.add(world,this.rope)
} 
    display(){
        var point = this.rope.bodyA.position;
        var point = this.rope.bodyB.position;

        strokeWeight(2);
        
        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

        ellipse(0,0,60,60);
      }
}