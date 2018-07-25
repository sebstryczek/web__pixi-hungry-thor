import State from "../state/State";
import GameObject from "./GameObject";

export default abstract class Scene extends GameObject {
  protected isPaused: boolean = true;
  protected state: State;

  constructor(state: State) {
    super();
    this.state = state;
  }

  public play(): void {
    this.isPaused = false;
  }

  public pause(): void {
    this.isPaused = true;
  }
}
