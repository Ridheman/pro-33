class particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 80;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image1 = loadImage("snow4.webp")
        World.add(world, this.body);
       
    }
    display() {

        var pos = this.body.position;
        image(this.image1,pos.x,pos.y,this.r,this.r);
        
    }

};