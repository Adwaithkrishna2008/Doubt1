class Game{

    constructor(){}
    
    
    getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data)
    {
        gameState=data.val()
    })
    }
    
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
    
    
    async start(){
        
        
    if(gameState===0){
        player= new Player()
        var playerCountref=await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount=playerCountref.val();
            player.getCount();
        }
      form= new Form()
        form.display()}
    
        voldermort=createSprite(970, 300, 50, 50);
        voldermort.addImage(voldermort_img);
        voldermort.scale=0.30;
      
        potter=createSprite(250, 300, 50, 50);
        potter.addImage(potter_img);
        potter.scale=0.85;
    
        wizards=[potter,voldermort];
        
        potter.collide(wall1);
        potter.collide(wall2);
        voldermort.collide(wall1);
        voldermort.collide(wall2);
        
        }
    
    play(){
        form.hide()
        Player.getPlayerInfo()
        image(bg,0,0,width,height);
        if(allPlayers!=undefined){
            var index=0;
            var x=0;
            var y
            for(var plr in allPlayers){
                index+=1;
                x=0+(index*200)+allPlayers[plr].XPos;
            y=displayHeight-allPlayers[plr].distance
                wizards[index-1].x=x;
                wizards[index-1].y=y;
                
            }}
    
            if(keyDown(UP_ARROW)&&player.index!=null){
    player.distance+=10;
    player.update()
            }
            if(keyDown(DOWN_ARROW)&&player.index!=null){
                player.distance+=10;
                player.update();
    
            }
            drawSprites();
    }
    
    
    
    end(){
        console.log("End");
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    }