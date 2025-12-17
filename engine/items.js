// items.js

function collectItems(player, items){
    items.forEach((item,i)=>{
        if(player.x + player.w > item.x &&
           player.x < item.x + 30 &&
           player.y + player.h > item.y &&
           player.y < item.y + 30){
            console.log("Raccolto:", item.type);
            items.splice(i,1);
        }
    });
}
