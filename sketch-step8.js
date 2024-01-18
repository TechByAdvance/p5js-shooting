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
  enemyX = [];
  enemyY = [];
  enemyHit = [];
  enemyTime = 0;
  bulletX = [];
  bulletY = [];
  bulletHit = [];
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
    if (millis() - enemyTime> 1000) {
      enemyTime = millis();
      enemyX.push(random(0, width));
      enemyY.push(0);
      enemyHit.push(false);
    }

    // 敵を動かす
    for (let i = 0; i < enemyY.length; i++) {
      enemyY[i] += 5;
    }

    // 弾を動かす
    for (let i = 0; i < bulletY.length; i++) {
      bulletY[i] -= 10;
    }

    // 敵と弾が当たったらスコアを増やす
    for (let i = 0; i < enemyX.length; i++) {
      for (let j = 0; j < bulletX.length; j++) {
        if (!enemyHit[i] && // 敵がまだ当たってない
            !bulletHit[j] && // 弾がまだ当たってない
            enemyX[i] - 30 < bulletX[j] &&
            bulletX[j] < enemyX[i] + 30 &&
            enemyY[i] - 20 < bulletY[j] &&
            bulletY[j] < enemyY[i] + 20) {
          enemyHit[i] = true;
          bulletHit[j] = true;
          score++;
        }
      }
    }

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
    fill("#FFFFFF");
    textAlign(LEFT);
    text("SCORE: " + score, 10, 20);
    
    // 時間を表示する
    let timeLimit = 10 - floor((millis() - gameTime) / 1000);
    textAlign(RIGHT);
    text("TIME: " + timeLimit, width - 10, 20);
    
    // 残り時間が0になったら終了画面に
  }
  
  if (mode == 2) {
    // 終了画面の表示
  }
}

function keyPressed() {
  // 弾を打つ
  if (key == " ") {
    bulletX.push(playerX);
    bulletY.push(height - 70);
    bulletHit.push(false);
  }
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