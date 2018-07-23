import * as PIXI from 'pixi.js';
import LoaderScene from './scenes/LoaderScene';

export default class Game {
  private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
  //animationLoop: PIXI.AnimationLoop;

  initialize(): void {
    console.log('Game.initialize()');
    
    const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
    document.body.appendChild(app.view);
    
    const loaderScene: LoaderScene = new LoaderScene();
    app.stage = loaderScene.load();

    this.update();
  }

  update() {
    requestAnimationFrame(this.update.bind(this));
    //this.renderer.render(this.world);
  }
}
