class Hex{
    constructor(x,y,radius,sides){
        var options = {
            'restitution': 0.6,
            'density': 1.5,
            'friction': 1.2 
        }
        this.body = Bodies.polygon(x,y,sides,radius,options);
        this.radius = radius;
        this.image = loadImage("images/hexagon.png")
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}