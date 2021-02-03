var obstacles,obstaclesGroup;
var character,ground,gr;
var wonSprite,checkpoint,power;
var lives,score=0;
var gamestate="play"
var restart

function preload() {
    gr=loadImage('ground2.png')
    re=loadImage('restart.png');
}
function setup() {
    createCanvas(windowWidth,windowHeight);

    restart=createButton('restart')
    obstaclesGroup=new Group();
    ground=createSprite(width/2,height/2+220,1100,60);
    ground.addImage(gr)
   // ground.scale=1.9
    character=createSprite(width/2+400,height/2+10,30,120);
    character.shapeColor='pink'
}

function draw() {
    background('cyan')
    drawSprites();
    character.collide(ground);
    if (gamestate==='play') {

if(keyDown('space')){
character.velocityY=-10
}
character.velocityY=character.velocityY+0.5
   
    obstaclest();
if(obstaclesGroup.isTouching(character)){

    gamestate='end'
}
    }
if(gamestate==='end'){
obstaclesGroup.destroyEach();
    background('white');
    obstaclesGroup.setVelocityXEach(0);
    textSize(32)
    fill ('red')
    text("YOU LOST",width/2,height/2)
    
    drawSprites();
   restart.visible=false
   if(keyDown('space')){
gamestate='play'

   }
}

}



function mousePressed() {
    gamestate='play';
}

function obstaclest() {
    if(frameCount%60===0){
obstacles=createSprite(width/2,height/2+123,20,110);
obstacles.velocityX=12;
obstaclesGroup.add(obstacles)
obstacles.shapeColor='red';

obstaclesGroup.collide(ground)
    }
}