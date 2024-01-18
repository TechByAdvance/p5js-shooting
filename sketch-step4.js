// 必要な変数を定義する
let mode = 1;
let gameTime;
let score;

let playerImage;
let playerX;
let playerY;

let enemyImage;
let enemyX;
let enemyY;
let enemyHit;
let enemyTime;

let bulletImage;
let bulletX;
let bulletY;
let bulletHit;

function preload() {
  // 画像を読み込む
  playerImage = loadImage("image/player.png");
  enemyImage = loadImage("image/enemy.png");
  bulletImage = loadImage("image/bullet.png");
}

function setup() {
  createCanvas(500, 500);
  
  // 変数を初期化する
  score = 0;
  playerX = width / 2;
  playerY = height - 50;
  enemyX = [100, 200, 300];
  enemyY = [100, 100, 100];
  enemyHit = [false, false, false];
  enemyTime = 0;
  bulletX = [100, 200, 300];
  bulletY = [300, 300, 300];
  bulletHit = [false, false, false];
}

function draw() {
  background(0);
  
  if (mode == 0) {
    // スタート画面の表示
  }
  
  if (mode == 1) {
    // 自機を動かす
    if (keyIsDown(LEFT_ARROW)) {
      playerX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      playerX += 5;
    }
    
    // 敵を増やす

    // 敵を動かす

    // 弾を動かす

    // 敵と弾が当たったらスコアを増やす

    // 自機を表示する
    imageMode(CENTER);
    image(playerImage, playerX, playerY, 50, 50);
    // 敵を表示する
    for (let i = 0; i < enemyX.length; i++) {
      if (enemyHit[i] == false) {
        image(enemyImage, enemyX[i], enemyY[i], 50, 50);
      }
    }
    // 弾を表示する
    for (let i = 0; i < bulletX.length; i++) {
      if (bulletHit[i] == false) {
        image(bulletImage, bulletX[i], bulletY[i], 20, 20);
      }
    }
    
    // スコアを表示する
    
    // 時間を表示する
    
    // 残り時間が0になったら終了画面に
  }
  
  if (mode == 2) {
    // 終了画面の表示
  }
}

function keyPressed() {
  // 弾を打つ
}

function mousePressed() {
  if (mode == 0) {
    // 変数等の初期化
    // プレイ画面に遷移
  }
  if (mode == 2) {
    // スタート画面に遷移
  }
}