import * as PIXI from 'pixi.js';
const hd = window.devicePixelRatio === 2 ? "@2x" : "";

export default class LoaderScene {
  loader: PIXI.loaders.Loader;

  load() : void {
    this.loader = PIXI.loader;
    this.loader.add('knight', './assets/knight/knight.png');

    this.loader.load((loader : PIXI.loaders.Loader, resources : any) => {
      const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
      document.body.appendChild(app.view);

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
      idle.x = app.screen.width / 2;
      idle.y = app.screen.height / 2;
      idle.anchor.set(0.5);
      idle.animationSpeed = 0.1;
      idle.play();
      app.stage.addChild(idle);
      
      //const s = new PIXI.Sprite(t);
      //s.anchor.set(0.5);
      //s.x = app.screen.width / 2;
      //s.y = app.screen.height / 2;
      //app.stage.addChild(s);
    });
  }
}
