scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`0a000d0000030606060606060100000509090909090902000005090b09090a090200000509090a090a0a020000050a0909090909020000050909090a090902000005090a0909090a0200000509090a090a090200000509090a0a0909020000050a090909090a02000005090a0a09090a0200000509090a090a0a020000040808080808080700`, img`
        . 2 2 2 2 2 2 2 2 . 
        . 2 . . . . . . 2 . 
        . 2 . . . . 2 . 2 . 
        . 2 . . 2 . 2 2 2 . 
        . 2 2 . . . . . 2 . 
        . 2 . . . 2 . . 2 . 
        . 2 . 2 . . . 2 2 . 
        . 2 . . 2 . 2 . 2 . 
        . 2 . . 2 2 . . 2 . 
        . 2 2 . . . . 2 2 . 
        . 2 . 2 2 . . 2 2 . 
        . 2 . . 2 . 2 2 2 . 
        . 2 2 2 2 2 2 2 2 . 
        `, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark0,sprites.dungeon.stairSouth], TileScale.Sixteen))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`0a000d0000010101000101000000010101010101000101010001010101010101000001010102010101010101010001010101010101010001010100000101010100010100000101010101000001010101010101010001010101010001010101000100000001010101000001000001010001010000010101010101010100000001010100000001`, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3], TileScale.Sixteen))
})
tiles.setTilemap(tiles.createTilemap(hex`0a000d0000010303030303030400000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000608020e0e090807000000000c0e0e0500000000010d0a0e0e0b0d0400000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000c0e0e0e0e0f0e0500000c0e0e0e0e0e0e050000060808080808080700`, img`
    . 2 2 2 2 2 2 2 2 . 
    . 2 . . . . . . 2 . 
    . 2 . . . . . . 2 . 
    . 2 . . . . . . 2 . 
    . 2 . . . . . . 2 . 
    . 2 2 2 . . 2 2 2 . 
    . . . 2 . . 2 . . . 
    . 2 2 2 . . 2 2 2 . 
    . 2 . . . . . . 2 . 
    . 2 . . . . . . 2 . 
    . 2 . . . . . . 2 . 
    . 2 . . . . . . 2 . 
    . 2 2 2 2 2 2 2 2 . 
    `, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.floorLight0,sprites.dungeon.stairLarge], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . 3 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
