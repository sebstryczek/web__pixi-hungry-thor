import * as PIXI from 'pixi.js';
import Scene from './Scene';
import LoaderScene from './scenes/LoaderScene';
import Store from './Store';

export default class ScenesManager {
  private _scene: Scene = null;

  get scene(): Scene {
    return this._scene;
  }

  get display(): PIXI.Container {
    return this._scene.display;
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

  runScene(sceneName: string, store: Store): void {
    const foundScene: Scene = this.scenes.find(
      (x: Scene) => x.constructor.name === sceneName
    );
    
    if (foundScene) {
      foundScene.init(store);
    }
    
    this._scene = foundScene;
  }
}