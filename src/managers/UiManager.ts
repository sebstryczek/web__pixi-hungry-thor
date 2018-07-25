import * as PIXI from 'pixi.js';

export default class UiManager {
  private _uiCanvas: PIXI.Container;
  get uiCanvas(): PIXI.Container {
    return this._uiCanvas;
  }

  private width: number = 0;
  private height: number = 0;
  private uiPoints: PIXI.Text = null;
  private uiMissed: PIXI.Text = null;
  private uiGameOver: PIXI.Text = null;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this._uiCanvas = new PIXI.Container();

    this.uiPoints = new PIXI.Text('', {fontFamily: 'Arial', fontSize: 14, fill: 0x00ff00});
    this._uiCanvas.addChild(this.uiPoints);
          
    this.uiMissed = new PIXI.Text('', {fontFamily: 'Arial', fontSize: 14, fill: 0xff0000});
    this._uiCanvas.addChild(this.uiMissed);
          
    this.uiGameOver = new PIXI.Text('', {fontFamily: 'Arial', fontSize: 24, fill: 0xff0000});
    this.uiCanvas.addChild(this.uiGameOver);
  }

  public setUiPoints(value: string) {
    this.uiPoints.text = `Points: ${value}`;
  }

  public setUiMissed(value: string) {
    this.uiMissed.text = `Missed: ${value}`;
    this.uiMissed.position.x = this.width - this.uiMissed.getBounds().width;
  }

  public showUiGameOver(value: string) {
    this.uiGameOver.visible = true;
    this.uiGameOver.text = `Points: ${value}`;
    const bounds: PIXI.Rectangle = this.uiGameOver.getBounds();
    this.uiGameOver.position.x = this.width / 2 - bounds.width / 2;
    this.uiGameOver.position.y = this.height / 2 - bounds.height / 2;
  }

  public hideUiGameOver() {
    this.uiGameOver.visible = false;
  }
}