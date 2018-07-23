import Store from "./Store";

export default abstract class Scene {
  private _display: PIXI.Container;
  get display() {
    return this._display;
  }

  constructor() {
    this._display = new PIXI.Container();
  }
  
  public abstract init(store: Store): void;
  
  public abstract update(deltaTime: number): void;
}