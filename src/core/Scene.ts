import State from "../state/State";

export default abstract class Scene {
  protected isStarted: boolean = false;
  protected readonly state: State;

  private _display: PIXI.Container;
  get display(): PIXI.Container {
    return this._display;
  }

  constructor(state: State) {
    this.state = state;
    this._display = new PIXI.Container();
  }
  
  public abstract init(): void;
  
  public abstract update(deltaTime: number): void;
}