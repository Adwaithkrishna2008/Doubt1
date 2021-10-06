  var life_bar1,life_bar2,life_bar3,potter,voldermort,potter_img,voldermort_img;
  var beamR,beamG;
  var  bg, playerCount=0,gameState=0,player,form,game,allPlayers,database,wizards;
var fireG,greenG;
  var wall1,wall2;
  var  hp,hp1,hp2,vp,vp1,vp2,hpI,hp1I,hp2I,vpI,vp1I,vp2I;
  var lives=8,score=0;

  function preload(){
  beamR=loadImage("Hbeam.png");
  beamG=loadImage("Vbeam.png");
  bg=loadImage("BG.jpg");
  voldermort_img=loadImage("voldermort.png");
  potter_img=loadImage("harry potter.png");
  hpI=loadImage("Hprotect.png")
  hp1I=loadImage("Hp1.png")
  hp2I=loadImage("Hprotect2.png")
  vpI=loadImage("nagini.png")
  vp1I=loadImage("vp1.png")
  vp2I=loadImage("Vp2.png")



  }





  function setup() {
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    
    game=new Game();
    game.getState();
    game.start();
    
fireG=new Group();
gfireG=new Group();
          hp=createSprite(70, 300, 50, 50);
          hp.addImage(hpI);
          hp.scale=0.85;
          hp2=createSprite(80, 500, 50, 50);
          hp2.addImage(hp2I);
          hp2.scale=0.55;
          hp1=createSprite(60,76, 50, 50);
          hp1.addImage(hp1I);
          hp1.scale=0.65;

          vp=createSprite(1150, 300, 50, 50);
          vp.addImage(vpI);
          vp.scale=0.30;
          vp1=createSprite(1150, 479, 50, 50);
          vp1.addImage(vp1I);
          vp1.scale=0.40;
          vp2=createSprite(1150, 100, 50, 50);
          vp2.addImage(vp2I);
          vp2.scale=0.40;

          
          
          wall1=createSprite(560,6,10000,20);
           wall1.visible=false;

           wall2=createSprite(560,570,10000,20);
           wall2.visible=false;


  }

  function draw() {
    background(bg); 
    
    if(playerCount===2){
      game.update(1)
      }

  if(gameState===1){
      game.play();
  }

  if(gameState===2){
      game.end();
  }


if(keyDown("space")){
  createfire();
}

if(keyDown("V")){
  creategreenfire();}


if(fireG.isTouching(hp)){
  life=life-1;
}



    //drawSprites();
  }



  function createfire(){
    var fire= createSprite(380,220,60,10);
   fire.addImage(beamR);
   fire.velocityX = 4;
   fire.scale=0.5;
   fire.y = World.mouseY;
   fire.lifetime=900;
   fireG.add(fire);
  }

  function creategreenfire(){
    var Gfire= createSprite(970,220,60,10);
    Gfire.addImage(beamG);
    Gfire.scale=0.0000003;
    Gfire.velocityX = -4;
    Gfire.scale=0.5;
    Gfire.y = voldermort.y;
    Gfire.lifetime=900;
    gfireG.add(Gfire);
  }