// Imposta BASE_PATH globale (vuoto, perché index.html è nella root)
window.BASE_PATH = window.BASE_PATH !== undefined ? window.BASE_PATH : "";

// Minimal AudioManager
window.AudioManager = {
    sounds: {},
    load(name, path) {
        try {
            const a = new Audio(window.BASE_PATH + path);
            this.sounds[name] = a;
            return a;
        } catch (e) {
            console.warn("Audio load failed", name, path, e);
            return null;
        }
    },
    get(name) {
        return this.sounds[name];
    },
    play(name) {
        const s = this.sounds[name];
        if (s) { try { s.currentTime = 0; s.play(); } catch(e) { console.warn("Audio play failed", name, e); } }
    }
};

// Carica suoni usati (nomi basici)
window.bgm = window.AudioManager.load("bgm", "audio/boss.wav") || new Audio(window.BASE_PATH + "audio/boss.wav");
if (window.bgm) { window.bgm.loop = true; window.bgm.volume = 0.4; }

window.jumpSound = window.AudioManager.load("jump", "audio/jump.wav");
window.attackSound = window.AudioManager.load("attack", "audio/attack.wav");
window.hitSound = window.AudioManager.load("hit", "audio/hit.wav");
window.deathSound = window.AudioManager.load("death", "audio/death.wav");

// Volumi (solo se esistono)
if (window.hitSound) window.hitSound.volume = 0.6;
if (window.deathSound) window.deathSound.volume = 0.7;
