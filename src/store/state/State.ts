import * as PIXI from 'pixi.js';
import Assets from './Assets';

export default class State {
  assets: Assets;

  constructor(
    assets: Assets
  ) {
    this.assets = assets;
  }
}