import * as PIXI from 'pixi.js';
import Store from './store/Store';
import ScenesManager from './managers/ScenesManager';
import LoaderScene from './scenes/LoaderScene';
import GameScene from './scenes/GameScene';

export default class Game {
  private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer = null;
  private scenesManager : ScenesManager = null;
  private store: Store = null;

  initialize(): void {
    this.store = new Store();

    const { width, height } = this.store.config.viewport;
    this.renderer = PIXI.autoDetectRenderer(width, height);
    document.body.appendChild(this.renderer.view);
    
    PIXI.ticker.shared
      .add(this.update, this)
      .add(this.render, this);
    
    const loaderScene = new LoaderScene( this.store );
    loaderScene.onLoaded( () => {
      this.scenesManager.runScene('GameScene');
    });

    const gameScene = new GameScene( this.store );

    this.scenesManager = new ScenesManager();
    this.scenesManager
      .addScene(loaderScene)
      .addScene(gameScene);

    this.scenesManager.runScene('LoaderScene');
  }

  update(deltaTime : number) {
    this.scenesManager.update(PIXI.ticker.shared.elapsedMS);
  }

  render() {
    this.renderer.render(this.scenesManager.display);
  }
}
