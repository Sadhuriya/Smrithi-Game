class Player {
    constructor(x,y,radius){
        var option ={
            density:1,
            friction:0.5,
    isStatic:true 
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius/2,option)
        this.animation=loadAnimation("images/player1.png","images/player2.png","images/player3.png")
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode (CENTER)
        animation(this.animation,0,0,this.radius,this.radius);
        pop()
    }
    move(a,b){
        this.body.position.x=this.body.position.x+a 
        this.body.position.y=this.body.position.y+b


    }
}
