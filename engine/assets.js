// Assicurati che window.BASE_PATH sia definito (audio.js imposterà un valore)
window.bg1Img = new Image();
window.playerImg = new Image();
window.ghoulImg = new Image();
window.knightImg = new Image();
window.swordImg = new Image();
window.axeImg = new Image();
window.arrowImg = new Image();

var bp = window.BASE_PATH !== undefined ? window.BASE_PATH : "";

window.bg1Img.src     = bp + "img/bg.jpg";
window.playerImg.src  = bp + "img/player.jpg";
window.ghoulImg.src   = bp + "img/ghoul.jpg";
window.knightImg.src  = bp + "img/knight.jpg";
window.swordImg.src   = bp + "img/sword.jpg";
window.axeImg.src     = bp + "img/axe.jpg";
window.arrowImg.src   = bp + "img/arrow.jpg";

// Helper per preload assets (se il resto del codice lo usa)
window.preloadAssets = async function() {
    const imgs = [window.bg1Img, window.playerImg, window.ghoulImg, window.knightImg, window.swordImg, window.axeImg, window.arrowImg];
    await Promise.all(imgs.map(img => {
        return new Promise(resolve => {
            if (img.complete) return resolve();
            img.onload = () => resolve();
            img.onerror = () => resolve(); // non bloccare se mancante
        });
    }));
};
