import Store from "../store/Store";
import Food from "../gameObjects/FoodItem";
import * as PIXI from "pixi.js";
import Player from "../gameObjects/Player";
import { Container } from "pixi.js";

export default class CollisionWatcher {
  elements: Map<Container[], Container[]>

  private onFoodCatched: Function;
  private onFoodMissed: Function;

  height: number;
  store: Store;
  constructor() {
    
  }

  public update(deltaTime: number) {
    
  }

  public reg(elems1: Container[], elems2: Container[], callback: Function) {
     
  }

}
