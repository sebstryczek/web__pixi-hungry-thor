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

  private _knightTexturesLeft: PIXI.Texture[];
  get knightTexturesLeft(): PIXI.Texture[] {
    return this._knightTexturesLeft;
  }

  private _knightTexturesRight: PIXI.Texture[];
  get knightTexturesRight(): PIXI.Texture[] {
    return this._knightTexturesRight;
  }

  constructor(
    foodTextures: PIXI.Texture[],
    knightTexturesIdle: PIXI.Texture[],
    knightTexturesLeft: PIXI.Texture[],
    knightTexturesRight: PIXI.Texture[],
  ) {
    this._foodTextures = foodTextures;
    this._knightTexturesIdle = knightTexturesIdle;
    this._knightTexturesLeft = knightTexturesLeft;
    this._knightTexturesRight = knightTexturesRight;
  }
}