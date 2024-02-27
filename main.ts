namespace SpriteKind {
    export const plant = SpriteKind.create()
    export const sun = SpriteKind.create()
    export const placeholder = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    SpawnPlant()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SpawnPlant()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.plant, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    DestroyingPlant(60, 5)
})
function SpawnPlant () {
    if (info.score() >= 100 && controller.A.isPressed()) {
        peashooter = sprites.create(img`
            . . f f f f f f . . . . f f . . 
            . f 7 7 7 7 7 7 f f f f f f f . 
            . f 7 f f 7 7 7 7 7 7 f f f f . 
            . f 7 f f 7 7 7 7 7 7 f f f f . 
            . f 7 7 7 7 7 7 7 7 7 f f f f . 
            . f 7 7 7 7 7 7 7 f f f f f f . 
            . . f 7 7 7 7 7 f . . . f f . . 
            . . . f f f f f . . . . . . . . 
            . . . . f 7 f . . . . . . . . . 
            . . . . f 7 f . . . . . . . . . 
            . . . . f 7 f . . f f . . . . . 
            . . . . f 7 f . f 7 f . . . . . 
            . . . f f 7 f f 7 f . . . . . . 
            . . f 7 f 7 f 7 f . . . . . . . 
            . f 7 f f 7 f f . . . . . . . . 
            . f f . f 7 f . . . . . . . . . 
            `, SpriteKind.plant)
        peashooter.setPosition(mySprite.x, mySprite.y)
        info.changeScoreBy(-100)
    }
    if (info.score() >= 50 && controller.B.isPressed()) {
        wallnut = sprites.create(img`
            . . . . . f f f f f f f . . . . 
            . . . . f 4 4 4 4 4 4 4 f . . . 
            . . . f 4 4 4 4 4 4 4 4 4 f . . 
            . . . f 4 f f 4 4 4 f f 4 f . . 
            . . . f 4 f f 4 4 4 f f 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . f 4 4 4 f f f f f 4 4 4 f . 
            . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . . f 4 4 4 4 4 4 4 4 4 f . . 
            . . . f 4 4 4 4 4 4 4 4 4 f . . 
            . . . f 4 4 4 4 4 4 4 4 4 f . . 
            . . . . f 4 4 4 4 4 4 4 f . . . 
            . . . . . f f f f f f f . . . . 
            `, SpriteKind.plant)
        wallnut.setPosition(mySprite.x, mySprite.y)
        info.changeScoreBy(-50)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    sprites.destroy(otherSprite)
})
function DestroyingPlant (wallnuthealth: number, peashooterhealth: number) {
    let Zombies: Sprite = null
    newpeashooterhealth = 5
    newwallnuthealth = 60
    if (Zombies.overlapsWith(peashooter)) {
        while (newpeashooterhealth != 0) {
            newpeashooterhealth = peashooterhealth - 1
            pause(1000)
        }
        sprites.destroy(peashooter)
    }
    if (Zombies.overlapsWith(wallnut)) {
        while (wallnuthealth != 0) {
            newwallnuthealth = wallnuthealth - 1
            pause(1000)
        }
        sprites.destroy(wallnut)
    }
}
let newwallnuthealth = 0
let newpeashooterhealth = 0
let wallnut: Sprite = null
let peashooter: Sprite = null
let mySprite: Sprite = null
let Sun = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 1 1 1 1 1 1 f . . . . . 
    . . . . f f f 1 1 1 f . . . . . 
    . . . . . . f 1 1 1 f . . . . . 
    . . . . . f 1 f f 1 f . . . . . 
    . . . . f 1 f . f 1 f . . . . . 
    . . . . f f . . f 1 f . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setScore(100)
mySprite.setStayInScreen(true)
info.setScore(100)
mySprite.setStayInScreen(true)
let ZombieImages = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f 7 7 2 f . . . . . 
    . . . . . f 7 7 7 2 2 f . . . . 
    . . . . . f 7 f 7 f 7 f . . . . 
    . . . . . f 7 7 7 7 7 f . . . . 
    . . . . . . f 7 7 7 f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    `, img`
    .....bbbbbbb....
    .....bbbbbbb....
    .....bbbbbbb....
    .....cbbbbbc....
    .....f7f7f7f....
    .....f77777f....
    ......f777f.....
    .......fff......
    .....fffffff....
    .....f..f..f....
    .....f..f..f....
    ........f.......
    .....fffffff....
    .....f..f..f....
    .....f..f..f....
    ........f.......
    .......fff......
    ......f...f.....
    ......f...f.....
    `]
let ZombieDamage = 1
