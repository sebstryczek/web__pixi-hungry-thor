import KeyCode from '../enums/KeyCode';

export default class InputManager {
  private pressedKeys: KeyCode[] = [];

  constructor() {
    window.addEventListener('keydown', this._onKeyDown.bind(this), true);
    window.addEventListener('keyup', this._onKeyUp.bind(this), true);
  }

  private _onKeyDown(e: KeyboardEvent):void {
    const key: KeyCode = e.which || e.keyCode;
    if (this.pressedKeys.indexOf(key) === -1) {
      this.pressedKeys.push(key);
    }
    e.preventDefault();
  }

  private _onKeyUp(e: KeyboardEvent):void {
    const key: number = e.which || e.keyCode;
    const index: number = this.pressedKeys.indexOf(key);
    if (index !== -1) {
      this.pressedKeys.splice(index, 1);
    }
    e.preventDefault();
  }

  public keyDown(key: KeyCode): boolean {
    return this.pressedKeys.indexOf(key) !== -1;
  }

  public keyUp(key: KeyCode): boolean {
    return this.pressedKeys.indexOf(key) === -1;
  }
}