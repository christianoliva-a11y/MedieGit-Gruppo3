// combat.js - gestisce attacchi, danni, stamina e armi
function attackPlayer(player, enemies) {
    enemies.forEach(e => {
        if(player.attackActive && checkCollision(player, e)){
            if(!e.invincible){
                e.hp -= player.attackPower || 10;
                e.invincible = true;
                e.invTimer = 20;
            }
        }
    });
}

function updateInvincibility(enemies){
    enemies.forEach(e=>{
        if(e.invincible){
            e.invTimer--;
            if(e.invTimer<=0) e.invincible=false;
        }
    });
}

function handlePlayerAttack(){
    if(Input.attack && player.stamina >= 10){
        player.attackActive = true;
        player.attackPower = 15;
        player.stamina -= 10;
        AudioManager.play("attack");
    } else player.attackActive = false;

    if(Input.heavy && player.stamina >= 25){
        player.attackActive = true;
        player.attackPower = 35;
        player.stamina -= 25;
        AudioManager.play("attack");
    }
}
