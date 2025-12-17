// =====================
// IMPORT ENGINE
// =====================
import "./engine/audio.js";
import "./engine/assets.js";
import "./engine/input.js";
import "./engine/camera.js";
import "./engine/collisions.js";
import "./engine/enemiesAI.js";
import "./engine/combat.js";
import "./engine/items.js";
import "./engine/levels.js";
import "./engine/physics.js";
import "./engine/renderer.js";
import "./engine/animations.js";

// =====================
// GLOBAL EXPORT (SERVE AGLI ENGINE)
// =====================
export let player;
export let tiles = [];
export let enemies = [];
export let items = [];

// =====================
// DOM READY
// =====================
window.addEventListener("DOMContentLoaded", init);

// =====================
// CANVAS
// =====================
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// =====================
// UI
// =====================
const menuDiv = document.getElementById("menu");
const commandsDiv = document.getElementById("commands");
const playBtn = document.getElementById("playBtn");
const commandsBtn = document.getElementById("commandsBtn");
const backBtn = document.getElementById("backBtn");
const hud = document.getElementById("hud");

// =====================
// GAME STATE
// =====================
let camX = 0;
let currentLevel = 1;
let gameStarted = false;
let gamePaused = false;
let loopStarted = false;

const weapons = ["Spada", "Ascia", "Arco"];
let currentWeapon = 0;

// =====================
// LEVEL DATA
// =====================
let level1, level2, level3;

// =====================
// INIT
// =====================
async function init() {
    console.log("DOM pronto");

    await preloadAssets();
    await preloadLevels();

    player = {
        x: 100,
        y: 200,
        w: 50,
        h: 60,
        vx: 0,
        vy: 0,
        onGround: false,
        hp: 100,
        stamina: 100
    };

    setupMenu();
}

// =====================
// MENU
// =====================
function setupMenu() {
    playBtn.addEventListener("click", startGame);

    commandsBtn.addEventListener("click", () => {
        menuDiv.classList.add("hidden");
        commandsDiv.classList.remove("hidden");
    });

    backBtn.addEventListener("click", () => {
        commandsDiv.classList.add("hidden");
        menuDiv.classList.remove("hidden");
    });
}

// =====================
// START GAME
// =====================
async function startGame() {
    bgm.currentTime = 0;
    bgm.play();

    gameStarted = true;
    gamePaused = false;
    menuDiv.classList.add("hidden");

    await loadLevel(currentLevel);

    if (!loopStarted) {
        loopStarted = true;
        requestAnimationFrame(loop);
    }
}

// =====================
// PAUSE
// =====================
document.addEventListener("keydown", e => {
    if (e.key === "Escape" && gameStarted) {
        gamePaused = !gamePaused;
        menuDiv.classList.toggle("hidden", !gamePaused);
    }
});

// =====================
// LEVEL LOADING
// =====================
async function preloadLevels() {
    level1 = await loadJSON("levels/level1.json");
    level2 = await loadJSON("levels/level2.json");
    level3 = await loadJSON("levels/level3.json");
}

async function loadLevel(n) {
    let level;

    if (n === 1) level = level1;
    if (n === 2) level = level2;
    if (n === 3) level = level3;

    tiles = level.tiles;
    enemies = level.enemies;
    items = [];

    player.x = 100;
    player.y = 200;
}

// =====================
// WEAPON SWITCH
// =====================
function handleWeaponSwitch() {
    if (window.Input && Input.scrollDelta !== 0) {
        currentWeapon += Input.scrollDelta;
        if (currentWeapon < 0) currentWeapon = weapons.length - 1;
        if (currentWeapon >= weapons.length) currentWeapon = 0;
        Input.scrollDelta = 0;
    }
}

// =====================
// MAIN LOOP
// =====================
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameStarted && !gamePaused) {
        applyPhysics(player, tiles);
        handleCollisions(player, tiles);

        handlePlayerAttack(player);
        updateEnemiesAI(enemies, player);
        updateInvincibility(enemies);

        collectItems(player, items);
        handleWeaponSwitch();

        animatePlayer(player);
        animateEnemies(enemies);

        camX = player.x - canvas.width / 2;

        renderScene(ctx, player, tiles, enemies, items, camX);
        drawHUD(ctx, player);

        checkPlayerDeath();
    }

    requestAnimationFrame(loop);
}

// =====================
// GAME OVER
// =====================
function checkPlayerDeath() {
    if (player.hp <= 0) {
        gamePaused = true;
        menuDiv.querySelector("h1").innerText = "Game Over";
        menuDiv.classList.remove("hidden");
    }
}

// =====================
// RESIZE
// =====================
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
