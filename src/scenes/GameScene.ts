import Scene from '../core/Scene';
import InputManager from '../managers/InputManager';
import Player from '../gameObjects/Player';
import FoodItem from '../gameObjects/FoodItem';
import Score from '../store/state/Score';
import UiManager from '../managers/UiManager';
import FoodItemList from '../gameObjects/FoodItemsList';
import LoopsManager from '../managers/LoopsManager';

export default class GameScene extends Scene {
  private inputManager: InputManager = null;
  private loopsManager: LoopsManager = null;
  private uiManager: UiManager = null;

  private player: Player = null;
  private foodItemsList: FoodItemList = null;

  init(): void {
    const { width, height } = this.store.config.viewport;

    this.inputManager = new InputManager();
    this.loopsManager = new LoopsManager();

    this.uiManager = new UiManager(width, height);
    this.uiManager.uiCanvas.setParent(this.display);
    this.uiManager.setUiPoints('0');
    this.uiManager.setUiMissed('0');
    this.uiManager.hideUiGameOver();

    this.player = new Player(
      this.store.state.assets.knightTexturesIdle,
      this.store.state.assets.knightTexturesLeft,
      this.store.state.assets.knightTexturesRight
    );
    this.player.position.set(width / 2, height - 100);
    this.player.setParent(this.display);

    const foodTextures = this.store.state.assets.foodTextures;
    const maxPosX = this.store.config.viewport.width;
    this.foodItemsList = new FoodItemList(foodTextures, maxPosX);
    this.foodItemsList.setParent(this.display);

    this.loopsManager
      .registerLoop(() => this.foodItemsList.create(), 1);
    
    this.isStarted = true;
  }

  public update(deltaTime: number): void {
    if (!this.isStarted) return;

    const width: number = this.store.config.viewport.width;
    const height: number = this.store.config.viewport.height;
    const axisX: number = this.inputManager.getAxisX();

    this.player
      .applyMinPosX(0)
      .applyMaxPosX(width)
      .applyAxisX(axisX)
      .update(deltaTime);

    this.loopsManager.update(deltaTime);

    this.foodItemsList.forEach((foodItem: FoodItem) => {
      foodItem.update(deltaTime);

      const foodIsCatched: boolean = this.player.isColliding(foodItem);
      const foodInMissed: boolean = foodItem.position.y > height;
      if (foodIsCatched) {
        this.foodCatched(foodItem);
      } else if (foodInMissed) {
        this.foodMissed(foodItem);
      }
    });
  }

  private foodCatched(foodItem: FoodItem) {
    this.foodItemsList.remove(foodItem);
    const { points, missed } = this.store.state.score;
    this.store.setState(new Score(points + 1, missed));
    this.uiManager.setUiPoints(this.store.state.score.points.toString());
  }

  private foodMissed(foodItem: FoodItem) {
    this.foodItemsList.remove(foodItem);
    const { points, missed } = this.store.state.score;
    this.store.setState(new Score(points, missed + 1));
    this.uiManager.setUiMissed(this.store.state.score.missed.toString());
    if (this.store.state.score.missed >= 10) {
      this.gameOver();
    }
  }

  private gameOver() {
    this.uiManager.showUiGameOver(this.store.state.score.points.toString());
    this.isStarted = false;
  }
}
