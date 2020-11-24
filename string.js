class Strung{

    constructor(body,pointB){

        var opction={

            bodyA:body,
            pointB:pointB,
            stiffness:0.4,
            length:15,
        }
        this.pointB=pointB;
       this.sling=Constraint.create(opction);
       World.add(world,this.sling);

    }

    fly(){

        this.sling.body=null;
    }

    attack(){

        this.sling.bodyA=body;
    }
    display(){
        var pointB=this.pointB;
        var pointA=this.sling.bodyA.position;

        if(this.sling.bodyA){

           
            stroke(255);
            strokeWeight(4);
            line(pointB.x,pointB.y,pointA.x,pointA.y);


        }

    }
}