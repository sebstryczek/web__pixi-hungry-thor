import * as PIXI from 'pixi.js';
import GameObject from '../core/GameObject';

export default class FoodItem extends GameObject {
  private sprite: PIXI.Sprite;
  
  constructor(texture: PIXI.Texture, position: PIXI.Point) {
    super();
    this.sprite = new PIXI.Sprite(texture);
    this.addChild(this.sprite);
    this.position = position;
  }

  public update(deltaTime : number): void {
    this.position.y += 0.1 * deltaTime
  }
}
