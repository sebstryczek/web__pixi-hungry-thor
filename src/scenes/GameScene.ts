import * as PIXI from 'pixi.js';
import Scene from './Scene';
import Store from '../store/Store';
import InputManager from '../managers/InputManager';
import KeyCode from '../enums/KeyCode';

export default class GameScene extends Scene {
  private idle:PIXI.extras.AnimatedSprite;
  private inputManager: InputManager = new InputManager();

  init(): void {
    const { width, height } = this.store.config.viewport;
    const idle = new PIXI.extras.AnimatedSprite( this.store.state.assets.knightTexturesIdle );
    idle.x = width / 2;
    idle.y = height - 100;
    idle.anchor.set(0.5);
    idle.animationSpeed = 0.1;
    idle.play();
    this.idle = idle;

    this.display.addChild(idle);
  }

  update(deltaTime : number) : void {
    const leftPressed: boolean = this.inputManager.keyDown(KeyCode.LEFT);
    const rightPressed: boolean = this.inputManager.keyDown(KeyCode.RIGHT);
    const { width, height } = this.store.config.viewport;
    const axisX: number = (leftPressed ? -1 : 0) + (rightPressed ? 1 : 0);
    const positionX: number = this.idle.position.x + axisX * deltaTime;
    if (positionX > 0 && positionX < width) {
      this.idle.position.x = positionX;
    }
  }
}
