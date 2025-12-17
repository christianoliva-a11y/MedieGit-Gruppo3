/*function renderScene(ctx, player, tiles, enemies, items, camX){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    // Sfondo
    ctx.drawImage(bg1Img, 0, 0, ctx.canvas.width, ctx.canvas.height);

    // Tiles
    ctx.fillStyle="#3a2e23";
    tiles.forEach(t=>{
        ctx.fillRect(t.x - camX, t.y, t.w, t.h);
    });

    // Player
    ctx.drawImage(playerImg, player.x - camX, player.y, player.w, player.h);

    // Enemies
    enemies.forEach(e=>{
        let img = e.type === "ghoul" ? ghoulImg : knightImg;
        ctx.drawImage(img, e.x - camX, e.y, e.w, e.h);
    });

    // Items
    items.forEach(item=>{
        let img =
            item.type === "sword" ? swordImg :
            item.type === "axe" ? axeImg :
            arrowImg;

        ctx.drawImage(img, item.x - camX, item.y, 30, 30);
    });
}
*/
function renderScene(ctx, player, tiles, enemies, items, camX) {
    // SFONDO
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // TILES
    ctx.fillStyle = "#654321";
    tiles.forEach(t => {
        ctx.fillRect(t.x - camX, t.y, t.w, t.h);
    });

    // PLAYER
    ctx.fillStyle = "red";
    ctx.fillRect(player.x - camX, player.y, player.w, player.h);

    // ENEMICI
    ctx.fillStyle = "green";
    enemies.forEach(e => {
        ctx.fillRect(e.x - camX, e.y, e.w, e.h);
    });
}
