import * as PIXI from 'pixi.js';
import Scene from '../Scene';

export default class LoaderScene extends Scene {
  loader: PIXI.loaders.Loader;
  
  load() : PIXI.Container {
    const container = new PIXI.Container();
    this.loader = PIXI.loader;
    this.loader.add('knight', './assets/Knight.png');

    this.loader.load((loader : PIXI.loaders.Loader, resources : any) => {
      const knightAtlas = resources.knight.texture;
      const knightTextures = [];

      const width = 84;
      const height = 84;

      const colsNumber = knightAtlas.width / width;
      const rowsNumber = knightAtlas.height / height;
      
      for (let rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {
        for (let colIndex = 0; colIndex < colsNumber; colIndex++) {
          const rect = new PIXI.Rectangle(colIndex * width, rowIndex * height, width, height);
          const tex = new PIXI.Texture(knightAtlas, rect);
          knightTextures.push(tex);
        }
      }
      
      const idle = new PIXI.extras.AnimatedSprite([ knightTextures[0], knightTextures[1], knightTextures[2], knightTextures[3] ]);
      idle.x = 100;
      idle.y = 100;
      idle.anchor.set(0.5);
      idle.animationSpeed = 0.1;
      idle.play();
      container.addChild(idle);
      
      //const s = new PIXI.Sprite(t);
      //s.anchor.set(0.5);
      //s.x = app.screen.width / 2;
      //s.y = app.screen.height / 2;
      //app.stage.addChild(s);
    });
    return container;
  }
}
