import * as PIXI from 'pixi.js';
import LoaderScene from './scenes/LoaderScene';

export default class Game {
  renderer: PIXI.WebGLRenderer|PIXI.CanvasRenderer;
  //animationLoop: PIXI.AnimationLoop;

  initialize() : void {
    console.log('Game.initialize()');
    const loaderScene : LoaderScene = new LoaderScene();
    loaderScene.load();
  }
}
