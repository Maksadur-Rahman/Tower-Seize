class Ball{

    constructor(x,y,r){

        var opction={
            "dencity":1.0,
            "restitution":0.5,
            "friction":0.4,
             

        }
        
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r,opction);
        this.r=r;
        World.add(world,this.body);

    }
    display(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        transelate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0,this.r);
        pop()
       
    }
}