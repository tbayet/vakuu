import { Scene } from 'phaser'

export default class PreloadScene extends Scene {
    constructor () {
        super({ key: "PreloadScene" })
    }

    preload() {
        this.load.setBaseURL("http://labs.phaser.io")
        this.load.image("sky", "assets/skies/space3.png")
        this.load.image("logo", "assets/sprites/phaser3-logo.png")
        this.load.image("red", "assets/particles/red.png")
    }

    create() {
        this.scene.start("PlayScene")
    }
}
