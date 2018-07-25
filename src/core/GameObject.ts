export default abstract class GameObject extends PIXI.Container {
  public init?(): void;
  
  public update?(deltaTime: number): void;
}
