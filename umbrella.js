class Umbrella{
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        this.image=loadImage("proc41images/images/walking/walking_1.png"
        ,"proc41images/images/walking/walking_2.png"
        ,"proc41images/images/walking/walking_3.png"
        ,"proc41images/images/walking/walking_4.png"
        ,"proc41images/images/walking/walking_5.png"
        ,"proc41images/images/walking/walking_6.png"
        ,"proc41images/ walking /walking_7.png"
        ,"proc41images/images/walking/walking_8");
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
          imageMode(CENTER);
         image(this.image,pos.x,pos.y+70,300,300);
    }
}