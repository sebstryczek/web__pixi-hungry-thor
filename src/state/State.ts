import * as PIXI from 'pixi.js';
import StateItem from './StateItem';

export default class State {
  public readonly viewportWidth = new StateItem<number>(512);
  public readonly viewportHeight = new StateItem<number>(512);


  public readonly foodTextures = new StateItem<PIXI.Texture[]>([]);
  public readonly knightTexturesIdle = new StateItem<PIXI.Texture[]>([]);
  public readonly knightTexturesLeft = new StateItem<PIXI.Texture[]>([]);
  public readonly knightTexturesRight = new StateItem<PIXI.Texture[]>([]);

  public readonly points = new StateItem<number>(0);
  public readonly missed = new StateItem<number>(0);
}