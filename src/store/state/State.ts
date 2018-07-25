import * as PIXI from 'pixi.js';
import Assets from './Assets';
import Score from './Score';

export default class State {
  private _assets: Assets;
  get assets(): Assets {
    return this._assets;
  }

  private _score: Score;
  get score(): Score {
    return this._score;
  }

  constructor(
    assets: Assets,
    score: Score
  ) {
    this._assets = assets;
    this._score = score;
  }
}