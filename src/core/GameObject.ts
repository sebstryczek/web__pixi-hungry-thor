import Store from "../store/Store";

export default abstract class GameObject extends PIXI.Container {
  protected store: Store;

  constructor(store: Store) {
    super();
    this.store = store;
  }
  
  public abstract update(deltaTime: number): void;
}