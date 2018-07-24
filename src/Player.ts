import * as PIXI from 'pixi.js';
import FramesAnimation from './FramesAnimation';

export default class Player extends PIXI.Container {
  private currAnim: FramesAnimation;
  private animIdle: FramesAnimation;
  private animLeft: FramesAnimation;
  private animRight: FramesAnimation;

  constructor(texturesIdle: PIXI.Texture[], texturesLeft: PIXI.Texture[], texturesRight: PIXI.Texture[], ) {
    super();
    this.animIdle = new FramesAnimation(texturesIdle, this);
    this.animLeft = new FramesAnimation(texturesLeft, this);
    this.animRight = new FramesAnimation(texturesRight, this);
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
}
