window.renderScene = function(ctx, player, tiles, enemies, items, camX) {
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

    // Items (se presenti)
    if (items && items.forEach) {
        ctx.fillStyle = "yellow";
        items.forEach(item => {
            ctx.fillRect((item.x || 0) - camX, (item.y || 0), 30, 30);
        });
    }
};
