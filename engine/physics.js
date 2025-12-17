const GRAVITY=0.8,MOVE_SPEED=4,JUMP_FORCE=-16;

function applyPhysics(player,tiles){
    if(Input.left) player.vx=-MOVE_SPEED;
    else if(Input.right) player.vx=MOVE_SPEED;
    else player.vx=0;

    if(Input.jump && player.onGround){ player.vy=JUMP_FORCE; player.onGround=false; }

    player.vy+=GRAVITY;
    player.x+=player.vx;
    player.y+=player.vy;
}
