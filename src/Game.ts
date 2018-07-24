import * as PIXI from 'pixi.js';
import LoaderScene from './scenes/LoaderScene';
import ScenesManager from './ScenesManager';
import GameScene from './scenes/GameScene';
import Store from './store/Store';

export default class Game {
  private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
  private scenesManager : ScenesManager = null;
  private store: Store = new Store();

  initialize(): void {
    const { width, height } = this.store.config.viewport;
    this.renderer = PIXI.autoDetectRenderer(width, height);
    document.body.appendChild(this.renderer.view);
    
    PIXI.ticker.shared
      .add(this.update, this)
      .add(this.render, this);
    
    const loaderScene = new LoaderScene();
    loaderScene.onLoaded( () => {
      this.scenesManager.runScene('GameScene', this.store);
    });

    const gameScene = new GameScene();

    this.scenesManager = new ScenesManager();
    this.scenesManager
      .addScene(loaderScene)
      .addScene(gameScene);

    this.scenesManager.runScene('LoaderScene', this.store);
  }

  update(deltaTime : number) {
    this.scenesManager.update(deltaTime, this.store);
  }

  render() {
    this.renderer.render(this.scenesManager.display);
  }
}
