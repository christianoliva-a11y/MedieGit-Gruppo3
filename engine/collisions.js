function checkCollision(a,b){return a.x<b.x+b.w && a.x+a.w>b.x && a.y<b.y+b.h && a.y+a.h>b.y;}
function handleCollisions(player,tiles){
    player.onGround=false;
    tiles.forEach(t=>{
        if(checkCollision(player,t)){
            if(player.vy>0 && player.y+player.h<=t.y+20){
                player.y=t.y-player.h;
                player.vy=0;
                player.onGround=true;
            }
            if(player.vx>0) player.x=t.x-player.w;
            else if(player.vx<0) player.x=t.x+t.w;
        }
    });
}
