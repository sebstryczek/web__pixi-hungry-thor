import * as PIXI from 'pixi.js';
import Assets from './state/Assets';
import State from './state/State';
import Config from './config/Config';

export default class Store {
  private _config: Config = new Config();
  get config(): Config {
    return this._config;
  }

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