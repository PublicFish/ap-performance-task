namespace SpriteKind {
    export const plant = SpriteKind.create()
    export const sun = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    sprites.destroy(otherSprite)
})
let Sun: Sprite = null
let Zombies: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
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
let peashooter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f 7 7 7 7 f . . . . . . 
    . . . f 7 7 7 7 7 7 f . . . f . 
    . . . f 7 7 7 f 7 7 7 f f f 7 f 
    . . . f 7 7 7 7 7 7 7 7 7 7 f 7 
    . . . f 7 7 7 7 7 7 f f f f 7 f 
    . . . . f 7 7 7 7 f . . . . f . 
    . . . . . f f 7 f . . . . . . . 
    . . . . . . f 7 f . f f . . . . 
    . . . . . f f 7 f f 7 f . . . . 
    . . . . f 7 7 7 7 7 f . . . . . 
    . . . f 7 f f 7 f f . . . . . . 
    . . . f f . f 7 f . . . . . . . 
    `, SpriteKind.plant)
let sunflower = sprites.create(img`
    . . . . f f . f 5 f . f f . . . 
    . . . . f 5 f f 5 f f 5 f . . . 
    . . . . . f 5 f f f 5 f . . . . 
    . . . . f f f e e e f f f . . . 
    . . . f 5 5 f f e f f 5 5 f . . 
    . . . . f f f e e e f f f . . . 
    . . . . . f 5 f f f 5 f . . . . 
    . . . . f 5 f f 5 f f 5 f . . . 
    . . . . f f . f 5 f . f f . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . f 7 f . . . . . . 
    . . . . f f . f 7 f . . . . . . 
    . . . . f 7 f f 7 f f . . . . . 
    . . . . . f 7 7 7 7 7 f . . . . 
    . . . . . . f f 7 f f 7 f . . . 
    . . . . . . . f 7 f . f f . . . 
    `, SpriteKind.plant)
let wallnut = sprites.create(img`
    . . . . . f f f f f f f . . . . 
    . . . . f 4 4 4 4 4 4 4 f . . . 
    . . . . f 4 4 4 4 4 4 4 f . . . 
    . . . . f 4 f f 4 f f 4 f . . . 
    . . . f 4 4 f f 4 f f 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 4 f . . 
    . . . f 4 4 4 f f f 4 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 4 f . . 
    . . . . f 4 4 4 4 4 4 4 f . . . 
    . . . . f 4 4 4 4 4 4 4 f . . . 
    . . . . f 4 4 4 4 4 4 4 f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.plant)
peashooter.setPosition(60, 107)
sunflower.setPosition(78, 107)
wallnut.setPosition(96, 107)
info.setScore(100)
let SunLocations = tiles.getTilesByType(assets.tile`myTile8`)
mySprite.setStayInScreen(true)
let ZombieSpawns = tiles.getTilesByType(assets.tile`myTile10`)
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
    . . . . . f f f f f f f . . . . 
    . . . . . f . . f . . f . . . . 
    . . . . . f . . f . . f . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    `, img`
    . . . . . . . . 4 . . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . . . f 7 f 7 f 2 f . . . . 
    . . . . . f 7 7 7 7 7 f . . . . 
    . . . . . . f 7 7 7 f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f . . f . . f . . . . 
    . . . . . f . . f . . f . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    `, img`
    . . . . . b b b b b b b . . . . 
    . . . . . b b b b b b b . . . . 
    . . . . . b b b b b b b . . . . 
    . . . . . c b b b b b c . . . . 
    . . . . . f 7 f 7 f 7 f . . . . 
    . . . . . f 7 7 7 7 7 f . . . . 
    . . . . . . f 7 7 7 f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f . . f . . f . . . . 
    . . . . . f . . f . . f . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    `]
game.onUpdateInterval(5000, function () {
    Zombies = sprites.create(ZombieImages._pickRandom(), SpriteKind.Enemy)
    tiles.placeOnRandomTile(Zombies, assets.tile`myTile10`)
})
game.onUpdateInterval(15000, function () {
    Sun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . f f . . f 5 f . . f f . . 
        . . . f 5 f . f 5 f . f 5 f . . 
        . . . . f 5 f f f f f 5 f . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . f f f 5 5 5 5 5 f f f . . 
        . . f 5 5 f 5 5 5 5 5 f 5 5 f . 
        . . . f f f 5 5 5 5 5 f f f . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 f f f f f 5 f . . . 
        . . . f 5 f . f 5 f . f 5 f . . 
        . . . f f . . f 5 f . . f f . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(Sun, assets.tile`myTile8`)
})
forever(function () {
    Sun.setVelocity(0, 3)
    Zombies.setVelocity(-3, 0)
})
