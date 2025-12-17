


async function loadLevel(n) {
    try {
        // Fetch del file JSON relativo al livello
        const res = await fetch(`levels/level${n}.json`);
        if (!res.ok) throw new Error(`Level ${n} not found (HTTP ${res.status})`);

        const data = await res.json();

        // Carica i dati
        tiles = data.tiles || [];
        enemies = data.enemies || [];
        items = data.items || [];

        // Inizializza nemici
        enemies.forEach(e => {
            e.w = e.w || 50;
            e.h = e.h || 60;
            e.hp = e.hp || 100;
            e.invincible = false;
            e.invTimer = 0;
            if (e.type === "boss") e.attackCooldown = 0;
        });

        console.log(`Level ${n} loaded successfully`, data);
    } catch (error) {
        console.error(`Failed to load level ${n}:`, error);
        // Se vuoi, puoi riportare il gioco al livello precedente o mostrare un messaggio
    }
}

async function nextLevel() {
    currentLevel++;
    await loadLevel(currentLevel); // aspetta che il livello sia caricato prima di continuare
}
