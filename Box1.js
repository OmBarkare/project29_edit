class Box1{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.2,
            friction: 1.0,
            density: 1.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/box.png")

        World.add(world,this.body);
    }
    display(){
//

//        var r = Math.round(random(1,5))        
//        switch(r){
//            case 1: fill("blue");
//            break;
//            case 2: fill("red");
//            break;
//            case 3: fill("yellow");
//            break;
//            case 4: fill("lightBlue");
//            break;
//            case 5: fill("green");
//            default:break;
//        }
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
}