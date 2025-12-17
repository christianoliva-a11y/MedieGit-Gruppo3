const BASE_PATH = "../";

const jump = new Audio(BASE_PATH + "audio/jump.wav");
const attack = new Audio(BASE_PATH + "audio/attack.wav");
const hit = new Audio(BASE_PATH + "audio/hit.wav");
const boss = new Audio(BASE_PATH + "audio/boss.wav");


bgm.loop = true;
bgm.volume = 0.4;
hitSound.volume = 0.6;
deathSound.volume = 0.7;

AudioManager.load("jump", "audio/jump.wav");
AudioManager.load("attack", "audio/attack.wav");
AudioManager.load("hit", "audio/hit.wav");
AudioManager.load("boss", "audio/boss.wav");
