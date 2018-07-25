import * as PIXI from 'pixi.js';

export default class StateItem<T> {
  private _value: T;
  get value(): T {
    return this._value;
  }

  constructor(value: T) {
    this._value = value;
  }
  
  public set(value: T): void {
    this._value = value;
  }
}
