namespace SpriteKind {
    export const CAR = SpriteKind.create()
    export const MOVINGCAR = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    getParkedCar(buttonB)
})
scene.onOverlapTile(SpriteKind.CAR, sprites.vehicle.roadIntersection1, function (sprite, location) {
    sprite.setVelocity(0, 0)
    tiles.setWallAt(tiles.locationOfSprite(sprite), true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    getParkedCar(buttonA)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    getParkedCar(buttonLeft)
})
scene.onOverlapTile(SpriteKind.CAR, sprites.vehicle.roadIntersection3, function (sprite, location) {
    sprite.setVelocity(0, 0)
    tiles.setWallAt(tiles.locationOfSprite(sprite), true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    getParkedCar(buttonRight)
})
scene.onHitWall(SpriteKind.CAR, function (sprite, location) {
    tiles.setWallAt(tiles.locationOfSprite(sprite), true)
})
sprites.onOverlap(SpriteKind.MOVINGCAR, SpriteKind.MOVINGCAR, function (sprite, otherSprite) {
    game.over(false)
})
function getParkedCar (buttonSprite: Sprite) {
    testSprite = sprites.create(img`
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        `, SpriteKind.Player)
    testSprite.setPosition(buttonSprite.x - 16, buttonSprite.y)
    for (let value of sprites.allOfKind(SpriteKind.CAR)) {
        if (testSprite.overlapsWith(value)) {
            value.setKind(SpriteKind.MOVINGCAR)
            currentLocation = tiles.locationOfSprite(value)
            for (let index = 0; index < 4; index++) {
                tiles.setWallAt(currentLocation, false)
                if (sprites.readDataBoolean(value, "movingDown")) {
                    currentLocation = tiles.locationInDirection(currentLocation, CollisionDirection.Top)
                } else {
                    currentLocation = tiles.locationInDirection(currentLocation, CollisionDirection.Bottom)
                }
            }
            if (sprites.readDataBoolean(value, "movingDown")) {
                if (sprites.readDataBoolean(value, "turnRight")) {
                    scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tile6`)[0]))
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
                        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
                        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
                        . 2 c 2 e e e e e e e b c 4 2 2 
                        . 2 2 e b b e b b b e e b 4 2 2 
                        . 2 e b b b e b b b b e 2 2 2 2 
                        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
                        . e e e e e e f e e e f e 2 d d 
                        . e e e e e e f e e f e e e 2 d 
                        . e e e e e e f f f e e e e e e 
                        . e f f f f e e e e f f f e e e 
                        . . f f f f f e e f f f f f e . 
                        . . . f f f . . . . f f f f . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tile3`)[0]))
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 2 2 2 2 2 2 2 2 . . 
                        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
                        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
                        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
                        . d 2 2 4 c b e e e e e e e 2 c 
                        . 2 2 2 4 b e e b b b e b b e 2 
                        . 2 2 2 2 2 e b b b b e b b b e 
                        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
                        . 2 d d 2 e f e e e f e e e e e 
                        . d d 2 e e e f e e f e e e e e 
                        . e e e e e e e f f f e e e e e 
                        . e e e e f f f e e e e f f f f 
                        . . . e f f f f f e e f f f f f 
                        . . . . f f f f . . . . f f f . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else {
                if (sprites.readDataBoolean(value, "turnRight")) {
                    scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tile7`)[0]))
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . 3 3 3 3 3 3 3 3 . . . . 
                        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
                        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
                        . 3 c c d d d d d d 3 c c d 3 d 
                        . 3 c 3 a a a a a a a b c d 3 3 
                        . 3 3 a b b a b b b a a b d 3 3 
                        . 3 a b b b a b b b b a 3 3 3 3 
                        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
                        . a a a a a a f a a a f a 3 d d 
                        . a a a a a a f a a f a a a 3 d 
                        . a a a a a a f f f a a a a a a 
                        . a f f f f a a a a f f f a a a 
                        . . f f f f f a a f f f f f a . 
                        . . . f f f . . . . f f f f . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tile4`)[0]))
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 3 3 3 3 3 3 3 3 . . 
                        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
                        . . . . 3 c c 3 3 3 3 3 3 d c 3 
                        . . d 3 d c c 3 d d d d d d c c 
                        . d 3 3 d c b a a a a a a a 3 c 
                        . 3 3 3 d b a a b b b a b b a 3 
                        . 3 3 3 3 3 a b b b b a b b b a 
                        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
                        . 3 d d 3 a f a a a f a a a a a 
                        . d d 3 a a a f a a f a a a a a 
                        . a a a a a a a f f f a a a a a 
                        . a a a a f f f a a a a f f f f 
                        . . . a f f f f f a a f f f f f 
                        . . . . f f f f . . . . f f f . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            }
        }
    }
    testSprite.destroy()
}
let theCar: Sprite = null
let currentLocation: tiles.Location = null
let testSprite: Sprite = null
let buttonLeft: Sprite = null
let buttonRight: Sprite = null
let buttonB: Sprite = null
let buttonA: Sprite = null
let carSpeed = 10
tiles.setTilemap(tilemap`level1`)
scene.centerCameraAt(96, 80)
buttonA = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 f 3 3 3 3 3 . . . 
    . 3 3 3 3 3 f 3 f 3 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f f f f f 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . . 3 3 3 f 3 3 3 f 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonA, tiles.getTileLocation(9, 3))
