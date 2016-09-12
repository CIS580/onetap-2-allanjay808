"use strict";

/**
 * @module exports the Enemy class
 */
module.exports = exports = Enemy;

/**
  * @constructor Enemey
  * Creates a new enemy object
  * @param {Postition} position object specifying an x and y
  */
function Enemy(position) {
  this.state = "waiting"
  this.frame = 0;
  this.timer = 0;
  this.x = position.x;
  this.y = position.y;
  this.width  = 32;
  this.height = 16;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/spider/spider walk.png');
}

/**
 * @function updates the enemy object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Enemy.prototype.update = function(elapsedTime) {

  this.timer += elapsedTime;
  switch (this.state) {
    case "waiting" :
      if (this.timer > 1000/16) {
        this.frame = (this.frame + 1) % 4;
        this.timer = 0;
      }
      this.y += 1;
      break;
  }
}

/**
 * @function renders the enemy into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Enemy.prototype.render = function(time, ctx) {

  ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    this.frame * this.width, 0, this.width, this.height,
    // destination rectangle
    this.x, this.y, 2*this.width, 2*this.height
  );
}
