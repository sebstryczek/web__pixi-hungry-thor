import * as PIXI from 'pixi.js';
import Scene from '../core/Scene';

export default class ScenesManager {
  private _scene: Scene = null;

  get scene(): Scene {
    return this._scene;
  }

  private scenes: Scene[] = [];

  update(deltaTime: number): void {
    if (this._scene) {
      this._scene.update(deltaTime);
    }
  }

  addScene(scene: Scene): ScenesManager {
    if (this.scenes.indexOf(scene) !== -1) {
      return this;
    }
    this.scenes.push(scene);
    return this;
  }

  runScene(sceneName: string): void {
    const foundScene: Scene = this.scenes.find(
      (x: Scene) => x.constructor.name === sceneName
    );
    
    if (foundScene) {
      foundScene.init();
    }
    
    this._scene = foundScene;
  }
}