import * as PIXI from 'pixi.js';
import FramesAnimation from './FramesAnimation';
import Food from './FoodItem';
import GameObject from '../core/GameObject';

export default class Player extends GameObject {
  private currAnim: FramesAnimation;
  public animIdle: FramesAnimation;
  private animLeft: FramesAnimation;
  private animRight: FramesAnimation;
  private minPosX: number;
  private maxPosX: number;
  private axisX: number;

  constructor(framesIdle: PIXI.Texture[], framesLeft: PIXI.Texture[], framesRight: PIXI.Texture[]) {
    super();
    this.animIdle = new FramesAnimation(framesIdle);
    this.animLeft = new FramesAnimation(framesLeft);
    this.animRight = new FramesAnimation(framesRight);
  
    this.addChild(this.animIdle);
    this.addChild(this.animLeft);
    this.addChild(this.animRight);
  }

  public setPlayerState(axisX: number) {
    const anim: FramesAnimation =
      axisX < 0 ? this.animLeft
        :
        axisX > 0 ? this.animRight
          :
          this.animIdle;

    this.setAnimations(anim);
  }

  private setAnimations(anim: FramesAnimation) {
    if (this.currAnim === anim) {
      return;
    }

    if (this.currAnim) {
      this.currAnim.stop();
    }

    this.currAnim = anim;
    this.currAnim.play();
  }

  public applyAxisX(axisX: number): Player {
    this.axisX = axisX;
    return this;
  }

  public applyMinPosX(minPosX: number): Player {
    this.minPosX = minPosX;
    return this;
  }

  public applyMaxPosX(maxPosX: number): Player {
    this.maxPosX = maxPosX;
    return this;
  }

  public update(deltaTime: number) {
    this.setPlayerState(this.axisX);
    const positionX: number = this.position.x + this.axisX * 0.2 * deltaTime;
    if (positionX > this.minPosX && positionX < this.maxPosX) {
      this.position.x = positionX;
    }
  }
}
