class chain {
    constructor (A,B){
var option = {
    bodyA:A,
    pointB:B,
    stiffness:0.04,
    length:10

    
}
this.chain=Constraint.create(option)
World.add(world,this.chain)
    }
    fly(){this.chain.bodyA=null}
    display(){
        strokeWeight(10)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        
    }
}