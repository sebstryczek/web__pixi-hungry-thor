export default abstract class GameObject extends PIXI.Container {
  public init?(): void;
  
  public update?(deltaTime: number): void;

  public isColliding(other: GameObject): boolean {
    const rect = this.getBounds();
    const otherRect = other.getBounds();
    return rect.x + rect.width > otherRect.x &&
      rect.x < otherRect.x + otherRect.width &&
      rect.y + rect.height > otherRect.y &&
      rect.y < otherRect.y + otherRect.height;
  }
}
