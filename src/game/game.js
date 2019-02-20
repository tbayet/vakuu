import Phaser from 'phaser'
import PreloadScene from './scenes/PreloadScene'
import PlayScene from './scenes/PlayScene'

const launch = () => {
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 1080,
        height: 720,
        parent: 'game-container',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [
            PreloadScene,
            PlayScene
        ]
    })
  }
  
  export default launch
  export { launch }