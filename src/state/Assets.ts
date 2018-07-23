import * as PIXI from 'pixi.js';

export default class Assets {
  private _foodTextures: PIXI.Texture[];
  get foodTextures(): PIXI.Texture[] {
    return this._foodTextures;
  }

  private _knightTexturesIdle: PIXI.Texture[];
  get knightTexturesIdle(): PIXI.Texture[] {
    return this._knightTexturesIdle;
  }

  constructor(
    foodTextures: PIXI.Texture[],
    knightTexturesIdle: PIXI.Texture[],
  ) {
    this._foodTextures = foodTextures;
    this._knightTexturesIdle = knightTexturesIdle;
  }
}