buttonB = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 f f f f 3 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f f f f 3 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 f 3 3 3 3 . . 
    . . 3 3 3 f f f f 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonB, tiles.getTileLocation(4, 3))
buttonRight = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 f 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 f 3 3 3 . . 
    . 3 3 f f f f f f f f f 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 f 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 f 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonRight, tiles.getTileLocation(9, 6))
buttonLeft = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 f 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 f 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 f f f f f f f f f 3 3 . . 
    . 3 3 3 f 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 f 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 f 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonLeft, tiles.getTileLocation(4, 6))
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(50)) {
        theCar = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 4 4 2 2 2 2 . . . 
            . . . . . c 4 2 2 2 2 2 c . . . 
            . . . . 2 c 4 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 c 4 2 2 2 2 2 c 2 f . 
            . . . f e c 2 2 2 2 2 2 c e f . 
            . . . f 2 c 2 b b b b 2 c 2 f . 
            . . . e 2 2 b c c c c b 2 2 e . 
            . . . e e b c c c c c c b e e . 
            . . . f e 4 4 4 4 4 4 4 4 e f . 
            . . . f e 1 2 2 2 2 2 2 d e f . 
            . . . . 2 1 1 2 2 2 2 d d 2 f . 
            . . . . f 2 1 2 2 2 2 d 2 f . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            `, SpriteKind.CAR)
        tiles.placeOnRandomTile(theCar, assets.tile`tile2`)
        theCar.vy = carSpeed
        sprites.setDataBoolean(theCar, "movingDown", true)
    } else {
        theCar = sprites.create(img`
            . . . . . . a a c c a a . . . . 
            . . . . . a 3 3 3 3 3 3 a . . . 
            . . . . 3 c 3 3 3 3 3 3 c 3 . . 
            . . . a 3 c b 3 3 3 3 3 c 3 a . 
            . . . f 3 3 b 3 3 3 3 3 c 3 f . 
            . . . f 3 3 b 3 3 3 3 3 3 3 f . 
            . . . f 3 3 b 3 3 3 3 3 3 3 f . 
            . . . f 3 c 3 b b 3 3 3 c 3 f . 
            . . . a 3 c a c c c c a c 3 a . 
            . . . a 3 a c b b b b c a 3 a . 
            . . . a 3 a b b b b b b a 3 a . 
            . . . a a a a a a a a a a a a . 
            . . . f a 1 a a a a a a d a f . 
            . . . f a 1 1 a a a a d d a f . 
            . . . f f a a a a a a a a f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.CAR)
        tiles.placeOnRandomTile(theCar, assets.tile`tile1`)
        theCar.vy = 0 - carSpeed
        sprites.setDataBoolean(theCar, "movingDown", false)
    }
    if (tiles.tileIsWall(tiles.locationOfSprite(theCar))) {
        theCar.destroy()
    }
    sprites.setDataBoolean(theCar, "turnRight", Math.percentChance(50))
})
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.MOVINGCAR)) {
        if (value.tileKindAt(TileDirection.Center, assets.tile`tile3`) || (value.tileKindAt(TileDirection.Center, assets.tile`tile4`) || (value.tileKindAt(TileDirection.Center, assets.tile`tile6`) || value.tileKindAt(TileDirection.Center, assets.tile`tile7`)))) {
            value.destroy()
            info.changeScoreBy(1)
        }
    }
})
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.CAR)) {
        if (sprites.readDataBoolean(value, "blink")) {
            if (sprites.readDataBoolean(value, "turnRight")) {
                value.image.replace(5, 13)
                sprites.setDataBoolean(value, "blink", false)
            } else {
                value.image.replace(5, 1)
                sprites.setDataBoolean(value, "blink", false)
            }
        } else {
            if (sprites.readDataBoolean(value, "turnRight")) {
                value.image.replace(13, 5)
                sprites.setDataBoolean(value, "blink", true)
            } else {
                value.image.replace(1, 5)
                sprites.setDataBoolean(value, "blink", true)
            }
        }
        if (value.vy == 0 && !(tiles.tileIsWall(tiles.locationOfSprite(value)))) {
            if (sprites.readDataBoolean(value, "movingDown")) {
                value.vy = carSpeed
            } else {
                value.vy = 0 - carSpeed
            }
        }
    }
})
