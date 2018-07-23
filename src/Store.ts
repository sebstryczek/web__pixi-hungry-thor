import * as PIXI from 'pixi.js';
import Assets from './state/Assets';
import State from './state/State';

export default class Store {
  private _state: State;
  get state(): State {
    return this._state;
  }

  public setState(resources: Assets): void;
  public setState(value: Assets): void {
    const valueType: string = value.constructor.name;
    switch (valueType) {
      case 'Assets':
        this._state = new State( value as Assets );
        break;
    
      default:
        break;
    }
  }

}