class ball{
    constructor(x,y,radious){
        var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2			
			}
            this.image = loadImage("paper.png");
            this.body=Bodies.circle(x, y, (radious/2)-9, options);
            this.radious = radious
            World.add(world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
      image(this.image,0,0,this.radious, this.radious)
      pop()

    }
    
}