import Phaser from "phaser";
import Demo from "./scenes/demo";
import { Preloader } from "./scenes/preloader";

const bootstrap = () => {
  var config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 500 },
      },
    },
    scene: [Preloader, Demo],
  };

  new Phaser.Game(config);
};

FBInstant.initializeAsync().then(bootstrap);
