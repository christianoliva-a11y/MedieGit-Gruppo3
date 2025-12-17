
function animatePlayer(player){
    if(player.attackActive) player.frame="attack";
    else if(!player.onGround) player.frame="jump";
    else if(player.vx!==0) player.frame="run";
    else player.frame="idle";
}

function animateEnemies(enemies){
    enemies.forEach(e=>{
        if(e.attackActive) e.frame="attack";
        else if(e.vx!==0) e.frame="walk";
        else e.frame="idle";
    });
}
