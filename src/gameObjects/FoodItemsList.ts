import FoodItem from './FoodItem';
import * as PIXI from 'pixi.js';
import GameObject from '../core/GameObject';

export default class FoodItemsList extends GameObject {
  private foodItems: FoodItem[] = null;
  private textures: PIXI.Texture[] = null;
  private maxPosX = 0;
  
  constructor(textures: PIXI.Texture[], maxPosX: number) {
    super();
    this.foodItems = [];
    this.textures = textures;
    this.maxPosX = maxPosX;
  }

  public create() {
    const texture = this.getRandomTexture();
    const position = this.getRandomPosition();
    const foodItem: FoodItem = new FoodItem(texture, position);
    this.foodItems.push(foodItem);
    this.addChild(foodItem);
    return this;
  }

  public remove(foodItem: FoodItem) {
    const index = this.foodItems.indexOf(foodItem);
    this.foodItems.splice(index, 1);
    foodItem.destroy();
    return this;
  }

  public forEach(func: Function): FoodItemsList {
    this.foodItems.forEach(x => func(x));
    return this;
  }

  private getRandomTexture(): PIXI.Texture {
    const random = Math.floor(Math.random() * this.textures.length);
    return this.textures[random];
  }

  private getRandomPosition(): PIXI.Point {
    return new PIXI.Point((Math.random() * this.maxPosX / 10) * 10, -32);
  }
}
