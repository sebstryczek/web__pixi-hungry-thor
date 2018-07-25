import FoodItem from '../gameObjects/FoodItem';

class Loop {
  private interval: number = 0;
  private timer: number = 0;
  private func: Function = null;

  constructor(func: Function, interval: number) {
    this.interval = interval;
    this.func = func;
  }

  public update(deltaTime: number): void {
    this.timer += deltaTime / 1000;
    if (this.timer >= this.interval) {
      this.func();
      this.timer = 0;
    }    
  }
} 

export default class LoopsManager {
  private loops: Loop[] = null;

  constructor() {
    this.loops = [];
  }

  public registerLoop(func: Function, interval: number): void {
    this.loops.push(new Loop(func, interval))
  }

  public update(deltaTime: number): void {
    this.loops.forEach(
      (l: Loop) => l.update(deltaTime)
    );
  }
}
