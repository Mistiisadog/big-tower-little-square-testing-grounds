namespace SpriteKind {
    export const jumpstatus = SpriteKind.create()
    export const conveyor = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`tile1`)) {
        jumprn = 0
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        jumprn = 1
    }
})
function makeconveyor () {
    for (let value of tiles.getTilesByType(assets.tile`right0`)) {
        conveyorbeltpart = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.conveyor)
        animation.runImageAnimation(
        conveyorbeltpart,
        [img`
            f b b b f b b b 
            f b b b f b b b 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f b b b f b b b 
            f b b b f b b b 
            `,img`
            b f b b b f b b 
            b f b b b f b b 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            b b b f b b b f 
            b b b f b b b f 
            `,img`
            b b f b b b f b 
            b b f b b b f b 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            b b f b b b f b 
            b b f b b b f b 
            `,img`
            b b b f b b b f 
            b b b f b b b f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            b f b b b f b b 
            b f b b b f b b 
            `,img`
            b b b f b b b f 
            b b b f b b b f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            b f b b b f b b 
            b f b b b f b b 
            `],
        100,
        true
        )
        tiles.placeOnTile(conveyorbeltpart, value)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 15) {
        mySprite.vy = -200
    }
    if (mySprite.vy == 0) {
        mySprite.vy = -200
    } else if (jumprn < maxjumps) {
        jumprn += 1
        mySprite.vy = -200
        mySprite.setImage(img`
            f f f f f f f f 
            f 6 6 6 6 6 6 f 
            f 6 6 6 6 6 6 f 
            f 6 6 6 6 6 6 f 
            f 6 6 6 6 6 6 f 
            f 6 6 6 6 6 6 f 
            f 6 6 6 6 6 6 f 
            f f f f f f f f 
            `)
    }
})
let conveyorbeltpart: Sprite = null
let maxjumps = 0
let jumprn = 0
let Gravity = 0
let mySprite: Sprite = null
makeconveyor()
mySprite = sprites.create(img`
    f f f f f f f f 
    f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 f 
    f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = Gravity
tiles.setCurrentTilemap(tilemap`level3`)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(14)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 194))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
mySprite.setFlag(SpriteFlag.BounceOnWall, false)
jumprn = 0
maxjumps = 1
Gravity = 300
let Beltspeed = 0.2
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
game.onUpdate(function () {
    mySprite.setImage(img`
        f f f f f f f f 
        f 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 f 
        f f f f f f f f 
        `)
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            f f f f f f f f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f f f f f f f f 
            `)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(img`
            f f f f f f f f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f f f f f f f f 
            `)
    } else if (mySprite.x % 2 == 0) {
        mySprite.setImage(img`
            f f f f f f f f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 f 
            f f f f f f f f 
            `)
    }
    if ((mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Right)) && mySprite.vy >= 0) {
        mySprite.vy = 15
        mySprite.setImage(img`
            . . . . f f f f 
            . . . . f 7 7 f 
            . . . . f 7 7 f 
            . . . . f 7 7 f 
            . . . . f 7 7 f 
            . . . . f 7 7 f 
            . . . . f 7 7 f 
            . . . . f f f f 
            `)
        jumprn = 0
    } else {
        mySprite.ay = 350
    }
    if (mySprite.vx < 0 || mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.image.flipX()
        mySprite.setImage(mySprite.image)
    }
})
