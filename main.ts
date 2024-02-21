namespace SpriteKind {
    export const plant = SpriteKind.create()
    export const sun = SpriteKind.create()
}
function SpawnInWaves (enemies: any[]) {
	
}
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
peashooter.setPosition(63, 107)
sunflower.setPosition(78, 107)
wallnut.setPosition(96, 107)
info.setScore(0)
pause(15000)
let Sun = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Sun.setVelocity(0, 3)
game.onUpdateInterval(16000, function () {
    while (info.score() < 0) {
        Sun.setPosition(randint(35, 120), 0)
    }
})
forever(function () {
    if (mySprite.overlapsWith(Sun)) {
        info.changeScoreBy(50)
    }
})
