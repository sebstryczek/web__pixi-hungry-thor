import * as PIXI from 'pixi.js';
import Scene from '../core/Scene';

export default class LoaderScene extends Scene {
  private loader: PIXI.loaders.Loader;
  private onLoadedCallback: Function = null;

  onLoaded(callback: Function) {
    this.onLoadedCallback = callback;
  }

  splitTexture(texture: PIXI.BaseTexture, width: number, height: number): PIXI.Texture[] {
    const result: PIXI.Texture[] = [];
    const colsNumber = texture.width / width;
    const rowsNumber = texture.height / height;

    for (let rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {
      for (let colIndex = 0; colIndex < colsNumber; colIndex++) {
        const rect = new PIXI.Rectangle(colIndex * width, rowIndex * height, width, height);
        const tex = new PIXI.Texture(texture, rect);
        result.push(tex);
      }
    }

    return result;
  }
  
  init() : void {
    this.loader = PIXI.loader;
    this.loader.add('food', './assets/Food.png');
    this.loader.add('knight', './assets/Knight.png');

    this.loader.load((loader : PIXI.loaders.Loader, resources : any) => {
      const { knight, food } = resources;
      const foodTextures: PIXI.Texture[] = this.splitTexture(food.texture, 16, 16);
      const knightTextures: PIXI.Texture[] = this.splitTexture(knight.texture, 84, 84);
      const knightTexturesIdle: PIXI.Texture[] = knightTextures.slice(0, 4);
      const knightTexturesLeft: PIXI.Texture[] = knightTextures.slice(20, 26);
      const knightTexturesRight: PIXI.Texture[] = knightTextures.slice(14, 20);

      this.state.foodTextures.set(foodTextures);
      this.state.knightTexturesIdle.set(knightTexturesIdle);
      this.state.knightTexturesLeft.set(knightTexturesLeft);
      this.state.knightTexturesRight.set(knightTexturesRight);
      
      if (this.onLoadedCallback) {
        this.onLoadedCallback();
      }
    });
  }

  update(deltaTime : number) : void {
    //console.log(this.loader.progress)
  }
}
