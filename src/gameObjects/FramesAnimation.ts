import * as PIXI from 'pixi.js';
import GameObject from '../core/GameObject';

export default class FramesAnimation extends GameObject {
  private animatedSprite: PIXI.extras.AnimatedSprite;
  
  constructor(frames: PIXI.Texture[]) {
    super();
    this.animatedSprite = new PIXI.extras.AnimatedSprite(frames);
    this.animatedSprite.animationSpeed = 0.1;
    this.animatedSprite.anchor.set(0.5);
    this.animatedSprite.visible = false;

    this.addChild(this.animatedSprite);
  }

  public play(): void {
    this.animatedSprite.visible = true;
    this.animatedSprite.gotoAndPlay(0);
  }

  public stop(): void {
    this.animatedSprite.visible = false;
    this.animatedSprite.stop();
  }
}
