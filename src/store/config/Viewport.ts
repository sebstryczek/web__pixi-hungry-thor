import * as PIXI from 'pixi.js';

export default class Viewport {
  private _width: number = 512;
  get width(): number {
    return this._width;
  }
  
  private _height: number = 512;
  get height(): number {
    return this._height;
  }
}