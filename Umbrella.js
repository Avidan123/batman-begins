class Umbrella{
constructor(x,y){
var options={
isStatic:true

}
this.body=Bodies.circle(x,y,50,options)
this.image=loadImage("images/walkingFrame/walking_4.png")
this.radius=50

World.add(world,this.body)
}
display(){
    var pos=this.body.position
    imageMode(CENTER)
image(this.image,pos.x,pos.y,300,300)

}
}