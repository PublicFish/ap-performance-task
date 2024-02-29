namespace SpriteKind {
    export const plant = SpriteKind.create()
    export const sun = SpriteKind.create()
    export const placeholder = SpriteKind.create()
    export const peashooter = SpriteKind.create()
    export const wallnut = SpriteKind.create()
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
            `, SpriteKind.peashooter)
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
            `, SpriteKind.wallnut)
        wallnut.setPosition(mySprite.x, mySprite.y)
        info.changeScoreBy(-50)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    sprites.destroy(otherSprite)
})
function DestroyingPlant (wallnuthealth: number, peashooterhealth: number) {
    if (Zombies.overlapsWith(peashooter)) {
        newpeashooterhealth = 5
        while (wallnuthealth != 0) {
            newwallnuthealth = peashooterhealth - 1
            pause(1000)
            if (peashooterhealth == 0) {
                break;
            }
        }
        sprites.destroy(peashooter)
    }
    if (Zombies.overlapsWith(wallnut)) {
        newwallnuthealth = 60
        while (newpeashooterhealth != 0) {
            newpeashooterhealth = wallnuthealth - 1
            pause(1000)
            if (wallnuthealth == 0) {
                break;
            }
        }
        sprites.destroy(wallnut)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    ZombieHealth = ZombieHealth - 1
    if (ZombieHealth <= 0) {
        sprites.destroy(otherSprite)
    }
})
let Peas: Sprite = null
let Sun: Sprite = null
let newwallnuthealth = 0
let newpeashooterhealth = 0
let Zombies: Sprite = null
let ZombieHealth = 0
let mySprite: Sprite = null
let wallnut: Sprite = null
let peashooter: Sprite = null
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
    `, SpriteKind.peashooter)
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
    `, SpriteKind.wallnut)
peashooter.setPosition(38, 57)
wallnut.setPosition(100, 57)
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
    . . . . . . f f f f . . . . . . 
    . . . . . f 7 7 2 2 f . . . . . 
    . . . . . f f 7 7 f f . . . . . 
    . . . . . f 7 7 7 7 f . . . . . 
    . . . . . f 7 7 7 7 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . f f . f f . f f . . . . 
    . . . . f . . f f . . f f . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    `, img`
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . . f f 7 7 f f . . . . . 
    . . . . . f 7 7 7 7 f . . . . . 
    . . . . . f 7 7 7 7 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . f f . f f . f f . . . . 
    . . . . f . . f f . . f f . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    `, img`
    . . . . b b b b b b b b . . . . 
    . . . . b b b b b b b b . . . . 
    . . . . . f f 7 7 f f . . . . . 
    . . . . . f 7 7 7 7 f . . . . . 
    . . . . . f 7 7 7 7 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . f f . f f . f f . . . . 
    . . . . f . . f f . . f f . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    `]
let ZombieDamage = 1
ZombieHealth = 10
game.onUpdateInterval(5000, function () {
    Zombies = sprites.create(ZombieImages._pickRandom(), SpriteKind.Enemy)
    tiles.placeOnRandomTile(Zombies, assets.tile`myTile10`)
})
game.onUpdateInterval(15000, function () {
    Sun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . . f 5 5 5 5 5 5 f . . . 
        . . . . . . f 5 5 5 5 f . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    Sun.setVelocity(0, 3)
    tiles.placeOnRandomTile(Sun, assets.tile`myTile8`)
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.peashooter)) {
        Peas = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Peas.setPosition(value.x, value.y)
        Peas.setVelocity(25, 0)
    }
})
forever(function () {
    Zombies.setVelocity(-2, 0)
})
game.onUpdateInterval(100, function () {
    DestroyingPlant(1, 5)
})
