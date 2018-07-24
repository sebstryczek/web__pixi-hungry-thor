import * as PIXI from 'pixi.js';
import Scene from './Scene';
import Store from '../store/Store';
import InputManager from '../managers/InputManager';
import KeyCode from '../enums/KeyCode';
import Player from '../Player';

export default class GameScene extends Scene {
  private inputManager: InputManager = new InputManager();
  private player: Player = null;

  init(): void {
    const { width, height } = this.store.config.viewport;
    
    this.player = new Player(
      this.store.state.assets.knightTexturesIdle,
      this.store.state.assets.knightTexturesLeft,
      this.store.state.assets.knightTexturesRight
    );
    this.player.position.set(width / 2, height - 100);
    
    this.display.addChild(this.player);
  }

  update(deltaTime : number) : void {
    const { width, height } = this.store.config.viewport;

    const leftPressed: boolean = this.inputManager.keyDown(KeyCode.LEFT);
    const rightPressed: boolean = this.inputManager.keyDown(KeyCode.RIGHT);
    
    const axisX: number = (leftPressed ? -1 : 0) + (rightPressed ? 1 : 0);
    this.player.setPlayerState(axisX);
    
    const minPosX = 0;
    const maxPosX = this.store.config.viewport.width;
    const positionX: number = this.player.position.x + axisX * deltaTime;
    if (positionX > minPosX && positionX < maxPosX) {
      this.player.position.x = positionX;
    }
  }
}
