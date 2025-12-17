
function drawHUD(ctx, player){
    // HP
    ctx.fillStyle="red";
    ctx.fillRect(20,20,player.hp*2,20);
    ctx.strokeStyle="black";
    ctx.strokeRect(20,20,200,20);
    // Stamina
    ctx.fillStyle="blue";
    ctx.fillRect(20,50,player.stamina*2,10);
    ctx.strokeRect(20,50,200,10);
    // Arma
    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText("Arma: "+weapons[currentWeapon], 20, 80);
}
