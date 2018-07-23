export default abstract class Scene {
  constructor() {
    console.log('Created:', (<any>this).constructor.name);
  }
}