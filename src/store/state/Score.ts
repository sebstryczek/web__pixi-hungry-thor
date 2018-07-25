import * as PIXI from 'pixi.js';

export default class Score {
  private _points: number;
  get points(): number {
    return this._points;
  }

  private _missed: number;
  get missed(): number {
    return this._missed;
  }
  constructor(
    points: number,
    missed: number
  ) {
    this._points = points;
    this._missed = missed;
  }
}