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
                        . . . . a a a a a a a a . . . . 
                        . . . a 4 a a a a a a c a . . . 
                        . . a c 4 a a a a a a c c a . . 
                        . a c c 4 4 4 4 4 4 a c c 4 a d 
                        . a c a b b b b b b b b c 4 a a 
                        . a a b c c b c c c b b b 4 a a 
                        . a b c c c b c c c c b a a a a 
                        . b b a a a b a a a a a b a a a 
                        . b b b b b b f b b b f b a d d 
                        . b b b b b b f b b f b b b a d 
                        . b b b b b b f f f b b b b b b 
                        . b f f f f b b b b f f f b b b 
                        . . f f f f f b b f f f f f b . 
                        . . . f f f . . . . f f f f . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tile3`)[0]))
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . a a a a a a a a . . . . 
                        . . . a c a a a a a a 4 a . . . 
                        . . a c c a a a a a a 4 c a . . 
                        d a 4 c c a 4 4 4 4 4 4 c c a . 
                        a a 4 c b b b b b b b b a c a . 
                        a a 4 b b b c c c b c c b a a . 
                        a a a a b c c c c b c c c b a . 
                        a a a b a a a a a b a a a b b . 
                        d d a b f b b b f b b b b b b . 
                        d a b b b f b b f b b b b b b . 
                        b b b b b b f f f b b b b b b . 
                        b b b f f f b b b b f f f f b . 
                        . b f f f f f b b f f f f f . . 
                        . . f f f f . . . . f f f . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else {
                if (sprites.readDataBoolean(value, "turnRight")) {
                    scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tile7`)[0]))
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . 7 7 7 7 7 7 7 7 . . . . 
                        . . . 7 d 7 7 7 7 7 7 c 7 . . . 
                        . . 7 c d 7 7 7 7 7 7 c c 7 . . 
                        . 7 c c d d d d d d 7 c c d 7 d 
                        . 7 c 7 6 6 6 6 6 6 6 b c d 7 7 
                        . 7 7 a b b 6 b b b 6 6 b d 7 7 
                        . 7 6 b b b 6 b b b b 6 7 7 7 7 
                        . 6 6 7 7 7 6 7 7 7 7 7 6 7 7 7 
                        . 6 6 6 6 6 6 f 6 6 6 f 6 7 d d 
                        . 6 6 6 6 6 6 f 6 6 f 6 6 6 7 d 
                        . 6 6 6 6 6 6 f f f 6 6 6 6 6 6 
                        . 6 f f f f 6 6 6 6 f f f 6 6 6 
                        . . f f f f f 6 6 f f f f f 6 . 
                        . . . f f f . . . . f f f f . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tile4`)[0]))
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . 7 7 7 7 7 7 7 7 . . . . 
                        . . . 7 c 7 7 7 7 7 7 d 7 . . . 
                        . . 7 c c 7 7 7 7 7 7 d c 7 . . 
                        d 7 d c c 7 d d d d d d c c 7 . 
                        7 7 d c b 6 6 6 6 6 6 6 7 c 7 . 
                        7 7 d b 6 6 b b b 6 b b a 7 7 . 
                        7 7 7 7 6 b b b b 6 b b b 6 7 . 
                        7 7 7 6 7 7 7 7 7 6 7 7 7 6 6 . 
                        d d 7 6 f 6 6 6 f 6 6 6 6 6 6 . 
                        d 7 6 6 6 f 6 6 f 6 6 6 6 6 6 . 
                        6 6 6 6 6 6 f f f 6 6 6 6 6 6 . 
                        6 6 6 f f f 6 6 6 6 f f f f 6 . 
                        . 6 f f f f f 6 6 f f f f f . . 
                        . . f f f f . . . . f f f . . . 
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
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 f 9 9 9 9 9 . . . 
    . 9 9 9 9 9 f 9 f 9 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f f f f f 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . . 9 9 9 f 9 9 9 f 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonA, tiles.getTileLocation(9, 3))
buttonB = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . 9 9 9 9 f f f f 9 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f f f f 9 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 f 9 9 9 9 . . 
    . . 9 9 9 f f f f 9 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonB, tiles.getTileLocation(4, 3))
buttonRight = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . 9 9 9 9 9 9 9 f 9 9 9 9 9 . . 
    . 9 9 9 9 9 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 9 9 9 9 9 f 9 9 9 . . 
    . 9 9 f f f f f f f f f 9 9 . . 
    . 9 9 9 9 9 9 9 9 9 f 9 9 9 . . 
    . 9 9 9 9 9 9 9 9 f 9 9 9 9 . . 
    . 9 9 9 9 9 9 9 f 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonRight, tiles.getTileLocation(9, 6))
buttonLeft = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . 9 9 9 9 9 f 9 9 9 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 9 9 9 9 9 . . 
    . 9 9 9 f 9 9 9 9 9 9 9 9 9 . . 
    . 9 9 f f f f f f f f f 9 9 . . 
    . 9 9 9 f 9 9 9 9 9 9 9 9 9 . . 
    . 9 9 9 9 f 9 9 9 9 9 9 9 9 . . 
    . 9 9 9 9 9 f 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(buttonLeft, tiles.getTileLocation(4, 6))
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(50)) {
        theCar = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . a a a a a a . . . . 
            . . . . . a a c c a a a a . . . 
            . . . . . c c a a a a a c . . . 
            . . . . a c c a a a a a c a . . 
            . . . b a c c a a a a a c a b . 
            . . . f a c c a a a a a c a f . 
            . . . f b c a a a a a a c b f . 
            . . . f a c a b b b b a c a f . 
            . . . b a a b c c c c b a a b . 
            . . . b b b c c c c c c b b b . 
            . . . f b 4 4 4 4 4 4 4 4 b f . 
            . . . f b 1 a a a a a a d b f . 
            . . . . a 1 1 a a a a d d a f . 
            . . . . f a 1 a a a a d a f . . 
            . . . . . b a a a a a a b . . . 
            `, SpriteKind.CAR)
        tiles.placeOnRandomTile(theCar, assets.tile`tile2`)
        theCar.vy = carSpeed
        sprites.setDataBoolean(theCar, "movingDown", true)
    } else {
        theCar = sprites.create(img`
            . . . . . . 6 6 8 8 6 6 . . . . 
            . . . . . 6 7 7 7 7 7 7 6 . . . 
            . . . . 7 8 7 7 7 7 7 7 8 7 . . 
            . . . 6 7 8 b 7 7 7 7 7 8 7 6 . 
            . . . f 7 7 b 7 7 7 7 7 8 7 f . 
            . . . f 7 7 b 7 7 7 7 7 7 7 f . 
            . . . f 7 7 b 7 7 7 7 7 7 7 f . 
            . . . f 7 8 3 b b 7 7 7 8 7 f . 
            . . . 6 7 8 6 c c c c 6 8 7 6 . 
            . . . 6 7 6 c b b b b c 6 7 6 . 
            . . . 6 7 6 b b b b b b 6 7 6 . 
            . . . 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . . f 6 1 6 6 6 6 6 6 d 6 f . 
            . . . f 6 1 1 6 6 6 6 d d 6 f . 
            . . . f f 6 6 6 6 6 6 6 6 f f . 
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
