import State from "../state/State";

export default abstract class GameObject extends PIXI.Container {
  protected state: State;

  constructor(state: State) {
    super();
    this.state = state;
  }
  
  public abstract update(deltaTime: number): void;
}