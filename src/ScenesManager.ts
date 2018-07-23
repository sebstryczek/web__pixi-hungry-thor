import * as PIXI from 'pixi.js';
import Scene from './Scene';

export default class ScenesManager {
  private _scene : Scene = null;
  get scene() : Scene {
    return this._scene;
  }

  constructor(renderer : PIXI.WebGLRenderer | PIXI.CanvasRenderer) {
    /*
      super();
      this.renderer = renderer;
      this.scenes = [];

      this._fixedWidth = 0;
      this._fixedHeight = 0;

      this._last = 0;

      this.scene = new Scene('initial');
    */
  }

  update(delta : number) : void {
  }
  
  addScene(scene : Scene) : void {
    /*
    if(this.scenes.indexOf(scene) !== -1)return this;
    scene.manager = this;
    this.scenes.push(scene);
    return this;
    */
  }
  
  loadScene(scene : Scene) : void {

  }

}