import Assets from './state/Assets';
import State from './state/State';
import Config from './config/Config';
import Score from './state/Score';

export default class Store {
  private _config: Config = new Config();
  get config(): Config {
    return this._config;
  }

  private _state: State = new State(new Assets([], [], [], []), new Score(0, 0));
  get state(): State {
    return this._state;
  }

  public setState(resources: Assets): void;
  public setState(score: Score): void;
  public setState(value: Assets|Score): void {
    const valueType: string = value.constructor.name;
    switch (valueType) {
      case 'Assets':
        this._state = new State( value as Assets, this._state.score );
        break;
      case 'Score':
        this._state = new State( this._state.assets, value as Score );
        break;
    
      default:
        break;
    }
  }

}