import * as PIXI from 'pixi.js';
import ScenesManager from './managers/ScenesManager';
import LoaderScene from './scenes/LoaderScene';
import GameScene from './scenes/GameScene';
import State from './state/State';

export default class Game {
  private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer = null;
  private scenesManager: ScenesManager = null;

  initialize(): void {
    const state: State = new State();

    const width: number = state.viewportWidth.value;
    const height: number = state.viewportHeight.value;
    this.renderer = PIXI.autoDetectRenderer(width, height);
    document.body.appendChild(this.renderer.view);

    PIXI.ticker.shared
      .add(this.update, this)
      .add(this.render, this);

    const loaderScene = new LoaderScene(state);
    loaderScene.onLoaded(() => {
      this.scenesManager.runScene('GameScene');
    });

    const gameScene = new GameScene(state);

    this.scenesManager = new ScenesManager();
    this.scenesManager
      .addScene(loaderScene)
      .addScene(gameScene);

    this.scenesManager.runScene('LoaderScene');
  }

  update(deltaTime: number) {
    this.scenesManager.update(PIXI.ticker.shared.elapsedMS);
  }

  render() {
    this.renderer.render(this.scenesManager.scene);
  }
}
