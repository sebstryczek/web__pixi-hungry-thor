import * as PIXI from 'pixi.js';
import Scene from '../Scene';
import Store from '../Store';

export default class GameScene extends Scene {
  init(store: Store): void {
    const idle = new PIXI.extras.AnimatedSprite( store.state.assets.knightTexturesIdle );
    idle.x = 100;
    idle.y = 100;
    idle.anchor.set(0.5);
    idle.animationSpeed = 0.1;
    idle.play();

    this.display.addChild(idle);
  }

  update(deltaTime : number) : void {
  }
}
