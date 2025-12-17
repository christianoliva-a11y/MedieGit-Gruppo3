function updateEnemiesAI(enemies, player){
    enemies.forEach(e=>{
        if(e.type==="ghoul") e.vx = player.x < e.x ? -2 : 2;
        if(e.type==="knight") e.vx = player.x < e.x ? -1 : 1;
        if(e.type==="boss") {
            let dx = player.x - e.x;
            e.vx = dx>0 ? 1.5 : -1.5;
            if(Math.abs(dx)<100 && e.attackCooldown<=0){
                e.attackActive = true;
                e.attackCooldown = 60;
            } else e.attackActive = false;
            e.attackCooldown--;
        }
        e.x += e.vx || 0;
    });
}
