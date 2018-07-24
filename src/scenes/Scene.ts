import Store from "../store/Store";

export default abstract class Scene {
  protected store: Store;

  private _display: PIXI.Container;
  get display() {
    return this._display;
  }

  constructor(store: Store) {
    this.store = store;
    this._display = new PIXI.Container();
  }
  
  public abstract init(): void;
  
  public abstract update(deltaTime: number): void;
}