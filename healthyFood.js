class HealthyFood {
    constructor(x,y,radius,img){
        var option ={
            density:1,
            friction:0.5,
            isStatic:true 
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius/2,option)
        this.image=img
        World.add(world,this.body);

    }
    display(){
       
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode (CENTER)
        image(this.image,0,0,this.radius,this.radius);
        pop()
    }
}