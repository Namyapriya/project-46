class Player {
    constructor(x,y){
        this.sprite = createSprite(x,y,20,20);
        this.sprite.velocityX = 7;
        this.runImg = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");
        this.sprite.addAnimation("running",this.runImg);
        this.deathImg = loadAnimation("death4.png");
        this.sprite.addAnimation("death",this.deathImg);
        this.sprite.scale = 2;
        //this.sprite.debug = true;
        this.sprite.setCollider("circle",-20,10,30);
    }
    gravity(g){
        this.sprite.velocityY = this.sprite.velocityY + g;
    }
}        