export class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    // FBInstant.setLoadingProgress()
    //@ts-ignore
    let files = preload_files || [];
    files.forEach((file_path: string, i: number) => {
      let filename = file_path
        .split("/")
        .slice(-1)[0]
        .split(".")
        .slice(0, -1)
        .join("");

      //@TODO: for each file type use requred function

      // this.load.aseprite(filename, file_path);
      FBInstant.setLoadingProgress(i * (100 / files.length));
      console.log(i, (i + 1) * (100 / files.length));
    });

    FBInstant.startGameAsync().then(() => this.startGame());
  }

  startGame() {
    this.scene.start("GameScene");
  }
}
