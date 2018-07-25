import Scene from '../core/Scene';
import InputManager from '../managers/InputManager';
import Player from '../gameObjects/Player';
import FoodItem from '../gameObjects/FoodItem';
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
    const width = this.state.viewportWidth.value;
    const height = this.state.viewportHeight.value;

    this.inputManager = new InputManager();
    this.loopsManager = new LoopsManager();

    this.uiManager = new UiManager(width, height);
    this.uiManager.uiCanvas.setParent(this);
    this.uiManager.setUiPoints('0');
    this.uiManager.setUiMissed('0');
    this.uiManager.hideUiGameOver();

    this.player = new Player(
      this.state.knightTexturesIdle.value,
      this.state.knightTexturesLeft.value,
      this.state.knightTexturesRight.value
    );
    this.player.position.set(width / 2, height - 100);
    this.player.setParent(this);

    this.foodItemsList = new FoodItemList(
      this.state.foodTextures.value,
      width
    );
    this.foodItemsList.setParent(this);

    this.loopsManager
      .registerLoop(() => this.foodItemsList.create(), 1);
    
    this.play();
  }

  public update(deltaTime: number): void {
    if (this.isPaused) return;

    const width = this.state.viewportWidth.value;
    const height = this.state.viewportHeight.value;
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
    this.state.points.set(this.state.points.value + 1);
    this.uiManager.setUiPoints(this.state.points.value.toString());
  }

  private foodMissed(foodItem: FoodItem) {
    this.foodItemsList.remove(foodItem);
    this.state.missed.set(this.state.missed.value + 1);
    this.uiManager.setUiMissed(this.state.missed.value.toString());
    if (this.state.missed.value >= 10) {
      this.gameOver();
    }
  }

  private gameOver() {
    this.uiManager.showUiGameOver(this.state.points.value.toString());
    this.pause();
  }
}
